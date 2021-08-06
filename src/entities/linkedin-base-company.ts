import { LinkedInVectorImage } from './linkedin-vector-image.entity';

export const BASE_COMPANY_TYPE = 'com.linkedin.voyager.organization.Company';

export interface LinkedInBaseCompany {
  $type: typeof BASE_COMPANY_TYPE;
  $anti_abuse_annotations: {
    attributeId: number;
    entityId: number;
  }[];
  $recipeTypes: string[];
  entityUrn: string;
  logo: {
    $type: 'com.linkedin.voyager.organization.CompanyLogoImage';
    image: LinkedInVectorImage;
    type: 'SQUARE_LOGO';
  };
  name: string;
}
