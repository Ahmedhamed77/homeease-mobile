import React, {useState} from 'react';
import {Pressable, ScrollView, View} from 'react-native';

import moment from 'moment';

import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';

import {CustomText} from '../../../shared/ui';

import {COLORS} from '../../../shared/colors';
import {Button} from 'react-native-paper';
import {ChoresNavigation} from '../../../navigation/chores-stack/interface';
import {styles} from './style';

const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];

interface NewChoreScreenProps {
  navigation: ChoresNavigation;
}

export const NewChoreScreen: React.FC<NewChoreScreenProps> = ({navigation}) => {
  const [selectUser, setSelectedUser] = useState('');
  const [selectedChore, setSelectedChore] = useState('');

  const sourceMoment = moment.unix(1636797600);
  const sourceDate = sourceMoment.local().toDate();
  const [choreDate, setChoreDate] = useState(sourceDate);

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    if (event.type === 'neutralButtonPressed') {
      setChoreDate(new Date(0));
    } else {
      selectedDate && setChoreDate(selectedDate);
    }
  };

  const onSelectedItemsChange = (selectedItem: string) =>
    setSelectedUser(selectedItem);

  const onSelectedChoreType = (selectedItem: string) =>
    setSelectedChore(selectedItem);

  const onAssignChore = () => {
    // api here
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.contentContainer}>
        <CustomText subtitle style={styles.textSpace}>
          Select chore to assign for the user
        </CustomText>

        <View style={styles.usersContent}>
          {countries.map((item, index) => {
            const isSelected = item === selectUser;
            return (
              <Pressable
                key={index}
                onPress={() => onSelectedItemsChange(item)}
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

        <CustomText subtitle style={styles.itemStyle}>
          Select user to assign chore for him
        </CustomText>

        <View style={styles.usersContent}>
          {countries.map((item, index) => {
            const isSelected = item === selectedChore;
            return (
              <Pressable
                key={index}
                onPress={() => onSelectedChoreType(item)}
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

        <View style={styles.dateContainer}>
          <CustomText subtitle style={styles.textSpace}>
            Select Date
          </CustomText>

          <DateTimePicker
            testID="dateTimePicker"
            value={choreDate}
            onChange={onChange}
            style={styles.pickerStyle}
            minimumDate={new Date()}
            collapsable
            negativeButton={{label: 'Cancel', textColor: 'red'}}
          />
        </View>
      </View>

      <Button
        mode="contained"
        onPress={onAssignChore}
        style={{marginBottom: 32}}
        disabled={!selectUser.length || !selectedChore.length}>
        Assign chore
      </Button>
    </ScrollView>
  );
};
