import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { ProfileParams, ProfileParamsList } from './interface';
import { ProfileScreen } from '../../screens';

const Stack = createStackNavigator<ProfileParamsList>();

export const ProfileStack = () => {
  return (
    <Stack.Navigator initialRouteName={ProfileParams.Profile}>
      <Stack.Screen
        name={ProfileParams.Profile}
        component={ProfileScreen}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};
