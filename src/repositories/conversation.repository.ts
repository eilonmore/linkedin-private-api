import { map, orderBy } from 'lodash';

import { Client } from '../core/client';
import { Conversation, ConversationId } from '../entities/conversation.entity';
import { CONVERSATION_TYPE, LinkedinConversation } from '../entities/linkedin-conversation.entity';
import { MiniProfile, ProfileId } from '../entities/mini-profile.entity';
import { GetConversationsResponse } from '../responses/conversations.response.get';
import { ConversationScroller } from '../scrollers/conversation.scroller';
import { getProfilesFromResponse } from './profile.repository';

const participantToProfileId = (participant: string) => participant.replace(/urn:li:fs_messagingMember:\(|\)/g, '').split(',')[1];
const transformConversationId = (conversationUrn: string) => conversationUrn.replace('urn:li:fs_conversation:', '');

const transformConversations = ({
  conversations,
  profiles,
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
      conversationId: transformConversationId(conversation.entityUrn),
    };
  });

export class ConversationRepository {
  private client: Client;

  constructor({ client }: { client: Client }) {
    this.client = client;
  }

  async getConversation({ conversationId }: { conversationId: ConversationId }): Promise<Conversation> {
    // this.client.request.setHeaders({ ...this.client.request, accept: "..." })
    var oldHeaders = this.client.request.getHeaders();
    this.client.request.updateHeaders({accept:'application/vnd.linkedin.normalized+json+2.1'});
    
    var transformedConversations;
    // try{
      const response = await this.client.request.conversation.getConversation({ conversationId });
      const conversation = response.data;
      const profiles = getProfilesFromResponse(response);
  
      transformedConversations = transformConversations({
        profiles,
        conversations: [conversation],
      })[0];
    // }
    // catch{
      
    // }
    // finally{
    //   this.client.request.setHeaders(oldHeaders);
    // }

    return transformedConversations;
  }

  getConversations({
    recipients,
    createdBefore,
  }: { recipients?: ProfileId | ProfileId[]; createdBefore?: Date } = {}): ConversationScroller {
    return new ConversationScroller({ fetchConversations: this.fetchConversations.bind(this), recipients, createdBefore });
  }

  private async fetchConversations({
    recipients,
    createdBefore,
  }: {
    recipients?: ProfileId | ProfileId[];
    createdBefore?: Date;
  }): Promise<Conversation[]> {
    const res = await this.client.request.conversation.getConversations({ recipients, createdBefore });
    const conversations = res.included.filter(p => p.$type === CONVERSATION_TYPE) as LinkedinConversation[];
    const profiles = getProfilesFromResponse<GetConversationsResponse>(res);

    return orderBy(transformConversations({ conversations, profiles }), 'lastActivityAt', 'desc');
  }
}
