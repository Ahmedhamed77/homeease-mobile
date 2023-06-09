import {axios} from '../axios';
import {endpoints} from '../endpoints';

export type UserSession = {
  expires: string;
  user: {
    email: string;
    houseId: string;
    id: string;
    name: string;
  };
};

export const getUserSession = async () => {
  const {data} = await axios.get<UserSession>(endpoints.session);
  return data;
};
