import { isArray, isPlainObject, mapValues } from 'lodash';
import { stringify } from 'querystring';

export const graphqlParamSerializer = (params: Record<string, unknown>): string => {
  const encodeValue = (value: unknown): string => {
    if (!isArray(value) && !isPlainObject(value)) {
      return (<string>value).toString();
    }

    if (isArray(value)) {
      const arrayEncodedValues = value.map(x => encodeValue(x));
      return `List(${arrayEncodedValues.join(',')})`;
    }

    const object = <Record<string, unknown>>value;
    const objectKeys = Object.keys(object);
    const objectEncodedValues = objectKeys.map(k => `${k}:${encodeValue(object[k])}`);

    return `(${objectEncodedValues.join(",")})`;
  }

  const encodedParams = mapValues(params, value => {
    return encodeValue(value);
  });

  return stringify(encodedParams, undefined, undefined, {
    encodeURIComponent: uri => uri,
  });
};
