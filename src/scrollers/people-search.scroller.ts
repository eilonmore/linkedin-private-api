import { PeopleSearchHit } from '../entities/people-search-hit.entity';
import { PeopleSearchFilters } from '../types/people-search-filters';
import { SkipLimitScroller } from './skip-limit-scroller';

type FetchPeople = ({
  skip,
  limit,
  filters,
  keywords,
}: {
  skip?: number;
  limit?: number;
  filters?: PeopleSearchFilters;
  keywords?: string;
}) => Promise<PeopleSearchHit[]>;

export class PeopleSearchScroller extends SkipLimitScroller<PeopleSearchHit> {
  private filters?: PeopleSearchFilters;

  private keywords?: string;

  private fetchPeople: FetchPeople;

  constructor({
    fetchPeople,
    skip = 0,
    limit = 10,
    filters,
    keywords,
  }: {
    fetchPeople: FetchPeople;
    skip?: number;
    limit?: number;
    filters?: PeopleSearchFilters;
    keywords?: string;
  }) {
    super({ skip, limit });

    this.fetchPeople = fetchPeople;
    this.filters = filters;
    this.keywords = keywords;
  }

  async fetch(): Promise<PeopleSearchHit[]> {
    return this.fetchPeople({ skip: this.skip, limit: this.limit, filters: this.filters, keywords: this.keywords });
  }
}
