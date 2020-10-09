import { LinkedInMiniProfile, MiniProfileUrn } from '../entities/linkedin-mini-profile.entity';

export interface GetOwnProfileResponse {
  data: {
    '*miniProfile': MiniProfileUrn;
    $type: 'com.linkedin.voyager.common.Me';
    plainId: number;
    premiumSubscriber: boolean;
    publicContactInfo: {
      $type: 'com.linkedin.voyager.identity.shared.PublicContactInfo';
    };
  };
  included: LinkedInMiniProfile[];
}
