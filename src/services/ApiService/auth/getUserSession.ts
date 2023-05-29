import {axios} from '../axios';
import {endpoints} from '../endpoints';

export const getUserSession = async () => {
  const {data} = await axios.get(endpoints.session);
  return data;
};
