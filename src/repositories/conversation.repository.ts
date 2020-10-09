import { map, orderBy } from 'lodash';

import { Client } from '../core/client';
import { Conversation, ConversationId } from '../entities/conversation.entity';
import { CONVERSATION_TYPE, LinkedinConversation } from '../entities/linkedin-conversation.entity';
import { MiniProfile, ProfileId } from '../entities/mini-profile.entity';
import { GetConversationsResponse } from '../responses/conversations.response.get';
import { ConversationScroller } from '../scrollers/conversation.scroller';
import { getProfilesFromResponse } from './profile.repository';

const participantToProfileId = (participant: string) => participant.replace(/urn:li:fs_messagingMember:\(|\)/g, '').split(',')[1];

const transformConversations = ({
  conversations = [],
  profiles = {},
}: {
  conversations: LinkedinConversation[];
  profiles: Record<ProfileId, MiniProfile>;
}): Conversation[] =>
  conversations.map(conversation => {
    const participants = map(conversation['*participants'], participant => {
      const profileId = participantToProfileId(participant);

      return profiles[profileId];
    }) as MiniProfile[];

    return {
      ...conversation,
      participants,
      conversationId: conversation.entityUrn.replace('urn:li:fs_conversation:', ''),
    };
  });

export class ConversationRepository {
  private client: Client;

  constructor({ client }: { client: Client }) {
    this.client = client;
  }

  async getConversation({ conversationId }: { conversationId: ConversationId }): Promise<Conversation> {
    const response = await this.client.request.conversation.getConversation({ conversationId });
    const conversation = response.data;
    const profiles = getProfilesFromResponse(response);

    return transformConversations({
      profiles,
      conversations: [conversation],
    })[0];
  }

  getConversations({ createdBefore }: { createdBefore?: Date } = {}): ConversationScroller {
    return new ConversationScroller({ fetchConversations: this.fetchConversations.bind(this), createdBefore });
  }

  private async fetchConversations({ createdBefore }: { createdBefore?: Date }): Promise<Conversation[]> {
    const res = await this.client.request.conversation.getConversations({ createdBefore });
    const conversations = res.included.filter(p => p.$type === CONVERSATION_TYPE) as LinkedinConversation[];
    const profiles = getProfilesFromResponse<GetConversationsResponse>(res);

    return orderBy(transformConversations({ conversations, profiles }), 'lastActivityAt', 'desc');
  }
}
