import {StackNavigationProp} from '@react-navigation/stack';

export type NO_PARAMS = undefined;

export enum ProfileParams {
  Profile = 'Profile',
}

export type ProfileParamsList = {
  [ProfileParams.Profile]: NO_PARAMS;
};

export type ProfileNavigation = StackNavigationProp<
  ProfileParamsList,
  ProfileParams
>;
