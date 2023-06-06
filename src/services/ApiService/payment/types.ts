export type Payments = {
  payments: Payment[];
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
