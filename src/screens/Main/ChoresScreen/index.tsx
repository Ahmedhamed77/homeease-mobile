import React from 'react';

import {styles} from './style';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {CustomText} from '../../../shared/ui';
import {Button} from 'react-native-paper';
import {
  ChoresNavigation,
  ChoresParams,
} from '../../../navigation/chores-stack/interface';

interface ChoresScreenProps {
  navigation: ChoresNavigation;
}

export const ChoresScreen: React.FC<ChoresScreenProps> = ({navigation}) => {
  const onAssignNewChore = () => navigation.navigate(ChoresParams.NewChore);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.choresHeaderContent}>
          <CustomText textArticle>
            chore is a duty for all of us in house
          </CustomText>
          <CustomText textArticle>
            we help each other to get a clean house
          </CustomText>
          <CustomText textArticle style={styles.textSpace}>
            create and assign chore for all member in house
          </CustomText>
          <Button mode="contained" onPress={onAssignNewChore}>
            Assign new chore
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
