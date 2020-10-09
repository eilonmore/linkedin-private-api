import { LinkedInInvitation } from './linkedin-invitation.entity';
import { MiniProfile } from './mini-profile.entity';

export interface Invitation extends LinkedInInvitation {
  profile: MiniProfile;
}
