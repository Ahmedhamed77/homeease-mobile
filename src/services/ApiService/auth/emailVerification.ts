import { User } from '../../../shared/types';
import { axios } from '../axios';
import { endpoints } from '../endpoints';

export const emailVerification = async ({ email }: { email: string }) => {
  const { data } = await axios.get(endpoints.csrf);
  const res = await axios.post<User>(endpoints.email, {
    email,
    json: 'true',
    csrfToken: data.csrfToken,
  });

  return res.data;
};
