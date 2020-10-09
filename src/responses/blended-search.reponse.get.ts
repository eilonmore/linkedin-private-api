import { LinkedInCollectionResponse } from '../entities/linkedin-collection-response.entity';
import { LinkedInMiniCompany } from '../entities/linkedin-mini-company.entity';
import { LinkedInMiniProfile } from '../entities/linkedin-mini-profile.entity';
import { LinkedInSearchCluster } from '../entities/linkedin-search-cluster.entity';
import { LinkedInTextViewModel } from '../entities/linkedin-text-view-model.entity';

interface GetBlendedSearchMetadata {
  $type: string;
  keywords: string;
  numVisibleResults: number;
  origin: string;
  searchId: string;
  totalResultCount: number;
  totalResultDisplayText: LinkedInTextViewModel;
}

export type GetBlendedSearchResponse = LinkedInCollectionResponse<
  LinkedInSearchCluster,
  LinkedInMiniProfile | LinkedInMiniCompany,
  GetBlendedSearchMetadata
>;
