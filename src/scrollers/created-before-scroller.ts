import { isEmpty } from 'lodash';

export abstract class CreatedBeforeScroller<T> {
  createdBefore?: number;

  private prevCreatedBefore?: number;

  private pageIndexes: number[] = [];

  abstract fieldName: keyof T;

  constructor({ createdBefore }: { createdBefore?: Date }) {
    this.createdBefore = createdBefore?.getTime();
  }

  abstract fetch(): Promise<T[]>;

  async scrollNext(): Promise<T[]> {
    const results = await this.fetch();

    if (this.prevCreatedBefore) {
      this.pageIndexes.push(this.prevCreatedBefore);
    }

    if (!isEmpty(results)) {
      this.prevCreatedBefore = this.createdBefore || ((results[0][this.fieldName] as unknown) as number) + 1000;
      this.createdBefore = (results[results.length - 1][this.fieldName] as unknown) as number;
    }

    return results;
  }

  async scrollBack(): Promise<T[]> {
    if (isEmpty(this.pageIndexes)) {
      return [];
    }

    this.createdBefore = this.pageIndexes.pop();

    return this.fetch();
  }

  restart(): void {
    this.createdBefore = undefined;
    this.pageIndexes = [];
  }
}
