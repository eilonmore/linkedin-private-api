import { LinkedInBaseCompany } from './linkedin-base-company';
import { LinkedInJobPostingCompany, LinkedInJobPosting } from './linkedin-job-posting';
import { LinkedInJobSearchHit } from './linkedin-job-search-hit-entity';
import { LinkedInSearchHit } from './linkedin-search-hit-entity';

export interface PopulatedJobPostingCompany extends Omit<LinkedInJobPostingCompany, 'company'> {
  company: LinkedInBaseCompany;
}

export interface PopulatedJobPosting extends Omit<LinkedInJobPosting, 'companyDetails'> {
  companyDetails: PopulatedJobPostingCompany;
}

export interface PopulatedJobHitInfo extends Omit<LinkedInJobSearchHit, 'jobPosting'> {
  jobPosting: PopulatedJobPosting;
}

export type JobSearchHit = LinkedInSearchHit<PopulatedJobHitInfo>;
