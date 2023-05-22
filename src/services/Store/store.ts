import {create, StoreApi} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAuthSlice, AuthSlice} from './auth/authSlice';

export type StoreState = AuthSlice;

export type StoreSlice<T> = (
  set: StoreApi<StoreState>['setState'],
  get: StoreApi<StoreState>['getState'],
) => T;

export const usePersistedStore = create<StoreState>()(
  persist(
    (set, get) => ({
      ...createAuthSlice(set, get),
    }),
    {
      name: 'home_store',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export const useStore = create<StoreState>()((set, get) => ({
  ...createAuthSlice(set, get),
}));
