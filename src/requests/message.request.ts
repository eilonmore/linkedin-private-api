import { ProfileId } from 'src/entities';

import { LinkedInRequest } from '../core/linkedin-request';
import { ConversationId } from '../entities/conversation.entity';
import { SendMessageResponse } from '../responses/message.response.post';
import { GetMessagesResponse } from '../responses/messages.response.get';

export class MessageRequest {
  private request: LinkedInRequest;

  constructor({ request }: { request: LinkedInRequest }) {
    this.request = request;
  }

  sendMessage({ profileId, text }: { profileId: ProfileId; text: string }): Promise<SendMessageResponse> {
    const queryParams = {
      action: 'create',
    };
    const payload = {
      keyVersion: 'LEGACY_INBOX',
      conversationCreate: {
        eventCreate: {
          value: {
            'com.linkedin.voyager.messaging.create.MessageCreate': {
              attributedBody: {
                text,
                attributes: [],
              },
              attachments: [],
            },
          },
        },
        subtype: 'MEMBER_TO_MEMBER',
        recipients: [profileId],
      },
    };

    return this.request.post<SendMessageResponse>('messaging/conversations', payload, {
      params: queryParams,
    });
  }

  getMessages({
    conversationId,
    createdBefore,
  }: {
    conversationId: ConversationId;
    createdBefore?: Date;
  }): Promise<GetMessagesResponse> {
    const queryParams = {
      keyVersion: 'LEGACY_INBOX',
      ...(createdBefore && { createdBefore: createdBefore.getTime() }),
    };

    return this.request.get<GetMessagesResponse>(`messaging/conversations/${conversationId}/events`, {
      params: queryParams,
    });
  }
}
