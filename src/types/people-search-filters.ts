import { LinkedInContractInterest } from './contract-interest.enum';
import { Language } from './language-code.enum';
import { LinkedInNetworkType } from './network.enum';
import { LinkedInTitle } from './title';

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

export interface PeopleSalesNavigatorSearchFilters {
  companySize?: string[];
  bingGeo?: string[];
  industry?: string[];
  relationship?: string[];
  seniorityLevel?: string[];
  title?: LinkedInTitle[];
  yearsOfExperience?: string[];
}
