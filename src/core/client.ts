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

interface ClientOpts {
  proxy?: AxiosProxyConfig;
  httpAgent?: any;
  httpsAgent?: any;
}

export class Client {
  request: LinkedInRequest;

  constructor({ proxy,httpAgent, httpsAgent }: ClientOpts = {}) {
    this.request = new LinkedInRequest({ proxy,httpAgent, httpsAgent });
  }

  login = new Login({ client: this });

  search = new SearchRepository({ client: this });

  invitation = new InvitationRepository({ client: this });

  profile = new ProfileRepository({ client: this });

  conversation = new ConversationRepository({ client: this });

  message = new MessageRepository({ client: this });
}
