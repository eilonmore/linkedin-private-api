import { CompanySearchHit } from '../entities/company-search-hit.entity';
import { SkipLimitScroller } from './skip-limit-scroller';

type FetchCompanies = ({
  skip,
  limit,
  keywords,
}: {
  skip?: number;
  limit?: number;
  keywords?: string;
}) => Promise<CompanySearchHit[]>;

export class CompanySearchScroller extends SkipLimitScroller<CompanySearchHit> {
  private keywords?: string;

  private fetchCompanies: FetchCompanies;

  constructor({
    fetchCompanies,
    skip = 0,
    limit = 10,
    keywords,
  }: {
    fetchCompanies: FetchCompanies;
    skip?: number;
    limit?: number;
    keywords?: string;
  }) {
    super({ skip, limit });

    this.fetchCompanies = fetchCompanies;
    this.keywords = keywords;
  }

  async fetch(): Promise<CompanySearchHit[]> {
    return this.fetchCompanies({ skip: this.skip, limit: this.limit, keywords: this.keywords });
  }
}
