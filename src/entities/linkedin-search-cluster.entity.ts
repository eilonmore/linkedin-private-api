import { SearchResultType } from '../types/search-result-type.enum';
import { LinkedInSearchHit } from './linkedin-search-hit.entity';

export interface LinkedInSearchCluster {
  $type: 'com.linkedin.voyager.search.BlendedSearchCluster';
  elements: LinkedInSearchHit[];
  type: SearchResultType;
}
