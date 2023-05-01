import { AxiosProxyConfig } from 'axios';
import { SessionStrategy, FileSession } from './session_trategy';

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
  session_stategy?: SessionStrategy;
}

export class Client {
  request: LinkedInRequest;

  session_strategy: SessionStrategy;

  constructor({ proxy, session_stategy }: ClientOpts = {}) {
    this.request = new LinkedInRequest({ proxy });
    this.session_strategy = session_stategy ? session_stategy : new FileSession(`${process.cwd()}/sessions.json`);
  }

  login = new Login({ client: this });

  search = new SearchRepository({ client: this });

  invitation = new InvitationRepository({ client: this });

  profile = new ProfileRepository({ client: this });

  conversation = new ConversationRepository({ client: this });

  message = new MessageRepository({ client: this });
}
