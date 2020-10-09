import { castArray, isPlainObject, mapValues, reduce } from 'lodash';
import { stringify } from 'querystring';

const encodeFilter = (value: string | string[], key: string) => encodeURIComponent(`${key}->${castArray(value).join('|')}`);

export const paramsSerializer = (params: Record<string, string | Record<string, string>>): string => {
  const encodedParams = mapValues(params, value => {
    if (!isPlainObject(value)) {
      return value as string;
    }

    const encodedList = reduce(
      value as Record<string, string>,
      (res, filterVal, filterKey) => `${res}${res ? ',' : ''}${encodeFilter(filterVal, filterKey)}`,
      '',
    );

    return `List(${encodedList})`;
  });

  return stringify(encodedParams, undefined, undefined, {
    encodeURIComponent: uri => uri,
  });
};
