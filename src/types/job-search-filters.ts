import { LinkedInExperienceType } from './experience.enum';
import { LinkedInJobType } from './job-type.enum';

export interface JobSearchFilters {
  companies?: string | string[];
  experience?: LinkedInExperienceType | LinkedInExperienceType[];
  jobType?: LinkedInJobType | LinkedInJobType[];
  jobTitle?: string | string[];
  industries?: string | string[];
  location?: string;
  remote?: boolean;
  listed_at?: number;
  distance?: number;
}
