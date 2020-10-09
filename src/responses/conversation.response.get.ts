import { LinkedinConversation } from '../entities/linkedin-conversation.entity';
import { LinkedInMiniProfile } from '../entities/linkedin-mini-profile.entity';

export interface GetConversationResponse {
  data: LinkedinConversation;
  included: LinkedInMiniProfile[];
}
