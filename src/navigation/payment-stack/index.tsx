import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { PaymentParams, PaymentParamsList } from './interface';
import { NewPaymentScreen, PaymentScreen } from '../../screens';

const Stack = createStackNavigator<PaymentParamsList>();

export const PaymentStack = () => {
  return (
    <Stack.Navigator initialRouteName={PaymentParams.Payment}>
      <Stack.Screen
        name={PaymentParams.Payment}
        component={PaymentScreen}
        options={{ headerShown: true }}
      />

      <Stack.Screen
        name={PaymentParams.NewPayment}
        component={NewPaymentScreen}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};
