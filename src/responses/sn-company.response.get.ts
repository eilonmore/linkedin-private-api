export interface GetSalesNavigatorCompaniesSearchResponse{
    elements: unknown;
    metadata: unknown;
    paging: unknown;
}

export interface GetSalesNavigatorCompanySearchResponse {
    description: string;
    industry: string;
    type: string;
    specialties?: (string)[] | null;
    flagshipCompanyUrl: string;
    entityUrn: string;
    employeeGrowthPercentages?: (EmployeeGrowthPercentagesEntity)[] | null;
    website: string;
    companyPictureDisplayImage: ProfilePictureDisplayImageOrCompanyPictureDisplayImage;
    pictureInfo: PictureInfo;
    yearFounded: number;
    headquarters: Headquarters;
    revenueRange: RevenueRange;
    name: string;
    location: string;
    employees?: (string)[] | null;
  }
  
  export interface EmployeeGrowthPercentagesEntity {
    timespan: string;
    percentage: number;
  }
  
  export interface $antiAbuseAnnotationsEntity {
    attributeId: number;
    entityId: number;
    sourceUrn: string;
  }

  export interface ProfilePictureDisplayImageOrCompanyPictureDisplayImage {
    rootUrl: string;
    artifacts?: (ArtifactsEntity)[] | null;
  }

  export interface ArtifactsEntity {
    width: number;
    fileIdentifyingUrlPathSegment: string;
    height: number;
  }
  
  export interface PictureInfo {
    logo: string;
  }

  export interface Headquarters {
    country: string;
    geographicArea: string;
    city: string;
    postalCode: string;
    line1: string;
  }

  export interface RevenueRange {
    estimatedMinRevenue: EstimatedMinRevenueOrEstimatedMaxRevenue;
    estimatedMaxRevenue: EstimatedMinRevenueOrEstimatedMaxRevenue;
  }

  export interface EstimatedMinRevenueOrEstimatedMaxRevenue {
    currencyCode: string;
    amount: number;
    unit: string;
  }
  