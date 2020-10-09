import { LinkedInSearchHit } from './linkedin-search-hit.entity';
import { MiniProfile } from './mini-profile.entity';

export interface PeopleSearchHit extends LinkedInSearchHit {
  profile: MiniProfile;
}
