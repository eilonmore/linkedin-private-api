import { LinkedInRequest } from '../core/linkedin-request';

export class SalesNavigatorTypeaheadRequest {
  private request: LinkedInRequest;

  constructor({ request }: { request: LinkedInRequest }) {
    this.request = request;
  }

  getLocations({
    skip = 0,
    limit = 25,
    query
  }: {
    skip: number;
    limit: number;
    query: string;
  }): Promise<any> {
    const url = 'https://www.linkedin.com/sales-api/salesApiFacetTypeahead';

    const queryParams = {
      q: 'query',
      type: 'BING_GEO',
      start: skip,
      count: limit,
      ...(query ? { query } : {})
    };

    return this.request.get<any>(url, {
      params: queryParams
    });
  }

  getJobTitles({
    skip = 0,
    limit = 25,
    query
  }: {
    skip: number;
    limit: number;
    query: string;
  }): Promise<any> {
    const url = 'https://www.linkedin.com/sales-api/salesApiFacetTypeahead';

    const queryParams = {
      q: 'query',
      type: 'TITLE',
      start: skip,
      count: limit,
      ...(query ? { query } : {})
    };

    return this.request.get<any>(url, {
      params: queryParams
    });
  }
}
