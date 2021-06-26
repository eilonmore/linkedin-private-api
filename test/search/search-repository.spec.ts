import faker from 'faker';
import { omit } from 'lodash';
import { matchers, reset, when } from 'testdouble';
import { URL } from 'url';

import { linkedinApiUrl } from '../../config';
import { defaultMocks } from '../utils/defaultMocks';
import { createSearchCompaniesResponse, creatSearchPeopleResponse } from './search-factories';

const requestUrl = new URL('search/blended', linkedinApiUrl).toString();

const username = 'username';
const password = 'password';
let axios: any;
let Client: any;

beforeEach(async () => {
  ({ axios, Client } = await defaultMocks());
});

afterEach(() => {
  reset();
});

describe('searchPeople', () => {
  it('should fetch the next 10 people', async () => {
    const reqParams = {
      start: 0,
      count: 10,
      filters: { resultType: 'PEOPLE' },
    };
    const searchResults = creatSearchPeopleResponse(10);

    when(axios.get(requestUrl, { params: matchers.contains(reqParams) })).thenResolve({ data: searchResults });

    const client = await new Client().login.userPass({ username, password });
    const peopleScroller = client.search.searchPeople();
    const people = await peopleScroller.scrollNext();

    expect(people.length).toEqual(10);
    people.forEach((p: any) => {
      expect(p.$type).toEqual('com.linkedin.voyager.search.SearchHitV2');
      expect(typeof p.publicIdentifier).toBe('string');
      expect(typeof p.trackingId).toBe('string');
    });
  });

  it('should fetch people by keywords and filters', async () => {
    const filters = {
      currentCompany: 'some company',
      network: 'F',
      school: 'some school',
      resultType: 'PEOPLE',
    };
    const keywords = 'Eilon Mor';
    const reqParams = {
      filters,
      keywords: encodeURIComponent(keywords),
    };

    const searchResults = creatSearchPeopleResponse(10);

    when(axios.get(requestUrl, { params: matchers.contains(reqParams) })).thenResolve({ data: searchResults });

    const client = await new Client().login.userPass({ username, password });
    const peopleScroller = client.search.searchPeople({ filters, keywords });
    const people = await peopleScroller.scrollNext();

    expect(people.length).toEqual(10);
    people.forEach((p: any) => {
      expect(p.$type).toEqual('com.linkedin.voyager.search.SearchHitV2');
      expect(typeof p.publicIdentifier).toBe('string');
      expect(typeof p.trackingId).toBe('string');
    });
  });

  it('should populate user profile on the response', async () => {
    const profileId = faker.datatype.uuid();
    const profileUrn = `urn:li:fs_miniProfile:${profileId}`;

    const reqParams = {
      start: 0,
      count: 1,
      filters: { resultType: 'PEOPLE' },
    };

    const searchResults = creatSearchPeopleResponse(1);
    searchResults.data.elements[0].elements[0].targetUrn = profileUrn;
    searchResults.included[0].entityUrn = profileUrn;

    when(axios.get(requestUrl, { params: matchers.contains(reqParams) })).thenResolve({ data: searchResults });

    const client = await new Client().login.userPass({ username, password });
    const peopleScroller = client.search.searchPeople({ limit: 1 });
    const people = await peopleScroller.scrollNext();

    expect(people.length).toEqual(1);
    expect(omit(people[0].profile, ['pictureUrls'])).toEqual({ ...searchResults.included[0], profileId });
  });

  it('should be able to override fetched count by passing skip and limit', async () => {
    const reqParams = {
      start: 2,
      count: 1,
      filters: { resultType: 'PEOPLE' },
    };
    const searchResults = creatSearchPeopleResponse(1);

    when(axios.get(requestUrl, { params: matchers.contains(reqParams) })).thenResolve({ data: searchResults });

    const client = await new Client().login.userPass({ username, password });
    const peopleScroller = client.search.searchPeople({ skip: 2, limit: 1 });
    const people = await peopleScroller.scrollNext();

    expect(people.length).toEqual(1);
    people.forEach((p: any) => {
      expect(p.$type).toEqual('com.linkedin.voyager.search.SearchHitV2');
      expect(typeof p.publicIdentifier).toBe('string');
      expect(typeof p.trackingId).toBe('string');
    });
  });

  it('should be able to scroll people using the scroller', async () => {
    when(axios.get(requestUrl, { params: matchers.contains({ start: 0, count: 10 }) })).thenResolve({
      data: creatSearchPeopleResponse(10),
    });
    when(axios.get(requestUrl, { params: matchers.contains({ start: 10, count: 10 }) })).thenResolve({
      data: creatSearchPeopleResponse(10),
    });
    when(axios.get(requestUrl, { params: matchers.contains({ start: 20, count: 10 }) })).thenResolve({
      data: creatSearchPeopleResponse(10),
    });

    const client = await new Client().login.userPass({ username, password });
    const peopleScroller = client.search.searchPeople();
    const firstPeoplePage = await peopleScroller.scrollNext();
    const secondPeoplePage = await peopleScroller.scrollNext();
    const thirdPeoplePage = await peopleScroller.scrollNext();

    expect(firstPeoplePage.length).toEqual(10);
    expect(secondPeoplePage.length).toEqual(10);
    expect(thirdPeoplePage.length).toEqual(10);

    [...thirdPeoplePage, ...secondPeoplePage, ...thirdPeoplePage].forEach((p: any) => {
      expect(p.$type).toEqual('com.linkedin.voyager.search.SearchHitV2');
      expect(typeof p.publicIdentifier).toBe('string');
      expect(typeof p.trackingId).toBe('string');
    });
  });

  it('should be able to override scroll skip and limit', async () => {
    when(axios.get(requestUrl, { params: matchers.contains({ start: 100, count: 1 }) })).thenResolve({
      data: creatSearchPeopleResponse(1),
    });
    when(axios.get(requestUrl, { params: matchers.contains({ start: 101, count: 1 }) })).thenResolve({
      data: creatSearchPeopleResponse(1),
    });
    when(axios.get(requestUrl, { params: matchers.contains({ start: 102, count: 1 }) })).thenResolve({
      data: creatSearchPeopleResponse(1),
    });

    const client = await new Client().login.userPass({ username, password });
    const peopleScroller = client.search.searchPeople({ skip: 100, limit: 1 });
    const firstPeoplePage = await peopleScroller.scrollNext();
    const secondPeoplePage = await peopleScroller.scrollNext();
    const thirdPeoplePage = await peopleScroller.scrollNext();

    expect(firstPeoplePage.length).toEqual(1);
    expect(secondPeoplePage.length).toEqual(1);
    expect(thirdPeoplePage.length).toEqual(1);

    [...thirdPeoplePage, ...secondPeoplePage, ...thirdPeoplePage].forEach((p: any) => {
      expect(p.$type).toEqual('com.linkedin.voyager.search.SearchHitV2');
      expect(typeof p.publicIdentifier).toBe('string');
      expect(typeof p.trackingId).toBe('string');
    });
  });

  it('should be able to scroll to previous response bulks', async () => {
    when(axios.get(requestUrl, { params: matchers.contains({ start: 0, count: 10 }) })).thenResolve({
      data: creatSearchPeopleResponse(10),
    });
    when(axios.get(requestUrl, { params: matchers.contains({ start: 10, count: 10 }) })).thenResolve({
      data: creatSearchPeopleResponse(10),
    });
    when(axios.get(requestUrl, { params: matchers.contains({ start: 0, count: 10 }) })).thenResolve({
      data: creatSearchPeopleResponse(10),
    });

    const client = await new Client().login.userPass({ username, password });
    const peopleScroller = client.search.searchPeople();
    const firstPeoplePage = await peopleScroller.scrollNext();
    const secondPeoplePage = await peopleScroller.scrollNext();
    const thirdPeoplePage = await peopleScroller.scrollBack();

    expect(firstPeoplePage.length).toEqual(10);
    expect(secondPeoplePage.length).toEqual(10);
    expect(thirdPeoplePage.length).toEqual(10);

    [...thirdPeoplePage, ...secondPeoplePage, ...thirdPeoplePage].forEach((p: any) => {
      expect(p.$type).toEqual('com.linkedin.voyager.search.SearchHitV2');
      expect(typeof p.publicIdentifier).toBe('string');
      expect(typeof p.trackingId).toBe('string');
    });
  });
});

