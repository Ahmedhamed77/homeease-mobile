import React, {useState} from 'react';

import {styles} from './style';
import {View} from 'react-native';
import {CustomText} from '../../../shared/ui';

interface PaymentScreenType {}

export const PaymentScreen: React.FC<PaymentScreenType> = () => {
  return (
    <View style={styles.container}>
      <CustomText>PaymentScreen</CustomText>
    </View>
  );
};
