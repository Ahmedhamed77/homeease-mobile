import {
  CompositeNavigationProp,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {AuthParamsList} from '../auth-stack/interface';
import {TabParamList} from '../tab-navigation/interface';

export type NO_PARAMS = undefined;

export enum RootNavigationParams {
  Onboarding = 'Onboarding',
  AuthNavigation = 'AuthNavigation',
  TabNavigation = 'TabNavigation',
}

export type RootNavigationParamsList = {
  [RootNavigationParams.Onboarding]: NO_PARAMS;
  [RootNavigationParams.AuthNavigation]: NavigatorScreenParams<AuthParamsList>;
  [RootNavigationParams.TabNavigation]: NavigatorScreenParams<TabParamList>;
};

export type RootNavigation = CompositeNavigationProp<
  StackNavigationProp<RootNavigationParamsList, RootNavigationParams>,
  StackNavigationProp<AuthParamsList>
>;
