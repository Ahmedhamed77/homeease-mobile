export type LoginPayload = {
  email: string;
  password: string;
};

export type RegisterPayload = {
  username: {
    firstname: string;
    lastname: string;
  };
  email: string;
  password: string;
}

export type UserUpdatePayload = {
  name?: {
    firstname: string,
    lastname: string
  }
  password?: {
    oldPassword: string,
    newPassword: string
  };
}
