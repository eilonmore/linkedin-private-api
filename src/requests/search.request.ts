import { GetJobSearchResponse } from '../responses/jobs-search.reponse.get';
import { JobSearchFilters } from '../types/job-search-filters';
import { LinkedInRequest } from '../core/linkedin-request';
import { GetBlendedSearchResponse } from '../responses/blended-search.reponse.get';
import { BlendedSearchFilters } from '../types/blended-search-filters';
import { PeopleSalesNavigatorSearchFilters } from '../types/people-search-filters';
import { GetSalesNavigatorPeopleSearchResponse } from '../responses/sn-people-search.response';

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

  searchJobs({
    skip = 0,
    limit = 10,
    filters = {},
    keywords,
  }: {
    skip?: number;
    limit?: number;
    filters?: JobSearchFilters;
    keywords?: string;
  }): Promise<GetJobSearchResponse> {
    const queryParams = {
      filters,
      count: limit,
      ...(keywords ? { keywords: encodeURIComponent(keywords) } : {}),
      origin: 'JOB_SEARCH_RESULTS_PAGE',
      decorationId: 'com.linkedin.voyager.deco.jserp.WebJobSearchHitLite-14',
      q: 'jserpFilters',
      queryContext: {
        primaryHitType: 'JOBS',
        spellCorrectionEnabled: true,
      },
      start: skip,
    };

    return this.request.get<GetJobSearchResponse>('search/hits', {
      params: queryParams,
    });
  }

  searchSalesNavigator({
    skip = 0,
    limit = 25,
    filters = {}
  }: {
    skip?: number;
    limit?: number;
    filters?: PeopleSalesNavigatorSearchFilters;
  }): Promise<GetSalesNavigatorPeopleSearchResponse> {
    const createGraphqlQuery = () => {
      const graphqlFilters = [];

      graphqlFilters.push('doFetchHeroCard:false');
      graphqlFilters.push('recentSearchParam:(doLogHistory:false)');
      graphqlFilters.push('spellCorrectionEnabled:true');
      graphqlFilters.push('spotlightParam:(selectedType:ALL)');
      graphqlFilters.push('doFetchFilters:true');
      graphqlFilters.push('doFetchHits:true');
      graphqlFilters.push('doFetchSpotlights:true');

      if (filters.companySize) {
        const propertyName = 'companySize';
        const propertyValue = `List(${filters.companySize.join(',')})`;
        graphqlFilters.push(`${propertyName}:${propertyValue}`);
      }

      if (filters.bingGeo) {
        const propertyName = 'bingGeo';
        const propertyValue = `(includedValues:List(${filters.bingGeo.map(x => `(id:${x})`).join(',')}))`;
        graphqlFilters.push(`${propertyName}:${propertyValue}`);
      }

      if (filters.industry) {
        const propertyName = 'industryV2';
        const propertyValue = `(includedValues:List(${filters.industry.map(x => `(id:${x})`).join(',')}))`;
        graphqlFilters.push(`${propertyName}:${propertyValue}`);
      }

      if (filters.relationship) {
        const propertyName = 'relationship';
        const propertyValue = `List(${filters.relationship.join(',')})`;
        graphqlFilters.push(`${propertyName}:${propertyValue}`);
      }

      if (filters.seniorityLevel) {
        const propertyName = 'seniorityLevelV2';
        const propertyValue = `(includedValues:List(${filters.seniorityLevel.map(x => `(id:${x})`).join(',')}))`;
        graphqlFilters.push(`${propertyName}:${propertyValue}`);
      }

      if (filters.title) {
        const propertyName = 'titleV2';
        const propertyValue = `(scope:CURRENT,includedValues:List(${filters.title.map(x => `(text:${encodeURIComponent(x.text)},id:${x.id})`).join(',')}))`;
        graphqlFilters.push(`${propertyName}:${propertyValue}`);
      }

      if (filters.yearsOfExperience) {
        const propertyName = 'relationship';
        const propertyValue = `List(${filters.yearsOfExperience.join(',')})`;
        graphqlFilters.push(`${propertyName}:${propertyValue}`);
      }

      return `(${graphqlFilters.join(',')})`;
    }

    const url = 'https://www.linkedin.com/sales-api/salesApiPeopleSearch';

    const queryParams = {
      q: "peopleSearchQuery",
      start: skip,
      count: limit,
      query: createGraphqlQuery(),
      decorationId: 'com.linkedin.sales.deco.desktop.search.DecoratedPeopleSearchHitResult-10',
    };

    return this.request.get<GetSalesNavigatorPeopleSearchResponse>(url, {
      params: queryParams
    });
  }
}