describe('searchOwnConnections', () => {
  it('should fetch own connections by override fetch people network filter', async () => {
    const filters = {
      currentCompany: 'some company',
      network: 'S',
      school: 'some school',
      resultType: 'PEOPLE',
    };
    const keywords = 'Eilon Mor';
    const reqParams = {
      filters: { ...filters, network: 'F' },
      keywords: encodeURIComponent(keywords),
    };

    const searchResults = creatSearchPeopleResponse(10);

    when(axios.get(requestUrl, { params: matchers.contains(reqParams) })).thenResolve({ data: searchResults });

    const client = await new Client().login.userPass({ username, password });
    const peopleScroller = client.search.searchOwnConnections({ filters, keywords });
    const people = await peopleScroller.scrollNext();

    expect(people.length).toEqual(10);
    people.forEach((p: any) => {
      expect(p.$type).toEqual('com.linkedin.voyager.search.SearchHitV2');
      expect(typeof p.publicIdentifier).toBe('string');
      expect(typeof p.trackingId).toBe('string');
    });
  });

  it('should populate user profile on the response', async () => {
    const profileId = faker.datatype.uuid();
    const profileUrn = `urn:li:fs_miniProfile:${profileId}`;
    const reqParams = {
      start: 0,
      count: 1,
      filters: { network: 'F', resultType: 'PEOPLE' },
    };

    const searchResults = creatSearchPeopleResponse(1);
    searchResults.data.elements[0].elements[0].targetUrn = profileUrn;
    searchResults.included[0].entityUrn = profileUrn;

    when(axios.get(requestUrl, { params: matchers.contains(reqParams) })).thenResolve({ data: searchResults });

    const client = await new Client().login.userPass({ username, password });
    const peopleScroller = client.search.searchOwnConnections({ limit: 1 });
    const people = await peopleScroller.scrollNext();

    expect(people.length).toEqual(1);
    expect(omit(people[0].profile, ['pictureUrls'])).toEqual({ ...searchResults.included[0], profileId });
  });
});

