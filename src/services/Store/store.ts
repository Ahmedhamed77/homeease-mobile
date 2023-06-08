import {create, StoreApi} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAuthSlice, AuthSlice} from './auth/authSlice';
import {createUserSlice, UserSlice} from './user/userSlice';
import {createUserInfoSlice, UserInfoSlice} from './user/useInfoSlice';

export type PersistStoreState = AuthSlice & UserSlice;
export type StoreState = UserSlice & UserInfoSlice;

export type StoreSlice<T> = (
  set: StoreApi<StoreState | PersistStoreState>['setState'],
  get: StoreApi<StoreState | PersistStoreState>['getState'],
) => T;

export const usePersistedStore = create<PersistStoreState>()(
  persist(
    (set, get) => ({
      ...createAuthSlice(set, get),
      ...createUserSlice(set, get),
    }),
    {
      name: 'home_store',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export const useStore = create<StoreState>()((set, get) => ({
  ...createUserSlice(set, get),
  ...createUserInfoSlice(set, get),
}));
