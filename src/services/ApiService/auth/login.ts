import {axios} from '../axios';
import {endpoints} from '../endpoints';
import {LoginPayload} from './types';

export const loginUser = async ({payload}: {payload: LoginPayload}) => {
  const {data} = await axios.get(endpoints.csrf);
  const res = await axios.post(endpoints.login, {
    ...payload,
    json: 'true',
    csrfToken: data.csrfToken,
  });

  return res.data;
};
