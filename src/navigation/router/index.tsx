import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AuthStack} from '../auth-stack';
import {TabNavigation} from '../tab-navigation';

export const Router = () => {
  const token = false;
  return (
    <NavigationContainer>
      {token ? <AuthStack /> : <TabNavigation />}
    </NavigationContainer>
  );
};
