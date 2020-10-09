import { isEmpty } from 'lodash';

export abstract class SkipLimitScroller<T> {
  limit: number;

  skip: number;

  scrollNextCounter = 0;

  hitEndOfResults = false;

  constructor({ skip, limit }: { skip: number; limit: number }) {
    this.skip = skip;
    this.limit = limit;
  }

  abstract fetch(): Promise<T[]>;

  async scrollNext(): Promise<T[]> {
    if (this.hitEndOfResults) {
      return [];
    }

    const results = await this.fetch();

    if (isEmpty(results)) {
      this.hitEndOfResults = true;
    }

    this.skip += this.limit;
    this.scrollNextCounter += 1;

    return results;
  }

  async scrollBack(): Promise<T[]> {
    this.hitEndOfResults = false;

    if (this.scrollNextCounter === 1) {
      this.skip = 0;
      this.scrollNextCounter = 0;

      return [];
    }

    this.skip = Math.max(this.skip - this.limit * 2, 0);

    if (this.skip === 0) {
      this.scrollNextCounter = 0;
    }

    return this.fetch();
  }

  restart(): void {
    this.skip = 0;
    this.limit = 10;
  }
}