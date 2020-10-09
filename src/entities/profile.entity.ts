import { LinkedInCompany } from './linkedin-company.entity';
import { LinkedInProfile } from './linkedin-profile.entity';

export interface Profile extends LinkedInProfile {
  company: LinkedInCompany;
  pictureUrls: string[];
}
