import { object, replace, when } from 'testdouble';

export const mockAxios = (): { axios: { get: any; post: any; defaults: any } } => {
  const axios = replace('axios');
  const axiosInstance = object(['get', 'post', 'defaults']);

  when(axios.create(), { ignoreExtraArgs: true }).thenReturn(axiosInstance);

  return { axios: axiosInstance };
};
