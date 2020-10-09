import { LinkedInVectorImage } from './linkedin-vector-image.entity';

export const COMPANY_TYPE = 'com.linkedin.voyager.dash.organization.Company';

export interface LinkedInCompany {
  $type: typeof COMPANY_TYPE;
  $anti_abuse_annotations: {
    attributeId: number;
    entityId: number;
  }[];
  $recipeTypes: string[];
  entityUrn: string;
  industry: Record<string, string>;
  industryUrns: string[];
  logo: {
    vetorImage: LinkedInVectorImage;
  };
  name: string;
  universalName: string;
  url: string;
}
