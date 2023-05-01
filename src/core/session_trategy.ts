import * as fs from 'fs/promises';
import { AuthCookies } from '../types/auth-cookies';

interface SessionStrategy {
  getSession(): Promise<Record<string, AuthCookies>>;
  saveSession(username: string, cachedSessions: Record<string, AuthCookies>, cookie: Partial<AuthCookies>): void;
}

class FileSession implements SessionStrategy {
  private filePath: string;

  constructor(filePath: string) {
    this.filePath = filePath;
  }

  public async getSession(): Promise<Record<string, AuthCookies>> {
    let cachedSessions: Record<string, AuthCookies>;

    try {
      const sessionsBuffer = (await fs.readFile(this.filePath).catch(() => fs.writeFile(this.filePath, '{}'))) || '{}';
      cachedSessions = JSON.parse(sessionsBuffer.toString());
    } catch (err) {
      cachedSessions = {};
    }
    return cachedSessions;
  }

  public saveSession(username: string, cachedSessions: Record<string, AuthCookies>, cookie: Partial<AuthCookies>): void {
    fs.writeFile(this.filePath, JSON.stringify({ ...cachedSessions, [username]: cookie }));
  }
}

export { SessionStrategy, FileSession };
