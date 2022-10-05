import { linkedinSalesNavigatorUrl } from '../../config';
import { LinkedInRequest } from '../core/linkedin-request';
import { SalesNavigatorPeopleSearchFilters } from '../types/people-search-filters';
import { extractProfileId } from '../utils/common-li';
import { graphqlParamSerializer } from '../utils/graphqlParamSerializer';
import { GetSalesNavigatorProfilesSearchResponse } from '../responses/sn-profile.response.post';

export class SalesNavigatorProfileRequest {
  private request: LinkedInRequest;

  constructor({ request }: { request: LinkedInRequest }) {
    this.request = request;
  }

  getProfile({
    profileUrn
  }: {
    profileUrn: string;
  }): Promise<unknown> {
    const profileId = extractProfileId(profileUrn);

    const url = `${linkedinSalesNavigatorUrl}/salesApiProfiles/(profileId:${profileId},authType:NAME_SEARCH,authToken:x0Hp)`;

    const decorations = [
      'entityUrn',
      'objectUrn',
      'pictureInfo',
      'profilePictureDisplayImage',
      'firstName',
      'lastName',
      'fullName',
      'headline',
      'memberBadges',
      'degree',
      'profileUnlockInfo',
      'location',
      'listCount',
      'industry',
      'numOfConnections',
      'inmailRestriction',
      'savedLead',
      'defaultPosition',
      'contactInfo',
      'summary',
      'crmStatus',
      'pendingInvitation',
      'unlocked',
      'relatedColleagueCompanyId',
      'numOfSharedConnections',
      'showTotalConnectionsPage',
      'blockThirdPartyDataSharing',
      'connectedTime',
      'noteCount',
      'flagshipProfileUrl',
      'fullNamePronunciationAudio',
      'memorialized',
      'fullNamePronunciationAudio',
      'positions*',
      'educations*'
    ]

    const queryParams = {
      decoration: `(${decorations.join(',')})`
    };

    return this.request.get<unknown>(url, {
      params: queryParams
    });
  }

  searchProfiles({
    skip = 0,
    limit = 25,
    filters = {}
  }: {
    skip?: number;
    limit?: number;
    filters?: SalesNavigatorPeopleSearchFilters;
  }): Promise<GetSalesNavigatorProfilesSearchResponse> {
    const url = `${linkedinSalesNavigatorUrl}/salesApiLeadSearch`;

    const buildFilters = [];

    if (filters.currentCompanies?.length) {
      const currentCompanies = {
        type: 'CURRENT_COMPANY',
        values: filters.currentCompanies.map(cc => cc.id
          ? ({ id: cc.id, selectionType: 'INCLUDED' })
          : ({ text: cc.text, selectionType: 'INCLUDED' })
        )
      }

      buildFilters.push(currentCompanies);
    }

    if (filters.companySizes?.length) {
      const companySizes = {
        type: 'COMPANY_HEADCOUNT',
        values: filters.companySizes.map(cs => ({
          id: cs,
          selectionType: 'INCLUDED'
        }))
      }

      buildFilters.push(companySizes);
    }

    if (filters.titles?.length) {
      const titles = {
        type: 'TITLE',
        values: filters.titles.map(t => t.id
          ? ({ id: t.id, text: t.text, selectionType: 'INCLUDED', })
          : ({ text: t.text, selectionType: 'INCLUDED' })),
        selectedSubFilter: "CURRENT"
      }

      buildFilters.push(titles);
    }

    if (filters.seniorityLevels?.length) {
      const seniorityLevels = {
        type: 'SENIORITY_LEVEL',
        values: filters.seniorityLevels.map(sl => ({
          id: sl,
          selectionType: 'INCLUDED',
        }))
      }

      buildFilters.push(seniorityLevels);
    }

    if (filters.industries?.length) {
      const industry = {
        type: 'INDUSTRY',
        values: filters.industries.map(i => ({
          id: i,
          selectionType: 'INCLUDED',
        }))
      }

      buildFilters.push(industry);
    }

    if (filters.yearsOfExperiences?.length) {
      const yearsOfExperience = {
        type: 'YEARS_OF_EXPERIENCE',
        values: filters.yearsOfExperiences.map(ye => ({
          id: ye,
          selectionType: 'INCLUDED',
        }))
      }

      buildFilters.push(yearsOfExperience);
    }

    if (filters.bingGeos?.length) {
      const regions = {
        type: 'REGION',
        values: filters.bingGeos.map(bg => ({
          id: bg,
          selectionType: 'INCLUDED',
        }))
      }

      buildFilters.push(regions);
    }

    if (filters.relationships?.length) {
      const relationships = {
        type: 'RELATIONSHIP',
        values: filters.relationships.map(rs => ({
          id: rs,
          selectionType: 'INCLUDED',
        }))
      }

      buildFilters.push(relationships);
    }

    if (filters.functions?.length) {
      const functions = {
        type: 'FUNCTION',
        values: filters.functions.map(f => ({
          id: f,
          selectionType: 'INCLUDED',
        }))
      }

      buildFilters.push(functions);
    }

    const graphqlFilter = {
      recentSearchParam: {
        doLogHistory: false
      },
      filters: buildFilters,
      ...filters.searchKeywords && { keywords: filters.searchKeywords }
    };

    const queryParams = {
      q: 'searchQuery',
      start: skip,
      count: limit,
      query: graphqlFilter,
      decorationId: 'com.linkedin.sales.deco.desktop.searchv2.LeadSearchResult-9',
    };

    return this.request.get<GetSalesNavigatorProfilesSearchResponse>(url, {
      params: queryParams,
      paramsSerializer: graphqlParamSerializer
    });
  }
}
