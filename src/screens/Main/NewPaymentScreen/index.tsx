import React, {useState} from 'react';
import {ActivityIndicator, Pressable, ScrollView, View} from 'react-native';
import {styles} from './style';
import {COLORS} from '../../../shared/colors';
import {CustomText} from '../../../shared/ui';
import {Button, TextInput} from 'react-native-paper';

import moment from 'moment';

import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';

import {
  PaymentNavigation,
  PaymentParams,
  PaymentParamsList,
} from '../../../navigation/payment-stack/interface';
import {useGetHouse} from '../../../shared/hooks/react-query/queries/useGetHouse';
import {RouteProp} from '@react-navigation/native';

const payers = ['Omar Daleen', 'Ahmed Aasi', 'Mohammad Daleen', 'Ahmed Salahi'];
interface NewPaymentScreenType {
  navigation: PaymentNavigation;
  route: RouteProp<PaymentParamsList, PaymentParams.NewPayment>;
}

export const NewPaymentScreen: React.FC<NewPaymentScreenType> = ({
  navigation,
  route,
}) => {
  const {houseId} = route.params;
  const [amountPayment, setAmountPayment] = useState('');

  const [description, setDescription] = useState('');
  const [selectedPayers, setSelectedPayers] = useState<string[]>([]);
  const sourceMoment = moment.unix(1636797600);
  const sourceDate = sourceMoment.local().toDate();
  const [paymentDate, setPaymentDate] = useState(sourceDate);

  const {data: userHouse, isLoading} = useGetHouse(houseId);

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    if (event.type === 'neutralButtonPressed') {
      setPaymentDate(new Date(0));
    } else {
      selectedDate && setPaymentDate(selectedDate);
    }
  };

  const onSelectedPayers = (selectedItem: string) => {
    const isExist = selectedPayers.some(item => item === selectedItem);
    console.log(selectedPayers, 'selectedPayers');
    console.log(isExist);
    if (!isExist) {
      setSelectedPayers(prev => [...prev, selectedItem]);
    } else {
      const newArr = selectedPayers.filter(item => item !== selectedItem);
      setSelectedPayers(newArr);
    }
  };

  const onAssignPayment = () => {
    // api here
  };

  if (isLoading) {
    return (
      <ActivityIndicator
        color={COLORS.primary}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
    );
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.contentContainer}>
        <CustomText subtitle style={styles.textSpace}>
          Add payment amount
        </CustomText>

        <View style={styles.usersContent}>
          <TextInput
            placeholder="0"
            onChangeText={setAmountPayment}
            defaultValue={amountPayment}
            keyboardType={'numeric'}
            style={styles.inputStyle}
            contentStyle={[styles.inputContentStyle, styles.inputSpace]}
            underlineStyle={styles.inputUnderline}
          />
        </View>

        <CustomText subtitle style={styles.textSpace}>
          Describe what you need
        </CustomText>
        <View style={styles.usersContent}>
          <TextInput
            label="Description"
            placeholder="Enter your Description"
            onChangeText={setDescription}
            defaultValue={description}
            multiline
            style={styles.inputStyle}
            contentStyle={[styles.inputContentStyle, styles.inputSpace]}
            underlineStyle={styles.inputUnderline}
          />
        </View>
        <View style={styles.dateContainer}>
          <CustomText subtitle style={styles.textSpace}>
            Select Date
          </CustomText>

          <DateTimePicker
            testID="dateTimePicker"
            value={paymentDate}
            onChange={onChange}
            style={styles.pickerStyle}
            minimumDate={new Date()}
            collapsable
            negativeButton={{label: 'Cancel', textColor: 'red'}}
          />
        </View>
        <CustomText subtitle style={styles.itemStyle}>
          Select Payers Name
        </CustomText>
        <View style={styles.usersContent}>
          {!!userHouse &&
            userHouse.users &&
            userHouse.users.map((item, index) => {
              const isSelected = selectedPayers.some(
                selectPayer => selectPayer === item.id,
              );
              return (
                <Pressable
                  key={index}
                  onPress={() => onSelectedPayers(item.id)}
                  style={[
                    styles.itemStyle,
                    {
                      backgroundColor: !isSelected
                        ? COLORS.smoke_white
                        : COLORS.melrose,
                    },
                  ]}>
                  <CustomText subtitle2>
                    {item.firstName} {item.lastName}
                  </CustomText>
                </Pressable>
              );
            })}
        </View>
      </View>

      <Button
        mode="contained"
        onPress={onAssignPayment}
        style={{marginBottom: 32}}
        disabled={
          !amountPayment.length ||
          !selectedPayers.length ||
          !!description.length
        }>
        Assign Payment
      </Button>
    </ScrollView>
  );
};
