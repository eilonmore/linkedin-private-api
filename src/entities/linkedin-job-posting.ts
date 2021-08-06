export const JOB_POSTING_TYPE = 'com.linkedin.voyager.jobs.JobPosting';

export interface LinkedInJobPostingCompany {
  '*companyResolutionResult': string;
  $recipeTypes: string[];
  $type: 'com.linkedin.voyager.jobs.JobPostingCompany';
  company: string;
}

export interface LinkedInJobPosting {
  $type: typeof JOB_POSTING_TYPE;
  $recipeTypes: string[];
  entityUrn: string;
  dashEntityUrn: string;
  formattedLocation: string;
  listedAt: number;
  title: string;
  workRemoteAllowed: boolean;
  companyDetails: LinkedInJobPostingCompany;
}
