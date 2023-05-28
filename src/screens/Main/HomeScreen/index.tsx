import React from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import {Button} from 'react-native-paper';

import {CustomText} from '../../../shared/ui';
import {
  MainNavigation,
  MainParams,
} from '../../../navigation/main-stack/interface';
import {styles} from './style';
import CookieManager from '@react-native-cookies/cookies';

interface HomeScreenProps {
  navigation: MainNavigation;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const onJoinHouse = () => navigation.navigate(MainParams.JoinHouse);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.viewContent}>
          <CustomText textArticle style={styles.joinTextStyle}>
            you haven't joined any house, join a house to create and assign
            tasks
          </CustomText>

          <Button mode="contained" onPress={onJoinHouse}>
            Join house
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
