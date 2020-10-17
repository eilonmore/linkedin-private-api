import { LinkedInMiniCompany } from './linkedin-mini-company.entity';

export type CompanyId = string;

export interface MiniCompany extends LinkedInMiniCompany {
  companyId: CompanyId;
}
