import React from 'react';

import { styles } from './style';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  SafeAreaView,
  View,
} from 'react-native';
import { CustomText } from '../../../shared/ui';
import { Button } from 'react-native-paper';
import {
  PaymentNavigation,
  PaymentParams,
} from '../../../navigation/payment-stack/interface';
import { useGetPayments } from '../../../shared/hooks/react-query/queries';
import { Payment } from '../../../services/ApiService/payment/types';
import moment from 'moment';
import { COLORS } from '../../../shared/colors';
import { usePersistedStore } from '../../../services/Store/store';

interface PaymentScreenType {
  navigation: PaymentNavigation;
}

export const PaymentScreen: React.FC<PaymentScreenType> = ({ navigation }) => {
  const { userSession } = usePersistedStore(state => state);
  const {
    data: payments,
    isLoading: paymentsLoading,
    refetch,
    isRefetching,
  } = useGetPayments(userSession.user.houseId);

  console.log(payments, '---payments');

  if (paymentsLoading) {
    return (
      <ActivityIndicator color={COLORS.primary} style={styles.viewCenter} />
    );
  }

  if (!payments) {
    return null;
  }

  const onAssignNewPayment = () =>
    navigation.navigate(PaymentParams.NewPayment, {
      houseId: userSession.user.houseId,
    });

  const renderPayment: ListRenderItem<Payment> = ({ item }) => {
    const created = moment(item.createdAt).format('YYYY-MM-DD');
    const isCompleted = item.status === 'Completed';

    return (
      <View style={styles.renderItemContent}>
        <View style={styles.createdItem}>
          <CustomText textArticle>{item.Payer.firstName} {item.Payer.lastName}</CustomText>
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
        <CustomText textArticle style={styles.textSpace}>
          Add New payment so other users can know what they should pay
        </CustomText>
        <Button mode="contained" onPress={onAssignNewPayment}>
          New Payment
        </Button>
      </View>
    );
  };

  const listEmptyComponent = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <CustomText subtitle>No payment assigned</CustomText>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={payments}
        ListHeaderComponent={listHeaderComponent}
        renderItem={renderPayment}
        ListEmptyComponent={listEmptyComponent}
        contentContainerStyle={styles.scrollContainer}
        refreshing={isRefetching}
        onRefresh={refetch}
      />
    </SafeAreaView>
  );
};
