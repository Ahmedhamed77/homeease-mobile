import { axios } from '../axios';
import { endpoints } from '../endpoints';
import { House } from './types';

export const getHouse = async ({ houseId }: { houseId: string }) => {
  const { data } = await axios.get<{ house: House }>(
    `${endpoints.houses}/${houseId}`,
  );

  return data.house;
};
