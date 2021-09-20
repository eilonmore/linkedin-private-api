import { JobSearchHit } from 'src/entities/job-search-hit.entity';
import { JobSearchFilters } from '../types/job-search-filters';
import { SkipLimitScroller } from './skip-limit-scroller';

type FetchJobs = ({
  skip,
  limit,
  filters,
  keywords,
}: {
  skip?: number;
  limit?: number;
  filters?: JobSearchFilters;
  keywords?: string;
}) => Promise<JobSearchHit[]>;

export class JobSearchScroller extends SkipLimitScroller<JobSearchHit> {
  private filters?: JobSearchFilters;

  private keywords?: string;

  private fetchJobs: FetchJobs;

  constructor({
    fetchJobs,
    skip = 0,
    limit = 10,
    filters,
    keywords,
  }: {
    fetchJobs: FetchJobs;
    skip?: number;
    limit?: number;
    filters?: JobSearchFilters;
    keywords?: string;
  }) {
    super({ skip, limit });

    this.fetchJobs = fetchJobs;
    this.filters = filters;
    this.keywords = keywords;
  }

  async fetch(): Promise<JobSearchHit[]> {
    return this.fetchJobs({ skip: this.skip, limit: this.limit, filters: this.filters, keywords: this.keywords });
  }
}
