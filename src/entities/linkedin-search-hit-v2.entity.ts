import { LinkedInImageViewModel } from './linkedin-image-view-model.entity';
import { LinkedInTextViewModel } from './linkedin-text-view-model.entity';

export interface LinkedInSearchHitV2 {
  $type: 'com.linkedin.voyager.search.SearchHitV2';
  '*badges': string;
  headless: string;
  headline: LinkedInTextViewModel;
  image: LinkedInImageViewModel;
  memberDistance: {
    $type: 'com.linkedin.voyager.common.MemberDistance';
    value: string;
  };
  nameMatch: boolean;
  navigationUrl: string;
  publicIdentifier: string;
  secondaryTitle: LinkedInTextViewModel;
  socialProofText: string;
  subline: LinkedInTextViewModel;
  targetUrn: string;
  title: LinkedInTextViewModel;
  trackingId: string;
  trackingUrn: string;
  type: string;
}
