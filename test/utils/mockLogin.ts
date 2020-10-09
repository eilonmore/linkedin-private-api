import { stringify as queryStringify } from 'querystring';
import { when } from 'testdouble';

import { authUrl } from '../../config';

export const mockLogin = (
  axios: any,
  username = 'username',
  password = 'password',
  sessionId = 'ajax:4458204165719552435',
): void => {
  const cookies = [`JSESSIONID=${sessionId}`];
  when(axios.get(authUrl), { ignoreExtraArgs: true }).thenResolve({
    headers: {
      'set-cookie': cookies,
    },
  });

  const authPayload = {
    session_key: username,
    session_password: password,
    JSESSIONID: sessionId,
  };
  when(axios.post(authUrl, queryStringify(authPayload)), { ignoreExtraArgs: true }).thenResolve({
    headers: {
      'set-cookie': [`JSESSIONID=${sessionId}`, 'authenticated=true'],
    },
  });
};
