import { LinkedInSearchHitV2 } from './linkedin-search-hit-v2.entity';
import { MiniCompany } from './mini-company.entity';

export interface CompanySearchHit extends LinkedInSearchHitV2 {
  company: MiniCompany;
}
