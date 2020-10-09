import { LinkedInVectorImage } from './linkedin-vector-image.entity';

export const MINI_COMPANY_TYPE = 'com.linkedin.voyager.entities.shared.MiniCompany';

export interface LinkedInMiniCompany {
  $type: typeof MINI_COMPANY_TYPE;
  active: boolean;
  entityUrn: string;
  logo: LinkedInVectorImage;
  name: string;
  objectUrn: string;
  showcase: boolean;
  trackingId: string;
  universalName: string;
}
