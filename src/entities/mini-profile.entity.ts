import { LinkedInMiniProfile } from './linkedin-mini-profile.entity';

export type ProfileId = string;

export interface MiniProfile extends LinkedInMiniProfile {
  profileId: ProfileId;
  pictureUrls: string[];
}
