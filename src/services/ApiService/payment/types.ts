import {Status} from '../../../shared/types';

export type Payments = {
  payments: Payment[];
};

export type AddPaymentPayload = {
  amount: number;
  status?: Status;
  payerId: string;
  description: string;
  recipientId: string;
  createdAt: Date;
};

export type UpdatePaymentPayload = {
  amount?: number;
  description?: string;
  status?: Status;
};

export type Payment = {
  amount: number;
  createdAt: string;
  description: string;
  houseId: string;
  id: string;
  payerId: string;
  recipientId: string;
  status: string;
  updatedAt: string;
};
