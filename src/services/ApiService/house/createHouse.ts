import { axios } from '../axios';
import { endpoints } from '../endpoints';
import { CreateHousePayload, House } from './types';

export const createHouse = async ({ payload }: { payload: CreateHousePayload }) => {
  const { data } = await axios.post<{ house: House, message: string }>(
    `${endpoints.houses}`,
    payload
  );

  return data.house;
};
