import { parse as parseCookie } from 'cookie';
import * as fs from 'fs/promises';
import { merge, pickBy, reduce } from 'lodash';

import { requestHeaders } from '../../config';
import { AnonymousCookies } from '../types/anonymous-cookies';
import { AuthCookies } from '../types/auth-cookies';
import { Client } from './client';

const SESSIONS_PATH = `${process.cwd()}/sessions.json`;

const parseCookies = <T>(cookies: string[]): Partial<T> =>
  cookies.reduce((res, c) => {
    let parsedCookie = parseCookie(c);

    parsedCookie = pickBy(parsedCookie, (v, k) => k === Object.keys(parsedCookie)[0]);

    return merge(res, parsedCookie);
  }, {});

export class Login {
  private client: Client;

  constructor({ client }: { client: Client }) {
    this.client = client;
  }

  private setRequestHeaders({ cookies }: { cookies: AuthCookies }): void {
    const cookieStr = reduce(cookies, (res, v, k) => `${res}${k}="${v}"; `, '');

    this.client.request.setHeaders({
      ...requestHeaders,
      cookie: cookieStr,
      'csrf-token': cookies.JSESSIONID!,
    });
  }

  private async readCacheFile(): Promise<Record<string, AuthCookies>> {
    let cachedSessions: Record<string, AuthCookies>;

    try {
      const sessionsBuffer = (await fs.readFile(SESSIONS_PATH).catch(() => fs.writeFile(SESSIONS_PATH, '{}'))) || '{}';
      cachedSessions = JSON.parse(sessionsBuffer.toString());
    } catch (err) {
      cachedSessions = {};
    }

    return cachedSessions;
  }

  private tryCacheLogin({
    useCache = true,
    cachedSessions,
    username,
  }: {
    useCache: boolean;
    cachedSessions: Record<string, AuthCookies>;
    username?: string;
  }) {
    if (!useCache) {
      return false;
    }

    if (!username) {
      throw new TypeError('Must provide username when useCache option is true');
    }

    const cookies = cachedSessions[username];

    if (cookies) {
      this.setRequestHeaders({ cookies });

      return true;
    }

    return false;
  }

  async userPass({
    username,
    password,
    useCache = true,
  }: {
    username: string;
    password?: string;
    useCache?: boolean;
  }): Promise<Client> {
    const cachedSessions = await this.readCacheFile();

    if (this.tryCacheLogin({ useCache, cachedSessions, username })) {
      return this.client;
    }

    if (!password) {
      throw new TypeError('password is required for login');
    }

    const anonymousAuthResponse = await this.client.request.auth.getAnonymousAuth();

    const sessionId = parseCookies<AnonymousCookies>(anonymousAuthResponse.headers['set-cookie']).JSESSIONID!;

    const authRes = await this.client.request.auth.authenticateUser({ username, password, sessionId });

    const parsedCookies = parseCookies<AuthCookies>(authRes.headers['set-cookie']);
    fs.writeFile(SESSIONS_PATH, JSON.stringify({ ...cachedSessions, [username]: parsedCookies }));

    this.setRequestHeaders({ cookies: parsedCookies });

    return this.client;
  }

  async userCookie({
    username,
    cookies,
    useCache = true,
  }: {
    username?: string;
    cookies: { JSESSIONID: string; li_at?: string };
    useCache?: boolean;
  }): Promise<Client> {
    const cachedSessions = await this.readCacheFile();

    if (this.tryCacheLogin({ useCache, cachedSessions, username })) {
      return this.client;
    }

    this.setRequestHeaders({ cookies });

    if (username) {
      fs.writeFile(SESSIONS_PATH, JSON.stringify({ ...cachedSessions, [username]: cookies }));
    }

    return this.client;
  }
}
