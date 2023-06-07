import { axios } from '../axios';
import { endpoints } from '../endpoints';

export const deleteHouse = async ({ houseId }: { houseId: string }) => {
  const { data } = await axios.delete<{ message: string }>(
    `${endpoints.houses}/${houseId}`,
  );

  return data;
};
