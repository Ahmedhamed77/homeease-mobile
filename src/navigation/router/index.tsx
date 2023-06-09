import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AuthStack} from '../auth-stack';
import {TabNavigation} from '../tab-navigation';
import {usePersistedStore} from '../../services/Store/store';

export const Router = () => {
  const {hasLoginToken} = usePersistedStore();

  return (
    <NavigationContainer>
      {hasLoginToken ? <TabNavigation /> : <AuthStack />}
    </NavigationContainer>
  );
};
