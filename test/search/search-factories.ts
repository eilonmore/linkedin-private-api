import faker from 'faker';
import { times } from 'lodash';

import { createMiniProfile } from '../profile/profile-factories';

const createSearchHit = (count: number) =>
  times(count, () => ({
    $type: 'com.linkedin.voyager.search.SearchHitV2',
    publicIdentifier: faker.datatype.uuid(),
    targetUrn: faker.datatype.uuid(),
    trackingId: faker.datatype.uuid(),
    trackingUrn: faker.datatype.uuid(),
  }));

const createSearchCluster = (count: number, searchHitCount: number) =>
  times(count, () => ({
    $type: 'com.linkedin.voyager.search.BlendedSearchCluster',
    elements: createSearchHit(searchHitCount),
    type: 'SEARCH_HITS',
  }));

const createMiniCompany = (count: number) =>
  times(count, () => ({
    $type: 'com.linkedin.voyager.entities.shared.MiniCompany',
    active: faker.datatype.boolean(),
    entityUrn: `urn:li:fs_miniCompany:${faker.datatype.uuid()}`,
    name: faker.datatype.uuid(),
    objectUrn: faker.datatype.uuid(),
    showcase: faker.datatype.boolean(),
    trackingId: faker.datatype.uuid(),
    universalName: faker.random.word(),
  }));

const createBaseCompany = (count: number) =>
  times(count, () => ({
    $type: 'com.linkedin.voyager.organization.Company',
    entityUrn: faker.datatype.uuid(),
    logo: {
      $type: 'com.linkedin.voyager.organization.CompanyLogoImage',
      image: {},
      type: 'SQUARE_LOGO',
    },
    name: faker.datatype.uuid(),
  }));

const createJobPosting = (count: number) =>
  times(count, () => ({
    $type: 'com.linkedin.voyager.jobs.JobPosting',
    entityUrn: faker.datatype.uuid(),
    dashEntityUrn: faker.datatype.uuid(),
    formattedLocation: faker.datatype.string(),
    listedAt: faker.datatype.number(),
    title: faker.datatype.string(),
    workRemoteAllowed: faker.datatype.boolean(),
    companyDetails: {
      '*companyResolutionResult': faker.datatype.string(),
      $type: 'com.linkedin.voyager.jobs.JobPostingCompany',
      company: faker.datatype.string(),
    },
  }));

const createJobSearchHit = (count: number) =>
  times(count, () => ({
    $type: 'com.linkedin.voyager.search.SearchHit',
    hitInfo: {
      '*jobPostingResolutionResult': faker.datatype.string(),
      $type: 'com.linkedin.voyager.search.SearchJobJserp',
      jobPosting: faker.datatype.string(),
      sponsored: faker.datatype.boolean(),
    },
    targetPageInstance: faker.datatype.string(),
    trackingId: faker.datatype.string(),
  }));

export const creatSearchPeopleResponse = (count: number) => ({
  data: {
    elements: createSearchCluster(count, 1),
  },
  included: createMiniProfile(count),
});

export const createSearchCompaniesResponse = (count: number) => ({
  data: {
    elements: createSearchCluster(count, 1),
  },
  included: createMiniCompany(count),
});

export const createSearchJobsResponse = (count: number) => {
  const companies = createBaseCompany(count);
  const jobPostings = createJobPosting(count).map((jp, index) => ({
    ...jp,
    companyDetails: {
      ...jp.companyDetails,
      company: companies[index].entityUrn,
    },
  }));
  const searchHits = createJobSearchHit(count).map((sh, index) => ({
    ...sh,
    hitInfo: {
      ...sh.hitInfo,
      jobPosting: jobPostings[index].entityUrn,
    },
  }));

  return {
    data: {
      elements: searchHits,
    },
    included: [...jobPostings, ...companies],
  };
};
