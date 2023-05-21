import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {AuthParams, AuthParamsList} from './interface';
import {
  GettingStartScreen,
  LoginScreen,
  UserCredentialsScreen,
  UserInfoScreen,
} from '../../screens';

const Stack = createNativeStackNavigator<AuthParamsList>();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={AuthParams.GettingStart}
      screenOptions={{animationTypeForReplace: 'push'}}>
      <Stack.Screen
        name={AuthParams.GettingStart}
        component={GettingStartScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={AuthParams.Login}
        component={LoginScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={AuthParams.UserInfo}
        component={UserInfoScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={AuthParams.UserCredentials}
        component={UserCredentialsScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
