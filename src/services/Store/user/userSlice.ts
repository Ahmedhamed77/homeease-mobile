import {UserSession} from '../../ApiService/auth';
import {House} from '../../ApiService/house/types';
import {StoreSlice} from '../store';

export interface UserSlice {
  userSession: UserSession;
  userHouse: House;
  setUserSession(session: UserSession): void;
  setUserHouse(house: House): void;
}

export const createUserSlice: StoreSlice<UserSlice> = set => ({
  // @ts-ignore
  userSession: {},
  setUserSession: (session: UserSession) => set({userSession: session}),
  // @ts-ignore
  userHouse: {},
  setUserHouse: (house: House) => set({userHouse: house}),
});
