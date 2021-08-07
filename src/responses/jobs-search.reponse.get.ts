import { LinkedInCollectionResponse } from '../entities/linkedin-collection-response.entity';
import { LinkedInJobPosting } from '../entities/linkedin-job-posting';
import { LinkedInBaseCompany } from '../entities/linkedin-base-company';
import { LinkedInSearchHit } from '../entities/linkedin-search-hit-entity';
import { LinkedInJobSearchHit } from '../entities/linkedin-job-search-hit-entity';

export type GetJobSearchResponse = LinkedInCollectionResponse<
  LinkedInSearchHit<LinkedInJobSearchHit>,
  LinkedInJobPosting | LinkedInBaseCompany,
  Record<string, unknown>
>;
