import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { ChoresParams, ChoresParamsList } from './interface';
import {
  ChoresScreen,
  NewChoreCategoryScreen,
  NewChoreScreen,
} from '../../screens';

const Stack = createStackNavigator<ChoresParamsList>();

export const ChoresStack = () => {
  return (
    <Stack.Navigator initialRouteName={ChoresParams.Chores}>
      <Stack.Screen
        name={ChoresParams.Chores}
        component={ChoresScreen}
        options={{ headerShown: true }}
      />

      <Stack.Screen
        name={ChoresParams.NewChore}
        component={NewChoreScreen}
        options={{ headerTitle: "New Chore" }}
      />

      <Stack.Screen
        name={ChoresParams.NewCategory}
        component={NewChoreCategoryScreen}
        options={{ headerTitle: "New Category" }}
      />
    </Stack.Navigator>
  );
};
