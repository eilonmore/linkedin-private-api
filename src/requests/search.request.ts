import { LinkedInRequest } from '../core/linkedin-request';
import { GetBlendedSearchResponse } from '../responses/blended-search.reponse.get';
import { BlendedSearchFilters } from '../types/blended-search-filters';

export class SearchRequest {
  private request: LinkedInRequest;

  constructor({ request }: { request: LinkedInRequest }) {
    this.request = request;
  }

  searchBlended({
    skip = 0,
    limit = 10,
    filters = {},
    keywords,
  }: {
    skip?: number;
    limit?: number;
    filters?: BlendedSearchFilters;
    keywords?: string;
  }): Promise<GetBlendedSearchResponse> {
    const queryParams = {
      filters,
      count: limit,
      ...(keywords ? { keywords: encodeURIComponent(keywords) } : {}),
      origin: 'TYPEAHEAD_ESCAPE_HATCH',
      q: 'all',
      queryContext: {
        spellCorrectionEnabled: true,
        relatedSearchesEnabled: true,
      },
      start: skip,
    };

    return this.request.get<GetBlendedSearchResponse>('search/blended', {
      params: queryParams,
    });
  }
}
