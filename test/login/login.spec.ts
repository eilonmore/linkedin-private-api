import { matchers, replace, reset, verify, when } from 'testdouble';

import { requestHeaders } from '../../config';
import { mockAxios } from '../utils/mockAxios';
import { mockLogin } from '../utils/mockLogin';

let mockedFs: any;
let axios: any;
let Client: any;

const sessionId = 'ajax:4458204165719552435';
const username = 'username';
const password = 'password';

const argSessionPath = matchers.argThat((path: string) => path.includes('sessions.json'));

describe('userPass', () => {
  beforeEach(async () => {
    mockedFs = replace('fs/promises');
    ({ axios } = mockAxios());

    Client = (await import('../../src/core/client')).Client;
  });

  afterEach(() => {
    reset();
  });

  test('should authenticate using username and password', async () => {
    const client = new Client();

    mockLogin(axios);

    await client.login.userPass({ username, password });

    expect(client.request.request.defaults.headers).toEqual({
      ...requestHeaders,
      cookie: `JSESSIONID="${sessionId}"; authenticated="true"; `,
      'csrf-token': sessionId,
    });
  });

  test('should write session to a sessions cache file', async () => {
    const client = new Client();

    mockLogin(axios);

    await client.login.userPass({ username, password });

    const cachedCookies = {
      JSESSIONID: sessionId,
      authenticated: 'true',
    };
    verify(mockedFs.writeFile(argSessionPath, JSON.stringify({ username: cachedCookies })));
  });

  test('should authenticate via cached session by default', async () => {
    const client = new Client();

    when(mockedFs.readFile(argSessionPath)).thenResolve(
      JSON.stringify({
        username: {
          JSESSIONID: sessionId,
          authenticated: 'true',
        },
        otherUsername: {
          JSESSIONID: 'ajax:48204165719552435',
          authenticated: 'false',
        },
      }),
    );

    await client.login.userPass({ username });

    expect(client.request.request.defaults.headers).toEqual({
      ...requestHeaders,
      cookie: `JSESSIONID="${sessionId}"; authenticated="true"; `,
      'csrf-token': sessionId,
    });
    verify(axios.get(), { ignoreExtraArgs: true, times: 0 });
    verify(axios.post(), { ignoreExtraArgs: true, times: 0 });
  });

  test('should ignore cache if passed useCache = false', async () => {
    const client = new Client();

    mockLogin(axios);
    when(mockedFs.readFile(argSessionPath)).thenResolve(
      JSON.stringify({
        username: {
          JSESSIONID: 'ajax:18202326571955235', // other session id
          authenticated: 'true',
        },
        otherUsername: {
          JSESSIONID: 'ajax:48204165719552435',
          authenticated: 'false',
        },
      }),
    );

    await client.login.userPass({ username, password, useCache: false });

    expect(client.request.request.defaults.headers).toEqual({
      ...requestHeaders,
      cookie: `JSESSIONID="${sessionId}"; authenticated="true"; `,
      'csrf-token': sessionId,
    });
  });

  test('should create cache file with empty data if not exists', async () => {
    const client = new Client();

    mockLogin(axios);
    when(mockedFs.readFile(argSessionPath)).thenReject(new Error('file does not exists'));

    await client.login.userPass({ username, password });

    verify(mockedFs.writeFile(argSessionPath, '{}'));
  });

  test('should throw error if no cached session and password was not supplied', async () => {
    const client = new Client();

    mockLogin(axios);

    try {
      await client.login.userPass({ username });
      throw new Error('Expected to throw');
    } catch (err) {
      expect(err.message).toEqual('password is required for login');
    }
  });
});

describe('userCookie', () => {
  beforeEach(async () => {
    mockedFs = replace('fs/promises');
    ({ axios } = mockAxios());

    Client = (await import('../../src/core/client')).Client;
  });

  afterEach(() => {
    reset();
  });

  test('should authenticate using username and password', async () => {
    const client = new Client();

    mockLogin(axios);

    await client.login.userCookie({ username, cookies: { JSESSIONID: sessionId } });

    expect(client.request.request.defaults.headers).toEqual({
      ...requestHeaders,
      cookie: `JSESSIONID="${sessionId}"; `,
      'csrf-token': sessionId,
    });
  });

  test('should write session to a sessions cache file', async () => {
    const client = new Client();
    const cookies = {
      JSESSIONID: sessionId,
    };

    mockLogin(axios);
    await client.login.userCookie({ username, cookies });

    verify(mockedFs.writeFile(argSessionPath, JSON.stringify({ username: cookies })));
  });

  test('should authenticate via cached session by default', async () => {
    const client = new Client();

    when(mockedFs.readFile(argSessionPath)).thenResolve(
      JSON.stringify({
        username: {
          JSESSIONID: sessionId,
          authenticated: 'true',
        },
        otherUsername: {
          JSESSIONID: 'ajax:48204165719552435',
          authenticated: 'false',
        },
      }),
    );

    await client.login.userCookie({ username, cookies: { JSESSIONID: sessionId } });

    expect(client.request.request.defaults.headers).toEqual({
      ...requestHeaders,
      cookie: `JSESSIONID="${sessionId}"; authenticated="true"; `,
      'csrf-token': sessionId,
    });
    verify(axios.get(), { ignoreExtraArgs: true, times: 0 });
    verify(axios.post(), { ignoreExtraArgs: true, times: 0 });
  });

  test('should ignore cache if passed useCache = false', async () => {
    const client = new Client();

    mockLogin(axios);
    when(mockedFs.readFile(argSessionPath)).thenResolve(
      JSON.stringify({
        username: {
          JSESSIONID: 'ajax:18202326571955235', // other session id
          authenticated: 'true',
        },
        otherUsername: {
          JSESSIONID: 'ajax:48204165719552435',
          authenticated: 'false',
        },
      }),
    );

    await client.login.userCookie({ useCache: false, username, cookies: { JSESSIONID: sessionId } });

    expect(client.request.request.defaults.headers).toEqual({
      ...requestHeaders,
      cookie: `JSESSIONID="${sessionId}"; `,
      'csrf-token': sessionId,
    });
  });
});
