export interface UserInfoPayload {
  userId: string;
}

export interface UserInfoResponse {
  user: User;
}

export type User = {
  createdAt: string;
  email: string;
  emailVerified: string;
  firstName: string;
  houseId: string;
  id: string;
  lastName: string;
  role: string;
  updatedAt: string;
};
