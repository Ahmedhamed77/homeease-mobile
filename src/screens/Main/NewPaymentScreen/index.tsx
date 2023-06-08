import React, {useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Platform,
  Pressable,
  ScrollView,
  View,
} from 'react-native';
import {styles} from './style';
import {COLORS} from '../../../shared/colors';
import {CustomText} from '../../../shared/ui';
import {Button, Switch, TextInput} from 'react-native-paper';

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
import {useAddPayment} from '../../../shared/hooks/react-query/mutation/useAddPayment';
import {AddPaymentPayload} from '../../../services/ApiService/payment/types';
import {Status} from '../../../shared/types';

export type Payers = {
  name: string;
  id: string;
  amount: string;
  status: Status;
  payerId: string;
  description: string;
  recipientId: string;
  createdAt: Date;
};
interface NewPaymentScreenType {
  navigation: PaymentNavigation;
  route: RouteProp<PaymentParamsList, PaymentParams.NewPayment>;
}

export const NewPaymentScreen: React.FC<NewPaymentScreenType> = ({
  navigation,
  route,
}) => {
  const [amountPayment, setAmountPayment] = useState('');

  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  const {userHouse, userSession} = usePersistedStore(state => state);

  const {mutate, isLoading} = useAddPayment();

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

  const [payers, setPayers] = useState<Payers[]>([]);

  const handlePayerAmountChange = (index: number, payerAmount: string) => {
    const updatedPayers = [...payers];
    updatedPayers[index].amount = payerAmount;
    setPayers(updatedPayers);
  };

  const renderPayers = () => {
    console.log(payers.length, '---payers');
    return payers.map((payer, index) => (
      <React.Fragment key={payer.id}>
        {!!payer.id && (
          <View key={payer.id}>
            <CustomText>{payer.name}</CustomText>
            <TextInput
              value={payer.amount}
              onChangeText={payerAmount =>
                handlePayerAmountChange(index, payerAmount)
              }
              placeholder="0"
              keyboardType={'numeric'}
              style={styles.inputStyle}
              contentStyle={[styles.inputContentStyle, styles.inputSpace]}
              underlineStyle={styles.inputUnderline}
            />
          </View>
        )}
      </React.Fragment>
    ));
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

  const handlePayment = () => {
    if (isSwitchOn) {
      const totalPayersAmount = payers.reduce(
        (total, payer) => total + Number(payer.amount),
        0,
      );
      if (totalPayersAmount !== Number(amountPayment)) {
        Alert.alert(
          'Error',
          'The total amount assigned to payers should be equal to the payment amount.',
        );
        return false;
      }
    }

    // Handle payment logic here
    // You can navigate to the success screen or send the payment details to an API, etc.
    console.log('Payment:', {amountPayment, description, payers});
    return true;
  };

  const onAssignPayment = () => {
    const isHandlePayment = handlePayment();

    const payersPayload: AddPaymentPayload[] = payers.map(payer => {
      return {
        amount: +payer.amount,
        payerId: payer.payerId,
        recipientId: payer.recipientId,
        description: payer.description,
        createdAt: payer.createdAt,
        status: payer.status,
      };
    });

    console.log(payersPayload, '----payersPayload');
    console.log(isHandlePayment, '---isHandlePayment');
    if (isHandlePayment) {
      mutate({houseId: userHouse.id, payload: payersPayload});
      setPayers([]);
    }
    // api here
  };

  const isValid =
    !!description.length && !!payers.length && !!amountPayment.length;

  console.log(isValid, '--');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.contentContainer}>
        {!isSwitchOn && (
          <>
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
          </>
        )}

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
            userHouse.users.map(item => {
              const isSelected = selectedPayers.some(
                selectPayer => selectPayer === item.id,
              );
              return (
                <Pressable
                  key={item.id}
                  onPress={() => {
                    onSelectedPayers(item.id);
                    setPayers(prev => [
                      ...prev,

                      {
                        name: `${item.firstName} ${item.lastName}`,
                        amount: amountPayment,
                        id: item.id,
                        payerId: item.id,
                        recipientId: userSession.user.id,
                        description: description,
                        createdAt: new Date(),
                        status: Status.Pending,
                      },
                    ]);
                  }}
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

      <View style={{marginBottom: 32}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: 12,
          }}>
          <CustomText textArticle>Separate payment</CustomText>
          <Switch value={isSwitchOn} onChange={onToggleSwitch} />
        </View>
        {selectedPayers.length > 0 && isSwitchOn && renderPayers()}
        {isSwitchOn && <CustomText>Total: {amountPayment || 0}</CustomText>}
      </View>

      <Button
        mode="contained"
        onPress={onAssignPayment}
        style={{marginBottom: 32}}
        disabled={!isValid}
        loading={isLoading}>
        Assign Payment
      </Button>
    </ScrollView>
  );
};