describe('searchConnectionsOf', () => {
  it('should fetch connections by profileId', async () => {
    const profileId = faker.datatype.uuid();
    const filters = {
      currentCompany: 'some company',
      network: 'S',
      school: 'some school',
      resultType: 'PEOPLE',
    };
    const keywords = 'Eilon Mor';
    const reqParams = {
      filters: { ...filters, network: 'F', connectionOf: profileId },
      keywords: encodeURIComponent(keywords),
    };
    const searchResults = creatSearchPeopleResponse(10);

    when(axios.get(requestUrl, { params: matchers.contains(reqParams) })).thenResolve({ data: searchResults });

    const client = await new Client().login.userPass({ username, password });
    const peopleScroller = client.search.searchConnectionsOf({ filters, keywords, profileId });
    const people = await peopleScroller.scrollNext();

    expect(people.length).toEqual(10);
    people.forEach((p: any) => {
      expect(p.$type).toEqual('com.linkedin.voyager.search.SearchHitV2');
      expect(typeof p.publicIdentifier).toBe('string');
      expect(typeof p.trackingId).toBe('string');
    });
  });

  it('should populate user profile on the response', async () => {
    const profileId = faker.datatype.uuid();
    const profileUrn = `urn:li:fs_miniProfile:${profileId}`;
    const reqParams = {
      start: 0,
      count: 1,
      filters: { network: 'F', connectionOf: profileId, resultType: 'PEOPLE' },
    };

    const searchResults = creatSearchPeopleResponse(1);
    searchResults.data.elements[0].elements[0].targetUrn = profileUrn;
    searchResults.included[0].entityUrn = profileUrn;

    when(axios.get(requestUrl, { params: matchers.contains(reqParams) })).thenResolve({ data: searchResults });

    const client = await new Client().login.userPass({ username, password });
    const peopleScroller = client.search.searchConnectionsOf({ limit: 1, profileId });
    const people = await peopleScroller.scrollNext();

    expect(people.length).toEqual(1);
    expect(omit(people[0].profile, ['pictureUrls'])).toEqual({ ...searchResults.included[0], profileId });
  });
});

