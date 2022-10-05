import { linkedinSalesNavigatorUrl } from '../../config';
import { LinkedInRequest } from '../core/linkedin-request';
import { graphqlParamSerializer } from '../utils/graphqlParamSerializer';
import { SalesNavigatorCompanySearchFilters } from 'src/types/company-search-filters';
import { GetSalesNavigatorCompaniesSearchResponse, GetSalesNavigatorCompanySearchResponse } from 'src/responses/sn-company.response.get';

export class SalesNavigatorCompanyRequest {
  private request: LinkedInRequest;

  constructor({ request }: { request: LinkedInRequest }) {
    this.request = request;
  }

  getCompany({
    companyId
  }: {
    companyId: string;
  }): Promise<GetSalesNavigatorCompanySearchResponse> {
    const url = `${linkedinSalesNavigatorUrl}/salesApiCompanies/${companyId}?decoration=%28entityUrn%2Cname%2Caccount%28saved%2CnoteCount%2ClistCount%2CcrmStatus%2Cstarred%29%2CpictureInfo%2CcompanyPictureDisplayImage%2Cdescription%2Cindustry%2Clocation%2Cheadquarters%2Cwebsite%2CrevenueRange%2CcrmOpportunities%2CflagshipCompanyUrl%2CemployeeGrowthPercentages%2Cemployees*~fs_salesProfile%28entityUrn%2CfirstName%2ClastName%2CfullName%2CpictureInfo%2CprofilePictureDisplayImage%29%2Cspecialties%2Ctype%2CyearFounded%29`;

    return this.request.get<GetSalesNavigatorCompanySearchResponse>(url);
  }

  searchCompanies({
    skip = 0,
    limit = 25,
    filters = {}
  }: {
    skip?: number;
    limit?: number;
    filters?: SalesNavigatorCompanySearchFilters;
  }): Promise<GetSalesNavigatorCompaniesSearchResponse> {
    const url = `${linkedinSalesNavigatorUrl}/salesApiAccountSearch`;

    const buildFilters = [];

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

    if (filters.followers?.length) {
      const followers = {
        type: 'NUM_OF_FOLLOWERS',
        values: filters.followers.map(f => ({
          id: f,
          selectionType: 'INCLUDED',
        }))
      }

      buildFilters.push(followers);
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

    if (filters.jobOpportunities?.length) {
      const jobOpportunities = {
        type: 'JOB_OPPORTUNITIES',
        values: filters.jobOpportunities.map(jo => ({
          id: jo,
          selectionType: 'INCLUDED',
        }))
      }

      buildFilters.push(jobOpportunities);
    }

    const graphqlFilter = {
      recentSearchParam: {
        doLogHistory: false
      },
      filters: buildFilters,
      ...filters.searchKeywords?.length && { keywords: encodeURIComponent(filters.searchKeywords) }
    };

    const queryParams = {
      q: 'searchQuery',
      start: skip,
      count: limit,
      query: graphqlFilter,
      decorationId: 'com.linkedin.sales.deco.desktop.searchv2.AccountSearchResult-2',
    };

    return this.request.get<GetSalesNavigatorCompaniesSearchResponse>(url, {
      params: queryParams,
      paramsSerializer: graphqlParamSerializer
    });
  }
}
