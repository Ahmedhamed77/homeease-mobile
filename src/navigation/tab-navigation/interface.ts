import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  RootNavigationParams,
  RootNavigationParamsList,
} from '../router/interface';

export type NO_PARAMS = undefined;

export enum TabParams {
  MainStack = 'MainStack',
  ProfileStack = 'ProfileStack',
}
export type TabParamList = {
  [TabParams.MainStack]: NO_PARAMS;
  [TabParams.ProfileStack]: NO_PARAMS;
};

export type TabRootNavigation = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, TabParams>,
  StackNavigationProp<RootNavigationParamsList, RootNavigationParams>
>;
