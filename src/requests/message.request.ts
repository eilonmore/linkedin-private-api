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

  sendMessage({ 
    profileId, 
    conversationId, 
    text,
    attachments = [],
  }: { 
    profileId?: ProfileId; 
    conversationId?: ConversationId; 
    text: string,
    attachments?: any[],
  }): Promise<SendMessageResponse> {
    const queryParams = {
      action: 'create',
    };
    
    const directMessagePayload = {
      keyVersion: 'LEGACY_INBOX',
      conversationCreate: {
        eventCreate: {
          value: {
            'com.linkedin.voyager.messaging.create.MessageCreate': {
              attributedBody: {
                text,
                attributes: [],
              },
              attachments,
            },
          },
        },
        subtype: 'MEMBER_TO_MEMBER',
        recipients: [profileId],
      },
    };

    const conversationPayload = {
      eventCreate: {
        originToken: '54b3a724-59c5-4cf2-adbd-660483010a87',
        value: {
          'com.linkedin.voyager.messaging.create.MessageCreate': {
            attributedBody: { text, attributes: [] },
            attachments,
          },
        },
      },
      dedupeByClientGeneratedToken: false,
    };

    const conversationUrl = `messaging/conversations/${conversationId}/events`
    const directMessageUrl = 'messaging/conversations'

    const payload = conversationId ? conversationPayload : directMessagePayload
    const url = conversationId ? conversationUrl : directMessageUrl 

    return this.request.post<SendMessageResponse>(url, payload, { params: queryParams });
  }

  getMessages({
    conversationId,
    createdBefore,
  }: {
    conversationId: ConversationId;
    createdBefore?: Date;
  }): Promise<GetMessagesResponse> {
    const queryParams = {
      // keyVersion: 'LEGACY_INBOX',
      q: 'syncToken',
      ...(createdBefore && { createdBefore: createdBefore.getTime() }),
    };

    return this.request.get<GetMessagesResponse>(`messaging/conversations/${conversationId}/events`, {
      params: queryParams,
    });
  }

  async getAttachment({ url }: { url: string }): Promise<unknown> {
    return this.request.get(url, { 
      responseType: "arraybuffer", 
      fullResponse: true, 
      maxContentLength: 100000000,
      maxBodyLength: 1000000000 
    });
  }

  async uploadAttachment({ 
    file,
    fileSize,
    filename,
    mimetype
  }: {
    file: any,
    fileSize: number, 
    filename: string,
    mimetype: string
  }): Promise<unknown> {
    const url = "/voyager/api/voyagerVideoDashMediaUploadMetadata";
    const uploadMetadataResponse = await this.request.post<any>(url, {
      fileSize,
      filename,
      mediaUploadType: "MESSAGING_FILE_ATTACHMENT"
    }, {
      params: { action: "upload" }
    });

    const {
      urn: mediaUrn,
      singleUploadUrl: uploadUrl,
    } = uploadMetadataResponse.value as any;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await this.request.put(uploadUrl, file as any, {
      headers: {
        "content-type": mimetype,
        "content-length": fileSize,
      }
    });

    return {
      urn: mediaUrn,
      filename,
      fileSize,
      mimetype,
    };
  }
}
