import { LinkedInMiniCompany } from './linkedin-mini-company.entity';
import { LinkedInSearchHit } from './linkedin-search-hit.entity';

export interface CompanySearchHit extends LinkedInSearchHit {
  company: LinkedInMiniCompany;
}
