import { Request } from './request';
import { AuthRequest } from '../requests/auth.request';
import { ConversationRequest } from '../requests/conversation.request';
import { InvitationRequest } from '../requests/invitation.request';
import { MessageRequest } from '../requests/message.request';
import { ProfileRequest } from '../requests/profile.request';
import { SearchRequest } from '../requests/search.request';
import { SalesNavigatorProfileRequest } from '../requests/sn-profile.request';
import { SalesNavigatorMessageRequest } from '../requests/sn-message.request';
import { SalesNavigatorTypeaheadRequest } from '../requests/sn-typeahead.request';
import { SalesNavigatorConnectionRequest } from '../requests/sn-connection.request';
import { SalesNavRequest } from 'src/requests/salesnav.request';

export class LinkedInRequest extends Request {
  conversation = new ConversationRequest({ request: this });

  invitation = new InvitationRequest({ request: this });

  message = new MessageRequest({ request: this });

  profile = new ProfileRequest({ request: this });

  search = new SearchRequest({ request: this });

  auth = new AuthRequest({ request: this });

  salesNavigatorProfile = new SalesNavigatorProfileRequest({ request: this });

  salesNavigatorMessage = new SalesNavigatorMessageRequest({ request: this });

  salesNavigatorTypeahead = new SalesNavigatorTypeaheadRequest({ request: this });

  salesNavigatorConnection = new SalesNavigatorConnectionRequest({ request: this });

  salesNav = new SalesNavRequest({ request: this });
}
