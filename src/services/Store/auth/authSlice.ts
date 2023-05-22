import {StoreSlice} from '../store';

export interface AuthSlice {
  token: string;
  hasLoginToken: boolean;
  setToken: (token: string) => void;
  setHasLoginToken(val: boolean): void;
}

export const createAuthSlice: StoreSlice<AuthSlice> = set => ({
  token: '',
  hasLoginToken: false,
  setToken: (token: string) => set({token}),
  setHasLoginToken: (val: boolean) => set({hasLoginToken: val}),
});
