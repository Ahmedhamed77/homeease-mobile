import { axios } from '../axios';
import { endpoints } from '../endpoints';
import { UpdateHousePayload, House } from './types';

export interface UpdateHouseParams {
  houseId: string;
  payload: UpdateHousePayload;
}

export const updateHouse = async ({ houseId, payload }: UpdateHouseParams) => {
  const { data } = await axios.put<{ house: House }>(
    `${endpoints.houses}/${houseId}`,
    payload
  );

  return data.house;
};
