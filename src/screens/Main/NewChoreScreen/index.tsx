import React, {useState} from 'react';
import {Pressable, ScrollView, View} from 'react-native';

import moment from 'moment';

import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';

import {CustomText} from '../../../shared/ui';

import {COLORS} from '../../../shared/colors';
import {ActivityIndicator, Button} from 'react-native-paper';
import {
  ChoresNavigation,
  ChoresParams,
} from '../../../navigation/chores-stack/interface';
import {styles} from './style';
import {useGetUserChores} from '../../../shared/hooks/react-query/queries';
import {RouteProp} from '@react-navigation/native';

import {ChoresParamsList} from '../../../navigation/chores-stack/interface';
import {useAssignChore} from '../../../shared/hooks/react-query/mutation/useAssignChore';
import {usePersistedStore} from '../../../services/Store/store';

interface NewChoreScreenProps {
  navigation: ChoresNavigation;
  route: RouteProp<ChoresParamsList, ChoresParams.NewChore>;
}

export const NewChoreScreen: React.FC<NewChoreScreenProps> = ({
  navigation,
  route,
}) => {
  const {houseId} = route.params;

  const {userHouse} = usePersistedStore();
  console.log(houseId, '---userId');
  const [selectUser, setSelectedUser] = useState('');
  const [selectedChore, setSelectedChore] = useState('');

  const {mutate: assignChore, isLoading: assignChoreLoading} = useAssignChore();

  const {data: userChores, isLoading: userChoresLoading} =
    useGetUserChores(houseId);

  console.log(userChores, '---userChores');

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
    console.log(choreDate, '---choreDate');
    assignChore({
      houseId: houseId,
      payload: {choreId: selectedChore, userId: selectUser, dueDate: choreDate},
    });
  };

  const onAddNewChoreCategory = () =>
    navigation.navigate(ChoresParams.NewCategory);

  if (userChoresLoading) {
    return (
      <ActivityIndicator color={COLORS.primary} style={styles.viewCenter} />
    );
  }

  if (!userChores) {
    return null;
  }

  console.log(userHouse, '---userHouse');
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.contentContainer}>
        <CustomText subtitle style={styles.textSpace}>
          Select chore to assign for the user
        </CustomText>

        <View style={styles.usersContent}>
          {userHouse &&
            userHouse.users &&
            userHouse?.users.map(item => {
              const isSelected = item.id === selectUser;
              return (
                <Pressable
                  key={item.id}
                  onPress={() => onSelectedItemsChange(item.id)}
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

        <CustomText subtitle style={styles.itemStyle}>
          Select user to assign chore for him
        </CustomText>

        <View style={styles.usersContent}>
          {userHouse.chores.map(item => {
            const isSelected = item.id === selectedChore;
            return (
              <Pressable
                key={item.id}
                onPress={() => onSelectedChoreType(item.id)}
                style={[
                  styles.itemStyle,
                  {
                    backgroundColor: !isSelected
                      ? COLORS.smoke_white
                      : COLORS.melrose,
                  },
                ]}>
                <CustomText subtitle2>{item.title}</CustomText>
              </Pressable>
            );
          })}

          <Pressable style={{}} onPress={onAddNewChoreCategory}>
            <CustomText textDefault style={{color: COLORS.primary}}>
              Add new chore
            </CustomText>
          </Pressable>
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
        loading={assignChoreLoading}
        disabled={!selectUser.length || !selectedChore.length}>
        Assign chore
      </Button>
    </ScrollView>
  );
};
