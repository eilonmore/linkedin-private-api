import { LinkedInRequest } from '../core/linkedin-request';
import { extractProfileId } from '../utils/common-li';

export class SalesNavigatorConnectionRequest {
  private request: LinkedInRequest;

  constructor({ request }: { request: LinkedInRequest }) {
    this.request = request;
  }

  sendConnectionRequest({
    profileUrn,
    message = ''
  }: {
    profileUrn: string;
    message: string;
  }): Promise<any> {
    const profileId = extractProfileId(profileUrn);

    const url = 'https://www.linkedin.com/sales-api/salesApiConnection';

    const queryParams = {
      action: 'connect'
    };

    const payload = {
      member: profileId,
      message,
      isEmailRequired: false
    };

    return this.request.post<any>(url, payload, {
      params: queryParams
    });
  }
}
