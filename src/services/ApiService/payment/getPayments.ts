import {axios} from '../axios';
import {endpoints} from '../endpoints';
import {Payments} from './types';

export const getPayments = async ({houseId}: {houseId: string}) => {
  const {data} = await axios.get<Payments>(
    `${endpoints.houses}/${houseId}/payments`,
  );

  return data.payments;
};
