import { linkedinSalesNavigatorUrl } from '../../config';
import { LinkedInRequest } from '../core/linkedin-request';
import { RELATIONSHIP_TYPES, SPOTLIGHTS, LANGUAGES } from '../types/typeahead';

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
  }): Promise<unknown> {
    const url = `${linkedinSalesNavigatorUrl}/salesApiFacetTypeahead`;

    const queryParams = {
      q: 'query',
      type: 'BING_GEO',
      start: skip,
      count: limit,
      ...(query ? { query } : {})
    };

    return this.request.get<unknown>(url, {
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
  }): Promise<unknown> {
    const url = `${linkedinSalesNavigatorUrl}/salesApiFacetTypeahead`;

    const queryParams = {
      q: 'query',
      type: 'TITLE',
      start: skip,
      count: limit,
      ...(query ? { query } : {})
    };

    return this.request.get<unknown>(url, {
      params: queryParams
    });
  }

  getIndustries(): Promise<unknown> {
    const url = `${linkedinSalesNavigatorUrl}/salesApiFacetTypeahead`;

    const queryParams = {
      q: 'query',
      type: 'INDUSTRY'
    };

    return this.request.get<unknown>(url, {
      params: queryParams
    });
  }

  getSeniorityLevels(): Promise<unknown> {
    const url = `${linkedinSalesNavigatorUrl}/salesApiFacetTypeahead`;

    const queryParams = {
      q: 'query',
      type: 'SENIORITY'
    };

    return this.request.get<unknown>(url, {
      params: queryParams
    });
  }

  getRoleFunctions(): Promise<unknown> {
    const url = `${linkedinSalesNavigatorUrl}/salesApiFacetTypeahead`;

    const queryParams = {
      q: 'query',
      type: 'FUNCTION'
    };

    return this.request.get<unknown>(url, {
      params: queryParams
    });
  }

  getCompanySizes(): Promise<unknown> {
    const url = `${linkedinSalesNavigatorUrl}/salesApiFacetTypeahead`;

    const queryParams = {
      q: 'query',
      type: 'COMPANY_SIZE'
    };

    return this.request.get<unknown>(url, {
      params: queryParams
    });
  }

  getCompanies({
    skip = 0,
    limit = 25,
    query
  }: {
    skip: number;
    limit: number;
    query: string;
  }): Promise<unknown> {
    const url = `${linkedinSalesNavigatorUrl}/salesApiFacetTypeahead`;

    const queryParams = {
      q: 'query',
      type: 'COMPANY',
      start: skip,
      count: limit,
      ...(query ? { query } : {})
    };

    return this.request.get<unknown>(url, {
      params: queryParams
    });
  }

  getRelationshipTypes(): unknown {
    const relationshipTypes = [
      {
        id: RELATIONSHIP_TYPES.FIRST_DEGREE,
        displayValue: '1st Degree Connections'
      },
      {
        id: RELATIONSHIP_TYPES.SECOND_DEGREE,
        displayValue: '2nd Degree Connections'
      },
      {
        id: RELATIONSHIP_TYPES.THIRD_DEGREE,
        displayValue: '3rd Degree+ Connections'
      },
      {
        id: RELATIONSHIP_TYPES.GROUP_MEMBERS,
        displayValue: 'Group Members'
      }
    ];

    return this.createTypeaheadResponse(relationshipTypes);
  }

  getSpotlights(): unknown {
    const spotlights = [
      {
        id: SPOTLIGHTS.RECENT_POSITION_CHANGE,
        displayValue: 'Changed jobs in the past 90 days'
      },
      {
        id: SPOTLIGHTS.TEAMLINK_INTRO,
        displayValue: 'Leads with TeamLink intro'
      },
      {
        id: SPOTLIGHTS.MENTIONED_IN_THE_NEWS,
        displayValue: 'Mentioned in the news in the past 30 days'
      },
      {
        id: SPOTLIGHTS.RECENTLY_POSTED_ON_LINKEDIN,
        displayValue: 'Posted on LinkedIn in the past 30 days'
      },
      {
        id: SPOTLIGHTS.COMMONALITIES,
        displayValue: 'Shared experiences with you'
      },
      {
        id: SPOTLIGHTS.COMPANY_FOLLOW,
        displayValue: 'Leads that follow your company on LinkedIn'
      }
    ];

    return this.createTypeaheadResponse(spotlights);
  }

  getProfileLanguages(): unknown {
    const profileLanguages = LANGUAGES.map(x => ({
      id: x.id,
      displayValue: x.name
    }));

    return this.createTypeaheadResponse(profileLanguages);
  }

  getYearsOfExperience(): unknown {
    const yearsOfExperience = [
      {
        id: '1',
        displayValue: 'Less than 1 year'
      },
      {
        id: '2',
        displayValue: '1-2 years'
      },
      {
        id: '3',
        displayValue: '3-5 years'
      },
      {
        id: '4',
        displayValue: '6-10 years'
      },
      {
        id: '5',
        displayValue: 'More than 10 years'
      }
    ];

    return this.createTypeaheadResponse(yearsOfExperience);
  }

  // We use this method to create the same model returned for typeahead entities,
  // so we can have parity between the retrieved and hardcoded entities
  private createTypeaheadResponse(elements: unknown): unknown {
    return {
      elements,

      // This is the default paging element for typeahead elements,
      // that don't use pagination, returned by LinkedIn
      paging: {
        count: 10,
        start: 0,
        links: []
      }
    };
  }
}
