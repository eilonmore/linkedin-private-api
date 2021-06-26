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
