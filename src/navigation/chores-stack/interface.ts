import {StackNavigationProp} from '@react-navigation/stack';

export type NO_PARAMS = undefined;

export enum ChoresParams {
  Chores = 'Chores',
  NewChore = 'NewChore',
  NewCategory = 'NewCategory',
}

export type ChoresParamsList = {
  [ChoresParams.Chores]: NO_PARAMS;
  [ChoresParams.NewChore]: {
    houseId: string;
  };
  [ChoresParams.NewCategory]: NO_PARAMS;
};

export type ChoresNavigation = StackNavigationProp<
  ChoresParamsList,
  ChoresParams
>;
