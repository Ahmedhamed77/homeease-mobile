import {axios} from '../axios';
import {endpoints} from '../endpoints';
import {UserInfoPayload, UserInfoResponse} from './types';

export const getUserInfo = async ({userId}: UserInfoPayload) => {
  const res = await axios.get<UserInfoResponse>(`${endpoints.users}/${userId}`);

  return res.data.user;
};
