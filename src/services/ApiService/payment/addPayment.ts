import { axios } from '../axios';
import { endpoints } from '../endpoints';
import { AddPaymentPayload } from './types';

interface AddPaymentParams {
  houseId: string; payload: AddPaymentPayload[];
}

export const addPayment = async ({ houseId, payload }: AddPaymentParams) => {
  //this returns the number of records created
  const { data } = await axios.post<{ count: number, message: string }>(
    `${endpoints.houses}/${houseId}/payments`,
    payload
  );

  return data;
};
