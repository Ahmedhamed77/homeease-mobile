import { Status, User } from "../../../shared/types";

export type Chore = {
  createdAt: string;
  description: string;
  id: string;
  owner: string;
  title: string;
  type: string;
  updatedAt: string;
};

export type ChoreAssignment = {
  Chore: Chore;
  User: User;
  choreId: string;
  createdAt: string;
  dueDate: string;
  houseId: string;
  id: string;
  status: string;
  updatedAt: string;
  userId: string;
};

export type AssignChorePayload = {
  choreId: string;
  userId: string;
  dueDate: Date;
}

export type UpdateChorePayload = {
  status?: Status;
  dueDate?: Date;
}

export type UserChores = {
  chores: Chore[];
};


export type UserChoresAssignment = {
  choreAssignments: ChoreAssignment[];
};
