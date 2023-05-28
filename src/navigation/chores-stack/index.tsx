import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {ChoresParams, ChoresParamsList} from './interface';
import {ChoresScreen, NewChoreScreen} from '../../screens';

const Stack = createStackNavigator<ChoresParamsList>();

export const ChoresStack = () => {
  return (
    <Stack.Navigator initialRouteName={ChoresParams.Chores}>
      <Stack.Screen
        name={ChoresParams.Chores}
        component={ChoresScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={ChoresParams.NewChore}
        component={NewChoreScreen}
        options={{}}
      />
    </Stack.Navigator>
  );
};