import React from 'react';
import {View, SafeAreaView, ScrollView, ActivityIndicator} from 'react-native';
import {Button} from 'react-native-paper';

import {CustomText} from '../../../shared/ui';
import {
  MainNavigation,
  MainParams,
} from '../../../navigation/main-stack/interface';
import {styles} from './style';
import _ from 'lodash';
import {usePersistedStore} from '../../../services/Store/store';
import {useGetHouse} from '../../../shared/hooks/react-query/queries/useGetHouse';
import {COLORS} from '../../../shared/colors';
interface HomeScreenProps {
  navigation: MainNavigation;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const onJoinHouse = () => navigation.navigate(MainParams.JoinHouse);

  const {userSession} = usePersistedStore(state => state);

  const {data: house, isLoading} = useGetHouse(userSession.user.houseId);

  // console.log(userHouse, '-- user house');

  const hasHouseId = !!house?.id;
  // console.log(userSession, '---user session');

  if (isLoading) {
    return (
      <ActivityIndicator
        color={COLORS.primary}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {hasHouseId ? (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <CustomText textArticle style={styles.joinTextStyle}>
              Welcome to our house
            </CustomText>
          </View>
        ) : (
          <View style={styles.viewContent}>
            <CustomText textArticle style={styles.joinTextStyle}>
              you haven't joined any house, join a house to create and assign
              tasks
            </CustomText>

            <Button mode="contained" onPress={onJoinHouse}>
              Join house
            </Button>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
