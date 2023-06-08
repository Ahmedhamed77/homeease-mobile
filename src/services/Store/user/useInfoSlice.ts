import {StoreSlice} from '../store';

type UserInfo = {
  first_name: string;
  last_name: string;
};
export interface UserInfoSlice {
  userInfo: UserInfo;
  setUserInfo(info: UserInfo): void;
}

export const createUserInfoSlice: StoreSlice<UserInfoSlice> = set => ({
  // @ts-ignore
  userInfo: {},
  setUserInfo: (info: UserInfo) => set({userInfo: info}),
});
