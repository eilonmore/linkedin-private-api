import { SendSalesNavigatorConnectionRequestResponse } from 'src/responses/sn-connection.response.post';
import { linkedinSalesNavigatorUrl } from '../../config';
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
  }): Promise<SendSalesNavigatorConnectionRequestResponse> {
    const profileId = extractProfileId(profileUrn);

    const url = `${linkedinSalesNavigatorUrl}/salesApiConnection`;

    const queryParams = {
      action: 'connect'
    };

    const payload = {
      member: profileId,
      message,
      isEmailRequired: false
    };

    return this.request.post<SendSalesNavigatorConnectionRequestResponse>(url, payload, {
      params: queryParams
    });
  }
}
