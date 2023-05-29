import React, {useEffect} from 'react';

import {styles} from './style';
import {
  ActivityIndicator,
  ListRenderItem,
  SafeAreaView,
  SectionList,
  View,
} from 'react-native';
import {CustomText} from '../../../shared/ui';
import {Button} from 'react-native-paper';
import {
  ChoresNavigation,
  ChoresParams,
} from '../../../navigation/chores-stack/interface';
import {
  useGetUserChores,
  useGetUserSession,
} from '../../../shared/hooks/react-query/queries';
import _ from 'lodash';
import {COLORS} from '../../../shared/colors';
import {ChoreAssignment} from '../../../services/ApiService/chores/types';
import {getSectionList} from '../../../shared/utils';

interface ChoresScreenProps {
  navigation: ChoresNavigation;
}

export const ChoresScreen: React.FC<ChoresScreenProps> = ({navigation}) => {
  const onAssignNewChore = () => navigation.navigate(ChoresParams.NewChore);
  const {data, isLoading: sessionLoading} = useGetUserSession();
  const {data: chores, isLoading: choresLoading} = useGetUserChores(
    data?.user.houseId || '',
  );

  useEffect(() => {
    console.log('first', data);
  }, [data]);

  if (sessionLoading || choresLoading) {
    return (
      <ActivityIndicator color={COLORS.primary} style={styles.viewCenter} />
    );
  }

  if (!chores) {
    return (
      <View style={styles.viewCenter}>
        <CustomText subtitle>Something went wrong</CustomText>
      </View>
    );
  }

  const choresList = getSectionList(chores);

  const renderItem: ListRenderItem<ChoreAssignment> = ({item}) => {
    const isCompleted = item.status === 'Completed';
    return (
      <View style={styles.renderItemContent}>
        <View>
          <CustomText textArticle>{item.Chore.type}</CustomText>
          <View style={styles.userInfoContent}>
            <CustomText textArticle>{item.User.firstName} </CustomText>
            <CustomText textArticle>{item.User.lastName}</CustomText>
          </View>

          <CustomText textArticle>{item.Chore.description}</CustomText>
        </View>

        <CustomText
          textArticle
          style={{color: isCompleted ? COLORS.green : COLORS.dark_red}}>
          {item.status}
        </CustomText>
      </View>
    );
  };

  const listHeaderComponent = () => {
    return (
      <View>
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

        <CustomText subtitle style={styles.textSpace}>
          Other's chores
        </CustomText>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={choresList}
        stickySectionHeadersEnabled={false}
        contentContainerStyle={styles.sectionListContentContainer}
        ListHeaderComponent={listHeaderComponent}
        renderItem={renderItem}
        initialNumToRender={20}
        onEndReachedThreshold={0.6}
        keyboardShouldPersistTaps="handled"
        keyExtractor={item => `${item.id}-/${item.id}`}
        renderSectionHeader={({section: {title}}) => {
          return (
            <CustomText subtitle2 style={styles.textSpace}>
              {title}
            </CustomText>
          );
        }}
      />
    </SafeAreaView>
  );
};
