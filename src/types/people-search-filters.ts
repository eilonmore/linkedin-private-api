import { LinkedInContractInterest } from './contract-interest.enum';
import { Language } from './language-code.enum';
import { LinkedInNetworkType } from './network.enum';

export interface PeopleSearchFilters {
  currentCompany?: string | string[];
  pastCompany?: string | string[];
  company?: string;
  geoUrn?: string | string[];
  industry?: string | string[];
  network?: LinkedInNetworkType | LinkedInNetworkType[];
  profileLanguage?: Language | Language[];
  school?: string | string[];
  connectionOf?: string;
  contactInterest?: LinkedInContractInterest | LinkedInContractInterest[];
  serviceCategory?: string | string[];
  firstName?: string;
  lastName?: string;
  title?: string;
}
