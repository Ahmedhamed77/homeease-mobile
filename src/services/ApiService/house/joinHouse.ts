import {axios} from '../axios';
import {endpoints} from '../endpoints';
import {House} from './types';

export interface JoinHouseParams {
  invitationCode: string;
}

export const joinHouse = async ({invitationCode}: JoinHouseParams) => {
  const {data} = await axios.post<{house: House; message: string}>(
    `${endpoints.houses}/${invitationCode}`,
  );

  return data.house;
};
