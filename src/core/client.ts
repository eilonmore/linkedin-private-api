import { AxiosProxyConfig } from 'axios';

import {
  ConversationRepository,
  InvitationRepository,
  MessageRepository,
  ProfileRepository,
  SearchRepository,
} from '../repositories';
import { LinkedInRequest } from './linkedin-request';
import { Login } from './login';

export class Client {
  request: LinkedInRequest;

  constructor();
  constructor(proxy: AxiosProxyConfig);
  constructor(proxy?: AxiosProxyConfig) {
    this.request = proxy
      ? new LinkedInRequest(proxy)
      : new LinkedInRequest();
  }

  login = new Login({ client: this });

  search = new SearchRepository({ client: this });

  invitation = new InvitationRepository({ client: this });

  profile = new ProfileRepository({ client: this });

  conversation = new ConversationRepository({ client: this });

  message = new MessageRepository({ client: this });
}
