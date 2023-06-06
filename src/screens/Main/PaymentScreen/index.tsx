import React from 'react';

import {styles} from './style';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  SafeAreaView,
  View,
} from 'react-native';
import {CustomText} from '../../../shared/ui';
import {Button} from 'react-native-paper';
import {
  PaymentNavigation,
  PaymentParams,
} from '../../../navigation/payment-stack/interface';
import {
  useGetPayments,
  useGetUserSession,
} from '../../../shared/hooks/react-query/queries';
import {Payment} from '../../../services/ApiService/payment/types';
import moment from 'moment';
import {COLORS} from '../../../shared/colors';

interface PaymentScreenType {
  navigation: PaymentNavigation;
}

export const PaymentScreen: React.FC<PaymentScreenType> = ({navigation}) => {
  const {data, isLoading: sessionLoading} = useGetUserSession();
  const {data: payments, isLoading: paymentsLoading} = useGetPayments(
    data?.user.houseId || '',
  );

  if (sessionLoading || paymentsLoading) {
    return (
      <ActivityIndicator color={COLORS.primary} style={styles.viewCenter} />
    );
  }

  if (!payments) {
    return null;
  }

  const onAssignNewPayment = () =>
    navigation.navigate(PaymentParams.NewPayment);

  const renderPayment: ListRenderItem<Payment> = ({item}) => {
    const created = moment(item.createdAt).format('YYYY-MM-DD');
    const isCompleted = item.status === 'Completed';

    return (
      <View style={styles.renderItemContent}>
        <View style={styles.createdItem}>
          <CustomText textArticle>Created</CustomText>
          <CustomText textArticle style={{}}>
            {created}
          </CustomText>
        </View>
        <View style={styles.createdItem}>
          <View>
            <CustomText textArticle>{item.description}</CustomText>
            <CustomText textArticle>{item.amount}</CustomText>
          </View>

          <CustomText
            textArticle
            style={{
              color: isCompleted ? COLORS.green : COLORS.dark_red,
              alignSelf: 'center',
            }}>
            {item.status}
          </CustomText>
        </View>
      </View>
    );
  };

  const listHeaderComponent = () => {
    return (
      <View style={styles.paymentHeaderContent}>
        <CustomText textArticle>Add New Payemnt</CustomText>
        <Button mode="contained" onPress={onAssignNewPayment}>
          New Payment
        </Button>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={payments}
        style={styles.scrollContainer}
        ListHeaderComponent={listHeaderComponent}
        renderItem={renderPayment}
      />
    </SafeAreaView>
  );
};
