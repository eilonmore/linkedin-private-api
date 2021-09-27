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
    const graphqlQuery = (() => {
      const graphqlFilters = [
        'doFetchHeroCard:false',
        'recentSearchParam:(doLogHistory:false)',
        'spellCorrectionEnabled:true',
        'spotlightParam:(selectedType:ALL)',
        'doFetchFilters:true',
        'doFetchHits:true',
        'doFetchSpotlights:true',

        ...(filters.companySize?.length
          ? [`companySize:List(${filters.companySize.join(',')})`]
          : []),

        ...(filters.bingGeo?.length
          ? [`bingGeo:(includedValues:List(${filters.bingGeo
            .map(x => `(id:${x})`)
            .join(',')}))`]
          : []),

        ...(filters.industry?.length
          ? [`industryV2:(includedValues:List(${filters.industry
            .map(x => `(id:${x})`)
            .join(',')}))`]
          : []),

        ...(filters.relationship?.length
          ? [`relationship:List(${filters.relationship.join(',')})`]
          : []),

        ...(filters.seniorityLevel?.length
          ? [`seniorityLevelV2:(includedValues:List(${filters.seniorityLevel
            .map(x => `(id:${x})`)
            .join(',')}))`]
          : []),

        ...(filters.title?.length
          ? [`titleV2:(scope:CURRENT,includedValues:List(${filters.title
            .map(x => `(text:${encodeURIComponent(x.text)},id:${x.id})`)
            .join(',')}))`]
          : []),

        ...(filters.yearsOfExperience?.length
          ? [`yearsOfExperience:List(${filters.yearsOfExperience.join(',')})`]
          : [])
      ];

      return `(${graphqlFilters.join(',')})`;
    })();

    const url = 'https://www.linkedin.com/sales-api/salesApiPeopleSearch';

    const queryParams = {
      q: 'peopleSearchQuery',
      start: skip,
      count: limit,
      query: graphqlQuery,
      decorationId: 'com.linkedin.sales.deco.desktop.search.DecoratedPeopleSearchHitResult-10',
    };

    return this.request.get<GetSalesNavigatorPeopleSearchResponse>(url, {
      params: queryParams
    });
  }
}
