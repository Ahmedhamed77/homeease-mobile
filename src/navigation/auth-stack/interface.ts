export type NO_PARAMS = undefined;

export enum AuthParams {
  GettingStart = 'GettingStart',
  Login = 'Login',
  UserInfo = 'UserInfo',
  UserCredentials = 'UserCredentials',
}

export type AuthParamsList = {
  [AuthParams.GettingStart]: NO_PARAMS;
  [AuthParams.Login]: NO_PARAMS;
  [AuthParams.UserInfo]: NO_PARAMS;
  [AuthParams.UserCredentials]: NO_PARAMS;
};
