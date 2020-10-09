import faker from 'faker';
import { times } from 'lodash';

import { createMiniProfile } from '../profile/profile-factories';

const createSearchHit = (count: number) =>
  times(count, () => ({
    $type: 'com.linkedin.voyager.search.SearchHitV2',
    publicIdentifier: faker.random.uuid(),
    targetUrn: faker.random.uuid(),
    trackingId: faker.random.uuid(),
    trackingUrn: faker.random.uuid(),
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
    active: faker.random.boolean(),
    entityUrn: faker.random.uuid(),
    name: faker.random.uuid(),
    objectUrn: faker.random.uuid(),
    showcase: faker.random.boolean(),
    trackingId: faker.random.uuid(),
    universalName: faker.random.word(),
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
