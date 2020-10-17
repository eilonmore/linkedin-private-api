import { LinkedInSearchHit } from './linkedin-search-hit.entity';
import { MiniCompany } from './mini-company.entity';

export interface CompanySearchHit extends LinkedInSearchHit {
  company: MiniCompany;
}
