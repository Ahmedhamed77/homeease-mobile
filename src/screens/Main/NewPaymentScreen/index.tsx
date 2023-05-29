import React from 'react';

import {styles} from './style';
import {View} from 'react-native';
import {CustomText} from '../../../shared/ui';

interface NewPaymentScreenType {}

export const NewPaymentScreen: React.FC<NewPaymentScreenType> = () => {
  return (
    <View style={styles.container}>
      <CustomText>welcome</CustomText>
    </View>
  );
};
