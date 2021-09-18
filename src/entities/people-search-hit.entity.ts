import { LinkedInSearchHitV2 } from './linkedin-search-hit-v2.entity';
import { MiniProfile } from './mini-profile.entity';

export interface PeopleSearchHit extends LinkedInSearchHitV2 {
  profile: MiniProfile;
}
