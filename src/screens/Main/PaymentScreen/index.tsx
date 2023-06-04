import React from 'react';

import {styles} from './style';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {CustomText} from '../../../shared/ui';
import {Button} from 'react-native-paper';
import {
  PaymentNavigation,
  PaymentParams,
} from '../../../navigation/payment-stack/interface';

interface PaymentScreenType {
  navigation: PaymentNavigation;
}

export const PaymentScreen: React.FC<PaymentScreenType> = ({navigation}) => {
  const onAssignNewPayment = () =>
    navigation.navigate(PaymentParams.NewPayment);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.paymentHeaderContent}>
          <CustomText textArticle>
            Lorem ipsum dolor sit amet consectetur
          </CustomText>
          <CustomText textArticle>
            Lorem ipsum dolor sit amet consectetur
          </CustomText>
          <CustomText textArticle style={styles.textSpace}>
            Lorem ipsum dolor sit amet consectetur, adipisicing
          </CustomText>
          <Button mode="contained" onPress={onAssignNewPayment}>
            New Payment
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
