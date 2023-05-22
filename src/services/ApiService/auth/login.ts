import {axios} from '../axios';
import {endpoints} from '../endpoints';
import {LoginPayload} from './types';

export const loginUser = async (payload: LoginPayload) => {
  const res = await axios.post(endpoints.login, payload);

  console.log(res, '------res');
  return res.data;
};
