import { PeopleSearchFilters } from './people-search-filters';
import { LinkedInSearchType } from './search-type.enum';

export type BlendedSearchFilters = PeopleSearchFilters | { resultType?: LinkedInSearchType };
