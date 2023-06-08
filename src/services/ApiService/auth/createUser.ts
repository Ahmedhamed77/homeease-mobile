import {axios} from '../axios';
import {endpoints} from '../endpoints';
import {RegisterPayload} from './types';

export const createUser = async (payload: RegisterPayload) => {
  const res = await axios.post(endpoints.register, payload);

  return res.data;
};
