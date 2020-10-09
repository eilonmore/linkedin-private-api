import faker from 'faker';
import { random, times } from 'lodash';
import { LinkedInCompany, LinkedInProfile, LinkedInVectorArtifact, LinkedInVectorImage } from 'src';

import { LinkedInMiniProfile } from '../../src/entities/linkedin-mini-profile.entity';
import { LinkedInPhotoFilterPicture } from '../../src/entities/linkedin-profile.entity';

export const createMiniProfileId = () => `urn:li:fs_miniProfile:${faker.random.uuid()}`;

const createVectorArtifact = (count: number): LinkedInVectorArtifact[] =>
  times(count, () => ({
    $type: 'com.linkedin.common.VectorArtifact',
    expiresAt: faker.random.number(),
    fileIdentifyingUrlPathSegment: faker.internet.url(),
    height: faker.random.number(),
    with: faker.random.number(),
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
    $anti_abuse_annotations: [{ attributeId: faker.random.number(), entityId: faker.random.number() }],
    $recipeTypes: [faker.random.word()],
    entityUrn: faker.random.uuid(),
    industry: { [faker.random.uuid()]: faker.random.word() },
    industryUrns: [faker.random.uuid()],
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
    $recipeTypes: [faker.random.uuid()],
    displayImageReference: {
      vectorImage: createVectorImage(1)[0],
    },
    displayImageUrn: faker.random.uuid(),
    photoFilterEditInfo: {},
  }));

const createProfile = (count: number): Partial<LinkedInProfile>[] =>
  times(count, () => ({
    $type: 'com.linkedin.voyager.dash.identity.profile.Profile',
    '*industry': faker.random.uuid(),
    '*profileCertifications': faker.random.uuid(),
    '*profileCourses': faker.random.uuid(),
    '*profileEducations': faker.random.uuid(),
    '*profileHonors': faker.random.uuid(),
    '*profileLanguages': faker.random.uuid(),
    '*profileOrganizations': faker.random.uuid(),
    '*profilePatents': faker.random.uuid(),
    '*profilePositionGroups': faker.random.uuid(),
    '*profileProjects': faker.random.uuid(),
    '*profilePublications': faker.random.uuid(),
    '*profileSkills': faker.random.uuid(),
    '*profileTestScores': faker.random.uuid(),
    '*profileTreasuryMediaProfile': faker.random.uuid(),
    '*profileVolunteerExperiences': faker.random.uuid(),
    $recipeTypes: times(3, faker.random.uuid),
    defaultToActivityTab: faker.random.boolean(),
    educationOnProfileTopCardShown: faker.random.boolean(),
    entityUrn: createMiniProfileId(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    geoLocationBackfilled: faker.random.boolean(),
    headline: faker.random.word(),
    industryUrn: faker.random.uuid(),
    locationName: faker.random.word(),
    objectUrn: faker.random.uuid(),
    profilePicture: createProfilePicture(1)[0],
    publicIdentifier: faker.random.uuid(),
    trackingId: faker.random.uuid(),
    versionTag: faker.random.uuid(),
  }));

export const createMiniProfile = (count: number): LinkedInMiniProfile[] =>
  times(count, () => ({
    $type: 'com.linkedin.voyager.identity.shared.MiniProfile',
    trackingId: faker.random.uuid(),
    firstName: faker.random.words(),
    lastName: faker.random.words(),
    publicIdentifier: faker.random.uuid(),
    objectUrn: faker.random.uuid(),
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
      plainId: faker.random.number(),
      premiumSubscriber: faker.random.boolean(),
      publicContactInfo: {
        $type: 'com.linkedin.voyager.identity.shared.PublicContactInfo',
      },
    },
    included: [resultProfile],
  };

  return { response, resultProfile };
};
