import { axios } from '../axios';
import { endpoints } from '../endpoints';

interface CancelPaymentParams {
  houseId: string;
  paymentId: string;
}

export const cancelPayment = async ({ houseId, paymentId }: CancelPaymentParams) => {
  const { data } = await axios.delete<{ message: string }>(
    `${endpoints.houses}/${houseId}/payments/${paymentId}}`,
  );

  return data;
};
