import {User} from '../../../shared/types';

export type House = {
  id: string;
  name: string;
  createdAt: Date;
  invitationCode: string;
  updatedAt: Date;
  users?: User[];
  chores: Chore[];
};

export type CreateHousePayload = {
  name: string;
};
export type UpdateHousePayload = {
  name: string;
};

export type Chore = {
  createdAt: string;
  description: string;
  id: string;
  owner: string;
  title: string;
  type: string;
  updatedA: string;
};
