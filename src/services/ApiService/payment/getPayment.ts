import {axios} from '../axios';
import {endpoints} from '../endpoints';
import {Payment} from './types';

interface GetPaymentParams {
  houseId: string;
  paymentId: string;
}

export const getPayment = async ({houseId, paymentId}: GetPaymentParams) => {
  const {data} = await axios.get<{payment: Payment}>(
    `${endpoints.houses}/${houseId}/payments/${paymentId}}`,
  );

  return data.payment;
};
