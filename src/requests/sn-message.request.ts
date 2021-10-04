import { LinkedInRequest } from '../core/linkedin-request';
import { SendSalesNavigatorMessageResponse } from '../responses/sn-message.response.post';

export class SalesNavigatorMessageRequest {
  private request: LinkedInRequest;

  constructor({ request }: { request: LinkedInRequest }) {
    this.request = request;
  }

  sendMessage({
    subject,
    body,
    recipients
  }: {
    subject: string;
    body: string;
    recipients: string[];
  }): Promise<SendSalesNavigatorMessageResponse>;

  sendMessage({
    subject,
    body,
    threadId
  }: {
    subject: string;
    body: string;
    threadId: string;
  }): Promise<SendSalesNavigatorMessageResponse>;

  sendMessage({
    subject,
    body,
    threadId,
    recipients
  }: {
    subject: string;
    body: string;
    threadId?: string;
    recipients?: string[]
  }): Promise<SendSalesNavigatorMessageResponse> {
    const url = 'https://www.linkedin.com/sales-api/salesApiMessageActions';

    const queryParams = {
      action: 'createMessage'
    };

    const payload = {
      createMessageRequest: {
        ...(subject ? { subject } : {}),
        ...(body ? { body } : {}),

        ...(threadId ? { threadId } : {}),
        ...(recipients?.length ? { recipients } : {}),

        copyToCrm: false
      }
    };

    return this.request.post<SendSalesNavigatorMessageResponse>(url, payload, {
      params: queryParams
    });
  }

  getMessages(): void {
  }
}
