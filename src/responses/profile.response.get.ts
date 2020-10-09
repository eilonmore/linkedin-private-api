import { LinkedInCollectionResponse } from '../entities/linkedin-collection-response.entity';
import { LinkedInCompany } from '../entities/linkedin-company.entity';
import { LinkedInProfile, ProfileUrn } from '../entities/linkedin-profile.entity';

export type GetProfileResponse = LinkedInCollectionResponse<ProfileUrn, LinkedInProfile | LinkedInCompany>;
