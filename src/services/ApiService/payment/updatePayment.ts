import {axios} from '../axios';
import {endpoints} from '../endpoints';
import {Payment, UpdatePaymentPayload} from './types';

interface UpdatePaymentParams {
  houseId: string;
  paymentId: string;
  payload: UpdatePaymentPayload;
}

export const updatePayment = async ({
  houseId,
  paymentId,
  payload,
}: UpdatePaymentParams) => {
  const {data} = await axios.put<{payment: Payment}>(
    `${endpoints.houses}/${houseId}/payments/${paymentId}}`,
    payload,
  );

  return data.payment;
};
