import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  GettingStartScreen,
  HomeScreen,
  LoginScreen,
  UserCredentialsScreen,
  UserInfoScreen,
} from '../../screens';

const Stack = createNativeStackNavigator();

export const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="GettingStart"
          component={GettingStartScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="UserInfo"
          component={UserInfoScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="UserCredentials"
          component={UserCredentialsScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
