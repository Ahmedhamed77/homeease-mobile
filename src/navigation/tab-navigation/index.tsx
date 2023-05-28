import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React from 'react';
import {TabParamList, TabParams} from './interface';
import {COLORS} from '../../shared/colors';
import {MainStack} from '../main-stack';

import {Ionicons} from '@expo/vector-icons';
import {ProfileStack} from '../profile-stack';
import {ChoresStack} from '../chores-stack';

const Tab = createBottomTabNavigator<TabParamList>();

export const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={TabParams.MainStack}
      screenOptions={{
        tabBarLabelStyle: {
          color: COLORS.dark,
        },

        headerShown: false,
      }}>
      <Tab.Screen
        name={TabParams.MainStack}
        component={MainStack}
        options={({}) => ({
          title: 'main',
          tabBarIcon: ({color}: {color: string}) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        })}
      />

      <Tab.Screen
        name={TabParams.ChoresStack}
        component={ChoresStack}
        options={({}) => ({
          title: 'Chores',
          tabBarIcon: ({color}: {color: string}) => (
            <Ionicons name="md-person" size={24} color={color} />
          ),
        })}
      />

      <Tab.Screen
        name={TabParams.ProfileStack}
        component={ProfileStack}
        options={({}) => ({
          title: 'Profile',
          tabBarIcon: ({color}: {color: string}) => (
            <Ionicons name="md-person" size={24} color={color} />
          ),
        })}
      />
    </Tab.Navigator>
  );
};
