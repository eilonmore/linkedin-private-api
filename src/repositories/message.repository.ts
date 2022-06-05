import { orderBy } from 'lodash';

import { Client } from '../core/client';
import { ConversationId } from '../entities/conversation.entity';
import { EVENT_TYPE } from '../entities/linkedin-event.entity';
import { LinkedInMessageEvent } from '../entities/linkedin-message-event.entity';
import { MessageEventCreateResponse } from '../entities/message-create-response.entity';
import { MessageEvent } from '../entities/message-event.entity';
import { ProfileId } from '../entities/mini-profile.entity';
import { GetMessagesResponse } from '../responses/messages.response.get';
import { MessageScroller } from '../scrollers';
import { getProfilesFromResponse } from './profile.repository';

const participantToProfileId = (participant: string): string =>
  participant.replace(/urn:li:fs_messagingMember:\(|\)/g, '').split(',')[1];

export class MessageRepository {
  private client: Client;

  constructor({ client }: { client: Client }) {
    this.client = client;
  }

  getMessages({ conversationId, createdBefore }: { conversationId: ConversationId; createdBefore?: Date }): MessageScroller {
    return new MessageScroller({ conversationId, createdBefore, fetchMessages: this.fetchMessages.bind(this) });
  }

  async sendMessage({
    profileId,
    conversationId,
    text,
  }: {
    profileId?: ProfileId;
    conversationId?: ConversationId;
    text: string;
  }): Promise<MessageEventCreateResponse> {
    const response = await this.client.request.message.sendMessage({ profileId, conversationId, text });

    return { ...response?.data?.value, text };
  }

  private async fetchMessages({
    conversationId,
    createdBefore,
  }: {
    conversationId: ConversationId;
    createdBefore?: Date;
  }): Promise<MessageEvent[]> {
    const response = await this.client.request.message.getMessages({ conversationId, createdBefore });
    const messages = response.included.filter(p => p.$type === EVENT_TYPE) as LinkedInMessageEvent[];
    const profiles = getProfilesFromResponse<GetMessagesResponse>(response);

    return orderBy(messages, 'createdAt', 'desc').map(message => ({
      ...message,
      text: message?.eventContent?.attributedBody?.text,
      sentFrom: profiles[participantToProfileId(message['*from'])],
    }));
  }
}
