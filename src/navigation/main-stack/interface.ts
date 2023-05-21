import {StackNavigationProp} from '@react-navigation/stack';

export type NO_PARAMS = undefined;

export enum MainParams {
  Home = 'Home',
  JoinHouse = 'JoinHouse',
}

export type MainParamsList = {
  [MainParams.Home]: NO_PARAMS;
  [MainParams.JoinHouse]: NO_PARAMS;
};

export type MainNavigation = StackNavigationProp<MainParamsList, MainParams>;
