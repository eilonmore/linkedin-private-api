import { linkedinSalesNavigatorUrl } from '../../config';
import { LinkedInRequest } from '../core/linkedin-request';
import { SalesNavigatorPeopleSearchFilters } from '../types/people-search-filters';
import { extractProfileId } from '../utils/common-li';

export class SalesNavigatorProfileRequest {
  private request: LinkedInRequest;

  constructor({ request }: { request: LinkedInRequest }) {
    this.request = request;
  }

  getProfile({
    profileUrn
  }: {
    profileUrn: string;
  }): Promise<any> {
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
      decoration: `%28${encodeURIComponent(decorations.join(','))}%29`
    };

    return this.request.get<any>(url, {
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
  }): Promise<any> {
    const url = `${linkedinSalesNavigatorUrl}/salesApiPeopleSearch`;

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
            .map(x => `(text:${encodeURIComponent(x.text)}${x.id ? `,id:${x.id}` : ''})`)
            .join(',')}))`]
          : []),

        ...(filters.yearsOfExperience?.length
          ? [`yearsOfExperience:List(${filters.yearsOfExperience.join(',')})`]
          : [])
      ];

      return `(${graphqlFilters.join(',')})`;
    })();

    const queryParams = {
      q: 'peopleSearchQuery',
      start: skip,
      count: limit,
      query: graphqlQuery,
      decorationId: 'com.linkedin.sales.deco.desktop.search.DecoratedPeopleSearchHitResult-10',
    };

    return this.request.get<any>(url, {
      params: queryParams
    });
  }
}
