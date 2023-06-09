import React from 'react';

import { styles } from './style';
import { Ionicons } from '@expo/vector-icons';
import {
  ActivityIndicator,
  ListRenderItem,
  RefreshControl,
  SafeAreaView,
  SectionList,
  View,
} from 'react-native';
import { CustomText } from '../../../shared/ui';
import { Button } from 'react-native-paper';
import {
  ChoresNavigation,
  ChoresParams,
} from '../../../navigation/chores-stack/interface';
import { useGetUserChores } from '../../../shared/hooks/react-query/queries';
import _ from 'lodash';
import { COLORS } from '../../../shared/colors';
import { ChoreAssignment } from '../../../services/ApiService/chores/types';
import { getSectionList } from '../../../shared/utils';
import { usePersistedStore } from '../../../services/Store/store';
import { ScrollView } from 'react-native-gesture-handler';
import { useUpdateChore } from '../../../shared/hooks/react-query/mutation/useUpdateChore';
import { Status } from '../../../shared/types';

interface ChoresScreenProps {
  navigation: ChoresNavigation;
}

export const ChoresScreen: React.FC<ChoresScreenProps> = ({ navigation }) => {
  const { userSession } = usePersistedStore(state => state);
  const { data: chores, isLoading: choresLoading, refresh, isRefetching } = useGetUserChores(
    userSession.user.houseId,
  );
  const { mutate } = useUpdateChore()
  const myChoresList = chores ? getSectionList(chores)
    .filter(day => day.data.some(chore => chore.User.id === userSession.user.id))
    .map(day => ({ title: day.title, data: day.data.filter(chore => chore.userId === userSession.user.id) })) : [];
  const othersChoresList = chores ? getSectionList(chores)
    .filter(day => day.data.some(chore => chore.User.id !== userSession.user.id))
    .map(day => ({ title: day.title, data: day.data.filter(chore => chore.userId !== userSession.user.id) })) : [];

  const onAssignNewChore = () =>
    navigation.navigate(ChoresParams.NewChore, {
      houseId: userSession.user.houseId,
    });

  const onMarkAsComplete = (choreId: string) => {
    mutate({ houseId: userSession.user.houseId, assignmentId: choreId, payload: { status: Status.Completed } })
  };

  const renderItem: ListRenderItem<ChoreAssignment> = ({ item }) => {
    const isCompleted = item.status === 'Completed';
    const isMine = item.User.id === userSession.user.id;

    return (
      <View style={styles.renderItemContent}>
        <View style={{ width: 200 }}>
          <CustomText textArticle>{item.Chore?.title}</CustomText>
          <View style={styles.userInfoContent}>
            <CustomText textArticle>{item.User?.firstName} </CustomText>
            <CustomText textArticle>{item.User?.lastName}</CustomText>
          </View>

          <CustomText textArticle>{item.Chore?.description}</CustomText>
        </View>

        <View style={{}}>
          {isMine && item.status === "Pending" ? (
            <Button onPress={() => onMarkAsComplete(item.id)}>
              <Ionicons name="checkmark-done" size={24} color={COLORS.aqua} />
            </Button>
          ) : (
            <CustomText
              textArticle
              style={{ color: isCompleted ? COLORS.green : COLORS.dark_red }}>
              {item.status}
            </CustomText>
          )}
        </View>
      </View>
    );
  };

  const listHeaderComponentMine = () => {
    return (
      <View style={{ marginTop: 32 }}>
        {!!myChoresList && (
          <CustomText subtitle style={styles.textSpace}>
            My Chores
          </CustomText>
        )}
      </View>
    );
  };

  const listHeaderComponentOther = () => {
    return (
      <View style={{ marginTop: 32 }}>
        {!!othersChoresList && (
          <CustomText subtitle style={styles.textSpace}>
            Other's chores
          </CustomText>
        )}
      </View>
    );
  };

  if (choresLoading) {
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


  return (
    <SafeAreaView >
      <ScrollView style={{ marginTop: 16, paddingHorizontal: 16 }} refreshControl={
        <RefreshControl refreshing={isRefetching} onRefresh={refresh} />
      }>
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
        <SectionList
          sections={myChoresList}
          ListHeaderComponent={listHeaderComponentMine}
          renderItem={renderItem}
          onEndReachedThreshold={0.6}
          onRefresh={refresh}
          refreshing={isRefetching}
          keyboardShouldPersistTaps="handled"
          keyExtractor={item => `${item.id}-/${item.id}`}
          renderSectionHeader={({ section: { title } }) => {
            return (
              <CustomText subtitle2 style={styles.textSpace}>
                {title}
              </CustomText>
            );
          }}
        />
        <SectionList
          sections={othersChoresList}
          stickySectionHeadersEnabled={false}
          ListHeaderComponent={listHeaderComponentOther}
          renderItem={renderItem}
          onRefresh={refresh}
          refreshing={isRefetching}
          onEndReachedThreshold={0.6}
          keyboardShouldPersistTaps="handled"
          keyExtractor={item => `${item.id}-/${item.id}`}
          renderSectionHeader={({ section: { title } }) => {
            return (
              <CustomText subtitle2 style={styles.textSpace}>
                {title}
              </CustomText>
            );
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
