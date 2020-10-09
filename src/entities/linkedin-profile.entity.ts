import { Country } from '../types/country-code.enum';
import { LinkedInVectorImage } from './linkedin-vector-image.entity';

export const PROFILE_TYPE = 'com.linkedin.voyager.dash.identity.profile.Profile';

interface LinkedInProfileGeoLocation {
  $type: 'com.linkedin.voyager.dash.identity.profile.ProfileGeoLocation';
  '*geo': string;
  $recipeTypes: string[];
  geoUrn: string;
}

interface LinkedInProfileLocation {
  $type: 'com.linkedin.voyager.dash.identity.profile.ProfileLocation';
  countryCode: Country;
}

interface LinkedInPrimaryLocale {
  $type: 'com.linkedin.common.Locale';
  $anti_abuse_annotations: {
    attributeId: number;
    entityId: number;
  }[];
  country: Country;
  language: string;
}

export interface LinkedInPhotoFilterPicture {
  $type: 'com.linkedin.voyager.dash.identity.profile.PhotoFilterPicture';
  $recipeTypes: string[];
  displayImageReference: {
    vectorImage: LinkedInVectorImage;
  };
  displayImageUrn: string;
  photoFilterEditInfo: unknown;
}

export type ProfileUrn = string;

export interface LinkedInProfile {
  $type: typeof PROFILE_TYPE;
  '*industry': string;
  '*profileCertifications': string;
  '*profileCourses': string;
  '*profileEducations': string;
  '*profileHonors': string;
  '*profileLanguages': string;
  '*profileOrganizations': string;
  '*profilePatents': string;
  '*profilePositionGroups': string;
  '*profileProjects': string;
  '*profilePublications': string;
  '*profileSkills': string;
  '*profileTestScores': string;
  '*profileTreasuryMediaProfile': string;
  '*profileVolunteerExperiences': string;
  $recipeTypes: string[];
  defaultToActivityTab: boolean;
  educationOnProfileTopCardShown: boolean;
  entityUrn: ProfileUrn;
  firstName: string;
  lastName: string;
  geoLocation: LinkedInProfileGeoLocation;
  geoLocationBackfilled: boolean;
  headline: string;
  industryUrn: string;
  location: LinkedInProfileLocation;
  locationName: string;
  multiLocaleFirstName: Record<string, string>;
  multiLocaleHeadline: Record<string, string>;
  multiLocaleLastName: Record<string, string>;
  objectUrn: string;
  primaryLocale: LinkedInPrimaryLocale;
  profilePicture: LinkedInPhotoFilterPicture;
  publicIdentifier: string;
  supportedLocales: LinkedInPrimaryLocale[];
  trackingId: string;
  versionTag: string;
}
