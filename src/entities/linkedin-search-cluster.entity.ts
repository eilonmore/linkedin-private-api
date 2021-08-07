import { SearchResultType } from '../types/search-result-type.enum';
import { LinkedInSearchHitV2 } from './linkedin-search-hit-v2.entity';

export interface LinkedInSearchCluster {
  $type: 'com.linkedin.voyager.search.BlendedSearchCluster';
  elements: LinkedInSearchHitV2[];
  type: SearchResultType;
}
