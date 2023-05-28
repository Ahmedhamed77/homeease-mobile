import {StackNavigationProp} from '@react-navigation/stack';

export type NO_PARAMS = undefined;

export enum ChoresParams {
  Chores = 'Chores',
  NewChore = 'NewChore',
}

export type ChoresParamsList = {
  [ChoresParams.Chores]: NO_PARAMS;
  [ChoresParams.NewChore]: NO_PARAMS;
};

export type ChoresNavigation = StackNavigationProp<
  ChoresParamsList,
  ChoresParams
>;
