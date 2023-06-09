import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { MainParams, MainParamsList } from './interface';
import { HomeScreen, JoinHouseScreen } from '../../screens';

const Stack = createStackNavigator<MainParamsList>();

export const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName={MainParams.Home}>
      <Stack.Screen
        name={MainParams.Home}
        component={HomeScreen}
        options={{ headerShown: true }}
      />

      <Stack.Screen
        name={MainParams.JoinHouse}
        component={JoinHouseScreen}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};
