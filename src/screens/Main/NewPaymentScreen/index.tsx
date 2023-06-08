import React, {useState} from 'react';
import {
  ActivityIndicator,
  Platform,
  Pressable,
  ScrollView,
  View,
} from 'react-native';
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
import {RouteProp} from '@react-navigation/native';
import {usePersistedStore} from '../../../services/Store/store';

interface NewPaymentScreenType {
  navigation: PaymentNavigation;
  route: RouteProp<PaymentParamsList, PaymentParams.NewPayment>;
}

export const NewPaymentScreen: React.FC<NewPaymentScreenType> = ({
  navigation,
  route,
}) => {
  const [amountPayment, setAmountPayment] = useState('');

  const {userHouse} = usePersistedStore(state => state);

  const [showPicker, setShowPicker] = useState(false);

  const [description, setDescription] = useState('');
  const [selectedPayers, setSelectedPayers] = useState<string[]>([]);
  const sourceDate = new Date();
  const [paymentDate, setPaymentDate] = useState(sourceDate);

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    if (event.type === 'neutralButtonPressed') {
      setPaymentDate(new Date(0));

      setShowPicker(false);
    } else {
      selectedDate && setPaymentDate(selectedDate);
      setShowPicker(false);
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

          {Platform.OS === 'android' ? (
            <View>
              <Pressable
                onPress={() => setShowPicker(true)}
                style={styles.pickerTextContainer}>
                <CustomText textDefault style={{textAlign: 'center'}}>
                  {moment(paymentDate).format('YYYY-MM-DD')}
                </CustomText>
              </Pressable>

              {showPicker && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={paymentDate}
                  onChange={onChange}
                  style={styles.pickerStyle}
                  minimumDate={new Date()}
                  collapsable
                  negativeButton={{label: 'Cancel', textColor: 'red'}}
                />
              )}
            </View>
          ) : (
            <DateTimePicker
              testID="dateTimePicker"
              value={paymentDate}
              onChange={onChange}
              style={styles.pickerStyle}
              minimumDate={new Date()}
              collapsable
              negativeButton={{label: 'Cancel', textColor: 'red'}}
            />
          )}
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