describe('searchCompanies', () => {
  it('should fetch the next 10 companies', async () => {
    const reqParams = {
      start: 0,
      count: 10,
      filters: {
        resultType: 'COMPANIES',
      },
    };

    const searchResults = createSearchCompaniesResponse(10);

    when(axios.get(requestUrl, { params: matchers.contains(reqParams) })).thenResolve({ data: searchResults });

    const client = await new Client().login.userPass({ username, password });
    const companiesScroller = client.search.searchCompanies();
    const companies = await companiesScroller.scrollNext();

    expect(companies.length).toEqual(10);
    companies.forEach((p: any) => {
      expect(p.$type).toEqual('com.linkedin.voyager.search.SearchHitV2');
      expect(typeof p.publicIdentifier).toBe('string');
      expect(typeof p.trackingId).toBe('string');
    });
  });

  it('should fetch companies by keywords', async () => {
    const keywords = 'Some company';
    const reqParams = {
      keywords: encodeURIComponent(keywords),
      filters: {
        resultType: 'COMPANIES',
      },
    };

    const searchResults = createSearchCompaniesResponse(10);

    when(axios.get(requestUrl, { params: matchers.contains(reqParams) })).thenResolve({ data: searchResults });

    const client = await new Client().login.userPass({ username, password });
    const companiesScroller = client.search.searchCompanies({ keywords });
    const companies = await companiesScroller.scrollNext();

    expect(companies.length).toEqual(10);
    companies.forEach((p: any) => {
      expect(p.$type).toEqual('com.linkedin.voyager.search.SearchHitV2');
      expect(typeof p.publicIdentifier).toBe('string');
      expect(typeof p.trackingId).toBe('string');
    });
  });

  it('should be able to override fetched count by passing skip and limit', async () => {
    const reqParams = {
      start: 2,
      count: 1,
      filters: {
        resultType: 'COMPANIES',
      },
    };

    const searchResults = createSearchCompaniesResponse(1);

    when(axios.get(requestUrl, { params: matchers.contains(reqParams) })).thenResolve({ data: searchResults });

    const client = await new Client().login.userPass({ username, password });
    const companiesScroller = client.search.searchCompanies({ skip: 2, limit: 1 });
    const companies = await companiesScroller.scrollNext();

    expect(companies.length).toEqual(1);
    companies.forEach((p: any) => {
      expect(p.$type).toEqual('com.linkedin.voyager.search.SearchHitV2');
      expect(typeof p.publicIdentifier).toBe('string');
      expect(typeof p.trackingId).toBe('string');
    });
  });

  it('should populate company on the response', async () => {
    const companyId = faker.datatype.uuid();
    const companyUrn = `urn:li:fs_miniCompany:${companyId}`;
    const reqParams = {
      start: 0,
      count: 1,
      filters: {
        resultType: 'COMPANIES',
      },
    };

    const searchResults = createSearchCompaniesResponse(1);
    searchResults.data.elements[0].elements[0].targetUrn = companyUrn;
    searchResults.included[0].entityUrn = companyUrn;

    when(axios.get(requestUrl, { params: matchers.contains(reqParams) })).thenResolve({ data: searchResults });

    const client = await new Client().login.userPass({ username, password });
    const companiesScroller = client.search.searchCompanies({ limit: 1 });
    const companies = await companiesScroller.scrollNext();

    expect(companies.length).toEqual(1);
    expect(omit(companies[0].company, 'companyId')).toEqual(searchResults.included[0]);
    expect(companies[0].company.companyId).toEqual(searchResults.included[0].entityUrn.replace('urn:li:fs_miniCompany:', ''));
  });

  it('should be able to scroll companies using the scroller', async () => {
    const reqParams = {
      filters: {
        resultType: 'COMPANIES',
      },
    };

    when(axios.get(requestUrl, { params: matchers.contains({ ...reqParams, start: 0, count: 10 }) })).thenResolve({
      data: createSearchCompaniesResponse(10),
    });
    when(axios.get(requestUrl, { params: matchers.contains({ ...reqParams, start: 10, count: 10 }) })).thenResolve({
      data: createSearchCompaniesResponse(10),
    });
    when(axios.get(requestUrl, { params: matchers.contains({ ...reqParams, start: 20, count: 10 }) })).thenResolve({
      data: createSearchCompaniesResponse(10),
    });

    const client = await new Client().login.userPass({ username, password });
    const companiesScroller = client.search.searchCompanies();
    const firstCompaniesPage = await companiesScroller.scrollNext();
    const secondCompaniesPage = await companiesScroller.scrollNext();
    const thirdCompaniesPage = await companiesScroller.scrollNext();

    expect(firstCompaniesPage.length).toEqual(10);
    expect(secondCompaniesPage.length).toEqual(10);
    expect(thirdCompaniesPage.length).toEqual(10);

    [...firstCompaniesPage, ...secondCompaniesPage, ...thirdCompaniesPage].forEach((p: any) => {
      expect(p.$type).toEqual('com.linkedin.voyager.search.SearchHitV2');
      expect(typeof p.publicIdentifier).toBe('string');
      expect(typeof p.trackingId).toBe('string');
    });
  });

  it('should be able to override scroll skip and limit', async () => {
    const reqParams = {
      filters: {
        resultType: 'COMPANIES',
      },
    };

    when(axios.get(requestUrl, { params: matchers.contains({ ...reqParams, start: 100, count: 1 }) })).thenResolve({
      data: createSearchCompaniesResponse(1),
    });
    when(axios.get(requestUrl, { params: matchers.contains({ ...reqParams, start: 101, count: 1 }) })).thenResolve({
      data: createSearchCompaniesResponse(1),
    });
    when(axios.get(requestUrl, { params: matchers.contains({ ...reqParams, start: 102, count: 1 }) })).thenResolve({
      data: createSearchCompaniesResponse(1),
    });

    const client = await new Client().login.userPass({ username, password });
    const companiesScroller = client.search.searchCompanies({ skip: 100, limit: 1 });
    const firstCompaniesPage = await companiesScroller.scrollNext();
    const secondCompaniesPage = await companiesScroller.scrollNext();
    const thirdCompaniesPage = await companiesScroller.scrollNext();

    expect(firstCompaniesPage.length).toEqual(1);
    expect(secondCompaniesPage.length).toEqual(1);
    expect(thirdCompaniesPage.length).toEqual(1);

    [...firstCompaniesPage, ...secondCompaniesPage, ...thirdCompaniesPage].forEach((p: any) => {
      expect(p.$type).toEqual('com.linkedin.voyager.search.SearchHitV2');
      expect(typeof p.publicIdentifier).toBe('string');
      expect(typeof p.trackingId).toBe('string');
    });
  });

  it('should be able to scroll to previous response bulks', async () => {
    when(axios.get(requestUrl, { params: matchers.contains({ start: 0, count: 10 }) })).thenResolve({
      data: createSearchCompaniesResponse(10),
    });
    when(axios.get(requestUrl, { params: matchers.contains({ start: 10, count: 10 }) })).thenResolve({
      data: createSearchCompaniesResponse(10),
    });
    when(axios.get(requestUrl, { params: matchers.contains({ start: 0, count: 10 }) })).thenResolve({
      data: createSearchCompaniesResponse(10),
    });

    const client = await new Client().login.userPass({ username, password });
    const companiesScroller = client.search.searchCompanies();
    const firstCompaniesPage = await companiesScroller.scrollNext();
    const secondCompaniesPage = await companiesScroller.scrollNext();
    const thirdCompaniesPage = await companiesScroller.scrollBack();

    expect(firstCompaniesPage.length).toEqual(10);
    expect(secondCompaniesPage.length).toEqual(10);
    expect(thirdCompaniesPage.length).toEqual(10);

    [...firstCompaniesPage, ...secondCompaniesPage, ...thirdCompaniesPage].forEach((p: any) => {
      expect(p.$type).toEqual('com.linkedin.voyager.search.SearchHitV2');
      expect(typeof p.publicIdentifier).toBe('string');
      expect(typeof p.trackingId).toBe('string');
    });
  });
});
