import React, { useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { styles } from './style';
import { COLORS } from '../../../shared/colors';
import { CustomText } from '../../../shared/ui';
import { Button, TextInput } from 'react-native-paper';

import moment from 'moment';

import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';

import { PaymentNavigation } from '../../../navigation/payment-stack/interface';

const payers = ['Omar Daleen', 'Ahmed Aasi', 'Mohammad Daleen', 'Ahmed Salahi'];
interface NewPaymentScreenType {
  navigation: PaymentNavigation;
}

export const NewPaymentScreen: React.FC<NewPaymentScreenType> = ({
  navigation,
}) => {
  const [amountPayment, setAmountPayment] = useState('');

  const [description, setDescription] = useState('');
  const [selectedPayers, setSelectedPayers] = useState<string[]>([]);
  const sourceMoment = moment.unix(1636797600);
  const sourceDate = sourceMoment.local().toDate();
  const [paymentDate, setPaymentDate] = useState(sourceDate);

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
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.contentContainer}>
        <CustomText subtitle style={styles.textSpace}>
          Add Payment
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

        <CustomText subtitle>Describe What You Want</CustomText>
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
            negativeButton={{ label: 'Cancel', textColor: 'red' }}
          />
        </View>
        <CustomText subtitle style={styles.itemStyle}>
          Select Payers Name
        </CustomText>
        <View style={styles.usersContent}>
          {payers.map((item, index) => {
            const isSelected = selectedPayers.some(
              selectPayer => selectPayer === item,
            );
            return (
              <Pressable
                key={index}
                onPress={() => onSelectedPayers(item)}
                style={[
                  styles.itemStyle,
                  {
                    backgroundColor: !isSelected
                      ? COLORS.smoke_white
                      : COLORS.melrose,
                  },
                ]}>
                <CustomText subtitle2>{item}</CustomText>
              </Pressable>
            );
          })}
        </View>
      </View>

      <Button
        mode="contained"
        onPress={onAssignPayment}
        style={{ marginBottom: 32 }}
        disabled={!amountPayment.length || !selectedPayers.length}>
        Assign Payment
      </Button>
    </ScrollView>
  );
};
