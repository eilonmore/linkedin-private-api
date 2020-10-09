import { AxiosResponse } from 'axios';
import { stringify as queryStringify } from 'querystring';

import { authHeaders, authUrl } from '../../config';
import { LinkedInRequest } from '../core/linkedin-request';

export class AuthRequest {
  private request: LinkedInRequest;

  constructor({ request }: { request: LinkedInRequest }) {
    this.request = request;
  }

  getAnonymousAuth(): Promise<AxiosResponse> {
    return this.request.get(authUrl, { fullResponse: true });
  }

  authenticateUser({
    username,
    password,
    sessionId,
  }: {
    username: string;
    password: string;
    sessionId: string;
  }): Promise<AxiosResponse> {
    const payload = {
      session_key: username,
      session_password: password,
      JSESSIONID: sessionId,
    };

    return this.request.post(authUrl, queryStringify(payload), {
      headers: authHeaders,
      fullResponse: true,
    });
  }
}
