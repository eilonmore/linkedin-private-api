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

    var buildFilters = [];

    if(filters.companySize?.length){
      var companySize = {
        type: 'COMPANY_HEADCOUNT',
        values:[{
          id:filters.companySize[0],
          selectionType:'INCLUDED'
        }]
      }
      buildFilters.push(companySize);
    }

    if(filters.title?.length){
      var title = {
        type: 'CURRENT_TITLE',
        values:[{
          id:filters.title[0].id,
          text:filters.title[0].text,
          selectionType:'INCLUDED',
          containsChildren:false,
          selectedChildren:[]
        }]
      }
      buildFilters.push(title);
    }

    if(filters.seniorityLevel?.length){
      var seniorityLevel = {
        type: 'SENIORITY_LEVEL',
        values:[{
          id:filters.seniorityLevel[0],
          selectionType:'INCLUDED',
        }]
      }
      buildFilters.push(seniorityLevel);
    }

    if(filters.industry?.length){
      var industry = {
        type: 'INDUSTRY',
        values:[{
          id:filters.industry[0],
          selectionType:'INCLUDED',
        }]
      }
      buildFilters.push(industry);
    }

    if(filters.yearsOfExperience?.length){
      var yearsOfExperience = {
        type: 'YEARS_OF_EXPERIENCE',
        values:[{
          id:filters.yearsOfExperience[0],
          selectionType:'INCLUDED',
        }]
      }
      buildFilters.push(yearsOfExperience);
    }

    if(filters.bingGeo?.length){
      var region = {
        type: 'REGION',
        values:[{
          id:filters.bingGeo[0],
          selectionType:'INCLUDED',
        }]
      }
      buildFilters.push(region);
    }

    if(filters.relationship?.length){
      var relationship = {
        type: 'RELATIONSHIP',
        values:[{
          id:filters.relationship[0],
          selectionType:'INCLUDED',
        }]
      }
      buildFilters.push(relationship);
    }

    const graphqlFilter = {
      // doFetchHeroCard: false,
      recentSearchParam: {
        doLogHistory: false
      },
      
      // spellCorrectionEnabled: true,
      spotlightParam: {
        selectedType: 'ALL'
      },
      doFetchFilters: true,
      doFetchHits: true,
      doFetchSpotlights: true,

      ...(filters.companySize?.length ? {
        companySize: filters.companySize
      } : {}),

      ...(filters.bingGeo?.length ? {
        bingGeo: {
          includedValues: filters.bingGeo?.map(x => ({ id: x }))
        }
      } : {}),

      ...(filters.industry?.length ? {
        industryV2: {
          includedValues: filters.industry?.map(x => ({ id: x }))
        }
      } : {}),

      ...(filters.relationship?.length ? {
        relationship: filters.relationship
      } : {}),

      ...(filters.seniorityLevel?.length ? {
        seniorityLevelV2: {
          includedValues: filters.seniorityLevel?.map(x => ({ id: x }))
        }
      } : {}),

      ...(filters.title?.length ? {
        titleV2: {
          scope: 'CURRENT',
          includedValues: filters.title?.map(x => ({
            id: x.id,
            text: encodeURIComponent(x.text)
          }))
        }
      } : {}),

      ...(filters.yearsOfExperience?.length ? {
        yearsOfExperience: filters.yearsOfExperience
      } : {})
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
