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

    if (filters.currentCompany?.length) {
      const currentCompanies = {
        type: 'CURRENT_COMPANY',
        values: filters.currentCompany.map(cc => cc.id 
          ? ({ id: cc.id, selectionType: 'INCLUDED' })
          : ({ text: cc.text, selectionType: 'INCLUDED' })
          )
      }

      buildFilters.push(currentCompanies);
    }

    if (filters.companySize?.length) {
      const companySizes = {
        type: 'COMPANY_HEADCOUNT',
        values: filters.companySize.map(cs => ({ 
          id: cs,
          selectionType: 'INCLUDED'
         }))
      }
  
      buildFilters.push(companySizes);
    }

    if (filters.title?.length) {
      const titles = {
        type: 'TITLE',
        values: filters.title.map(t => ({
          id: t.id,
          selectionType: 'INCLUDED',
        })),
        selectedSubFilter: "CURRENT"
      }

      buildFilters.push(titles);
    }

    if (filters.seniorityLevel?.length) {
      const seniorityLevels = {
        type: 'SENIORITY_LEVEL',
        values: filters.seniorityLevel.map(sl => ({
          id: sl,
          selectionType: 'INCLUDED',
        }))
      }
      
      buildFilters.push(seniorityLevels);
    }

    if (filters.industry?.length) {
      const industry = {
        type: 'INDUSTRY',
        values: filters.industry.map(i => ({
          id: i,
          selectionType: 'INCLUDED',
        }))
      }

      buildFilters.push(industry);
    }

    if (filters.yearsOfExperience?.length) {
      const yearsOfExperience = {
        type: 'YEARS_OF_EXPERIENCE',
        values: filters.yearsOfExperience.map(ye => ({
          id: ye,
          selectionType: 'INCLUDED',
        }))
      }

      buildFilters.push(yearsOfExperience);
    }

    if (filters.bingGeo?.length) {
      const regions = {
        type: 'REGION',
        values: filters.bingGeo.map(bg => ({
          id: bg,
          selectionType: 'INCLUDED',
        }))
      }

      buildFilters.push(regions);
    }

    if (filters.relationship?.length) {
      const relationships = {
        type: 'RELATIONSHIP',
        values: filters.relationship.map(rs => ({
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
          id: f.id,
          text: f.text,
          selectionType: 'INCLUDED',
        }))
      }
  
      buildFilters.push(functions);
    }

    const graphqlFilter = {
      recentSearchParam: {
        doLogHistory: false
      },
      filters: buildFilters
    };

    const queryParams = {
      q: 'searchQuery',
      start: skip,
      count: limit,
      query: graphqlFilter,
      decorationId: 'com.linkedin.sales.deco.desktop.searchv2.LeadSearchResult-7',
    };

    return this.request.get<GetSalesNavigatorProfilesSearchResponse>(url, {
      params: queryParams,
      paramsSerializer: graphqlParamSerializer
    });
  }
}
