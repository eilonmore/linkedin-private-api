import faker from 'faker';
import { random, times } from 'lodash';
import { LinkedInCompany, LinkedInProfile, LinkedInVectorArtifact, LinkedInVectorImage } from 'src';

import { LinkedInMiniProfile } from '../../src/entities/linkedin-mini-profile.entity';
import { LinkedInPhotoFilterPicture } from '../../src/entities/linkedin-profile.entity';

export const createMiniProfileId = () => `urn:li:fs_miniProfile:${faker.datatype.uuid()}`;

const createVectorArtifact = (count: number): LinkedInVectorArtifact[] =>
  times(count, () => ({
    $type: 'com.linkedin.common.VectorArtifact',
    expiresAt: faker.datatype.number(),
    fileIdentifyingUrlPathSegment: faker.internet.url(),
    height: faker.datatype.number(),
    with: faker.datatype.number(),
  }));

const createVectorImage = (count: number): LinkedInVectorImage[] =>
  times(count, () => ({
    $type: 'com.linkedin.common.VectorImage',
    artifacts: createVectorArtifact(4),
    rootUrl: faker.internet.url(),
  }));

const createCompany = (count: number): LinkedInCompany[] =>
  times(count, () => ({
    $type: 'com.linkedin.voyager.dash.organization.Company',
    $anti_abuse_annotations: [{ attributeId: faker.datatype.number(), entityId: faker.datatype.number() }],
    $recipeTypes: [faker.random.word()],
    entityUrn: faker.datatype.uuid(),
    industry: { [faker.datatype.uuid()]: faker.random.word() },
    industryUrns: [faker.datatype.uuid()],
    logo: {
      vetorImage: createVectorImage(1)[0],
    },
    name: faker.name.firstName(),
    universalName: faker.name.firstName(),
    url: faker.internet.url(),
  }));

const createProfilePicture = (count: number): LinkedInPhotoFilterPicture[] =>
  times(count, () => ({
    $type: 'com.linkedin.voyager.dash.identity.profile.PhotoFilterPicture',
    $recipeTypes: [faker.datatype.uuid()],
    displayImageReference: {
      vectorImage: createVectorImage(1)[0],
    },
    displayImageUrn: faker.datatype.uuid(),
    photoFilterEditInfo: {},
  }));

const createProfile = (count: number): Partial<LinkedInProfile>[] =>
  times(count, () => ({
    $type: 'com.linkedin.voyager.dash.identity.profile.Profile',
    '*industry': faker.datatype.uuid(),
    '*profileCertifications': faker.datatype.uuid(),
    '*profileCourses': faker.datatype.uuid(),
    '*profileEducations': faker.datatype.uuid(),
    '*profileHonors': faker.datatype.uuid(),
    '*profileLanguages': faker.datatype.uuid(),
    '*profileOrganizations': faker.datatype.uuid(),
    '*profilePatents': faker.datatype.uuid(),
    '*profilePositionGroups': faker.datatype.uuid(),
    '*profileProjects': faker.datatype.uuid(),
    '*profilePublications': faker.datatype.uuid(),
    '*profileSkills': faker.datatype.uuid(),
    '*profileTestScores': faker.datatype.uuid(),
    '*profileTreasuryMediaProfile': faker.datatype.uuid(),
    '*profileVolunteerExperiences': faker.datatype.uuid(),
    $recipeTypes: times(3, faker.datatype.uuid),
    defaultToActivityTab: faker.datatype.boolean(),
    educationOnProfileTopCardShown: faker.datatype.boolean(),
    entityUrn: createMiniProfileId(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    geoLocationBackfilled: faker.datatype.boolean(),
    headline: faker.random.word(),
    industryUrn: faker.datatype.uuid(),
    locationName: faker.random.word(),
    objectUrn: faker.datatype.uuid(),
    profilePicture: createProfilePicture(1)[0],
    publicIdentifier: faker.datatype.uuid(),
    trackingId: faker.datatype.uuid(),
    versionTag: faker.datatype.uuid(),
  }));

export const createMiniProfile = (count: number): LinkedInMiniProfile[] =>
  times(count, () => ({
    $type: 'com.linkedin.voyager.identity.shared.MiniProfile',
    trackingId: faker.datatype.uuid(),
    firstName: faker.random.words(),
    lastName: faker.random.words(),
    publicIdentifier: faker.datatype.uuid(),
    objectUrn: faker.datatype.uuid(),
    entityUrn: createMiniProfileId(),
    occupation: faker.random.words(),
    picture: createVectorImage(1)[0],
    backgroundImage: createVectorImage(1)[0],
  }));

export const createGetProfileResponse = () => {
  const profiles = createProfile(10);
  const companies = createCompany(10);

  const resultProfile = profiles[random(0, 9)];
  const resultCompany = companies[random(0, 9)];

  resultProfile.headline = `${faker.random.word} at ${resultCompany.name}`;

  const response = {
    data: {
      data: {},
    },
    included: [...profiles, ...companies],
  };

  return { response, resultProfile, resultCompany };
};

export const createGetOwnProfileResponse = () => {
  const resultProfile = createMiniProfile(1)[0];

  const response = {
    data: {
      $type: 'com.linkedin.voyager.common.Me',
      '*miniProfile': resultProfile.entityUrn,
      plainId: faker.datatype.number(),
      premiumSubscriber: faker.datatype.boolean(),
      publicContactInfo: {
        $type: 'com.linkedin.voyager.identity.shared.PublicContactInfo',
      },
    },
    included: [resultProfile],
  };

  return { response, resultProfile };
};
