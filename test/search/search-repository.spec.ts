import faker from 'faker';
import { omit } from 'lodash';
import { matchers, reset, when } from 'testdouble';
import { URL } from 'url';

import { linkedinApiUrl } from '../../config';
import { defaultMocks } from '../utils/defaultMocks';
import { createSearchCompaniesResponse, createSearchJobsResponse, creatSearchPeopleResponse } from './search-factories';

const searchBlendedUrl = new URL('search/blended', linkedinApiUrl).toString();
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
  const requestUrl = searchBlendedUrl;

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
  const requestUrl = searchBlendedUrl;

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
  const requestUrl = searchBlendedUrl;

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
  const requestUrl = searchBlendedUrl;

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

describe('searchJobs', () => {
  const requestUrl = new URL('search/hits', linkedinApiUrl).toString();

  it('should fetch the next 10 jobs', async () => {
    const reqParams = {
      start: 0,
      count: 10,
      origin: 'JOB_SEARCH_RESULTS_PAGE',
      decorationId: 'com.linkedin.voyager.deco.jserp.WebJobSearchHitLite-14',
      q: 'jserpFilters',
      queryContext: {
        primaryHitType: 'JOBS',
        spellCorrectionEnabled: true,
      },
    };
    const searchResults = createSearchJobsResponse(10);

    when(axios.get(requestUrl, { params: matchers.contains(reqParams) })).thenResolve({ data: searchResults });

    const client = await new Client().login.userPass({ username, password });
    const jobScroller = client.search.searchJobs();
    const jobs = await jobScroller.scrollNext();

    expect(jobs.length).toEqual(10);
    jobs.forEach((p: any) => {
      expect(p.$type).toEqual('com.linkedin.voyager.search.SearchHit');
    });
  });

  it('should fetch jobs by keywords and filters', async () => {
    const filters = {
      location: 'Israel',
      experience: '1',
    };
    const keywords = 'React developer';
    const reqParams = {
      filters,
      keywords: encodeURIComponent(keywords),
    };

    const searchResults = createSearchJobsResponse(10);

    when(axios.get(requestUrl, { params: matchers.contains(reqParams) })).thenResolve({ data: searchResults });

    const client = await new Client().login.userPass({ username, password });
    const jobsScroller = client.search.searchJobs({ filters, keywords });
    const jobs = await jobsScroller.scrollNext();

    expect(jobs.length).toEqual(10);
    jobs.forEach((p: any) => {
      expect(p.$type).toEqual('com.linkedin.voyager.search.SearchHit');
      expect(typeof p.trackingId).toBe('string');
    });
  });

  it('should populate job posting', async () => {
    const reqParams = {
      start: 0,
      count: 1,
    };

    const searchResults = createSearchJobsResponse(1);

    when(axios.get(requestUrl, { params: matchers.contains(reqParams) })).thenResolve({ data: searchResults });

    const client = await new Client().login.userPass({ username, password });
    const jobsScroller = client.search.searchJobs({ limit: 1 });
    const jobs = await jobsScroller.scrollNext();

    expect(jobs.length).toEqual(1);
    expect(jobs[0].hitInfo.jobPosting.$type).toEqual('com.linkedin.voyager.jobs.JobPosting');
    expect(typeof jobs[0].hitInfo.jobPosting.title).toBe('string');
  });

  it('should populate job company', async () => {
    const reqParams = {
      start: 0,
      count: 1,
    };

    const searchResults = createSearchJobsResponse(1);

    when(axios.get(requestUrl, { params: matchers.contains(reqParams) })).thenResolve({ data: searchResults });

    const client = await new Client().login.userPass({ username, password });
    const jobsScroller = client.search.searchJobs({ limit: 1 });
    const jobs = await jobsScroller.scrollNext();

    expect(jobs.length).toEqual(1);
    expect(jobs[0].hitInfo.jobPosting.companyDetails.company.$type).toEqual('com.linkedin.voyager.organization.Company');
    expect(typeof jobs[0].hitInfo.jobPosting.companyDetails.company.name).toBe('string');
  });

  it('should be able to override fetched count by passing skip and limit', async () => {
    const reqParams = {
      start: 2,
      count: 1,
    };
    const searchResults = createSearchJobsResponse(1);

    when(axios.get(requestUrl, { params: matchers.contains(reqParams) })).thenResolve({ data: searchResults });

    const client = await new Client().login.userPass({ username, password });
    const jobsScroller = client.search.searchJobs({ skip: 2, limit: 1 });
    const jobs = await jobsScroller.scrollNext();

    expect(jobs.length).toEqual(1);
  });

  it('should be able to scroll jobs using the scroller', async () => {
    when(axios.get(requestUrl, { params: matchers.contains({ start: 0, count: 10 }) })).thenResolve({
      data: createSearchJobsResponse(10),
    });
    when(axios.get(requestUrl, { params: matchers.contains({ start: 10, count: 10 }) })).thenResolve({
      data: createSearchJobsResponse(10),
    });
    when(axios.get(requestUrl, { params: matchers.contains({ start: 20, count: 10 }) })).thenResolve({
      data: createSearchJobsResponse(10),
    });

    const client = await new Client().login.userPass({ username, password });
    const jobsScroller = client.search.searchJobs();
    const firstJobsPage = await jobsScroller.scrollNext();
    const secondJobsPage = await jobsScroller.scrollNext();
    const thirdJobsPage = await jobsScroller.scrollNext();

    expect(firstJobsPage.length).toEqual(10);
    expect(secondJobsPage.length).toEqual(10);
    expect(thirdJobsPage.length).toEqual(10);

    expect(firstJobsPage[0].trackingId).not.toEqual(secondJobsPage[0].trackingId);
    expect(secondJobsPage[0].trackingId).not.toEqual(thirdJobsPage[0].trackingId);

    [...firstJobsPage, ...secondJobsPage, ...thirdJobsPage].forEach((p: any) => {
      expect(p.$type).toEqual('com.linkedin.voyager.search.SearchHit');
      expect(typeof p.trackingId).toBe('string');
    });
  });

  it('should be able to override scroll skip and limit in scrolling', async () => {
    when(axios.get(requestUrl, { params: matchers.contains({ start: 100, count: 1 }) })).thenResolve({
      data: createSearchJobsResponse(1),
    });
    when(axios.get(requestUrl, { params: matchers.contains({ start: 101, count: 1 }) })).thenResolve({
      data: createSearchJobsResponse(1),
    });
    when(axios.get(requestUrl, { params: matchers.contains({ start: 102, count: 1 }) })).thenResolve({
      data: createSearchJobsResponse(1),
    });

    const client = await new Client().login.userPass({ username, password });
    const searchScroller = client.search.searchJobs({ skip: 100, limit: 1 });
    const firstJobsPage = await searchScroller.scrollNext();
    const secondJobsPage = await searchScroller.scrollNext();
    const thirdJobsPage = await searchScroller.scrollNext();

    expect(firstJobsPage.length).toEqual(1);
    expect(secondJobsPage.length).toEqual(1);
    expect(thirdJobsPage.length).toEqual(1);

    expect(firstJobsPage[0].trackingId).not.toEqual(secondJobsPage[0].trackingId);
    expect(secondJobsPage[0].trackingId).not.toEqual(thirdJobsPage[0].trackingId);

    [...firstJobsPage, ...secondJobsPage, ...thirdJobsPage].forEach((p: any) => {
      expect(p.$type).toEqual('com.linkedin.voyager.search.SearchHit');
      expect(typeof p.trackingId).toBe('string');
    });
  });

  it('should be able to scroll to previous pages', async () => {
    when(axios.get(requestUrl, { params: matchers.contains({ start: 0, count: 10 }) })).thenResolve({
      data: createSearchJobsResponse(10),
    });
    when(axios.get(requestUrl, { params: matchers.contains({ start: 10, count: 10 }) })).thenResolve({
      data: createSearchJobsResponse(10),
    });
    when(axios.get(requestUrl, { params: matchers.contains({ start: 0, count: 10 }) })).thenResolve({
      data: createSearchJobsResponse(10),
    });

    const client = await new Client().login.userPass({ username, password });
    const jobsScroller = client.search.searchJobs();
    const firstJobsPage = await jobsScroller.scrollNext();
    const secondJobsPage = await jobsScroller.scrollNext();
    const thirdJobsPage = await jobsScroller.scrollBack();

    expect(firstJobsPage.length).toEqual(10);
    expect(secondJobsPage.length).toEqual(10);
    expect(thirdJobsPage.length).toEqual(10);

    [...firstJobsPage, ...firstJobsPage, ...firstJobsPage].forEach((p: any) => {
      expect(p.$type).toEqual('com.linkedin.voyager.search.SearchHit');
      expect(typeof p.trackingId).toBe('string');
    });
  });
});
