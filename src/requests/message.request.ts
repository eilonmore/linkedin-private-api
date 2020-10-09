import { LinkedInRequest } from '../core/linkedin-request';
import { ConversationId } from '../entities/conversation.entity';
import { SendMessageResponse } from '../responses/message.response.post';
import { GetMessagesResponse } from '../responses/messages.response.get';

export class MessageRequest {
  private request: LinkedInRequest;

  constructor({ request }: { request: LinkedInRequest }) {
    this.request = request;
  }

  sendMessage({ conversationId, text }: { conversationId: ConversationId; text: string }): Promise<SendMessageResponse> {
    const queryParams = {
      action: 'create',
    };
    const payload = {
      eventCreate: {
        originToken: '54b3a724-59c5-4cf2-adbd-660483010a87',
        value: {
          'com.linkedin.voyager.messaging.create.MessageCreate': {
            attributedBody: { text, attributes: [] },
            attachments: [],
          },
        },
      },
      dedupeByClientGeneratedToken: false,
    };

    return this.request.post<SendMessageResponse>(`messaging/conversations/${conversationId}/events`, payload, {
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
