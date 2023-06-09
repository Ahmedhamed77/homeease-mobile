import { User } from '../../../shared/types';
import { axios } from '../axios';
import { endpoints } from '../endpoints';
import { UserUpdatePayload } from './types';

export const updateUser = async ({ payload, userId }: { payload: UserUpdatePayload, userId: string }) => {
  const { data } = await axios.put<{ user: User }>(
    `${endpoints.users}/${userId}`,
    payload,
  );

  return data.user;
};
