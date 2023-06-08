import React from 'react';

import {styles} from './style';
import {ActivityIndicator, SafeAreaView, ScrollView, View} from 'react-native';
import {CustomText} from '../../../shared/ui';
import {Button} from 'react-native-paper';
import {usePersistedStore} from '../../../services/Store/store';
import {useGetUserInfo} from '../../../shared/hooks/react-query/queries';
import {COLORS} from '../../../shared/colors';

interface ProfileScreenType {}

export const ProfileScreen: React.FC<ProfileScreenType> = () => {
  const {setHasLoginToken, setUserHouse, setUserSession} = usePersistedStore(
    store => store,
  );

  const {userSession, userHouse} = usePersistedStore(state => state);

  const onLogout = () => {
    // @ts-ignore
    setUserHouse({});
    // @ts-ignore
    setUserSession({});
    setHasLoginToken(false);
  };

  const {data: userInfo, isLoading: userInfoLoading} = useGetUserInfo(
    userSession.user.id,
  );

  if (userInfoLoading) {
    return (
      <ActivityIndicator
        color={COLORS.primary}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
      />
    );
  }

  if (!userInfo) {
    return null;
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.container}>
        {!!userInfo && (
          <View
            style={{
              marginBottom: 32,
              backgroundColor: '#ffff',
              borderRadius: 20,
              padding: 12,
            }}>
            <CustomText textArticle>Name</CustomText>
            <CustomText subtitle2>
              {userInfo.firstName} {userInfo.lastName}
            </CustomText>

            <CustomText textArticle>Email</CustomText>
            <CustomText subtitle2>{userInfo.email}</CustomText>

            <CustomText textArticle>Password</CustomText>
            <CustomText subtitle2>********</CustomText>
          </View>
        )}

        {userHouse && (
          <View
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 20,
              marginBottom: 12,
              padding: 12,
            }}>
            <CustomText subtitle2>HouseName</CustomText>
            <CustomText textDefault style={{paddingBottom: 8}}>
              {userHouse?.name}
            </CustomText>

            <CustomText subtitle2>InvitationCode</CustomText>
            <CustomText textDefault style={{paddingBottom: 8}}>
              {userHouse?.invitationCode}
            </CustomText>

            <CustomText h2 style={{paddingBottom: 8}}>
              Members
            </CustomText>
            <View>
              {!!userHouse.users &&
                userHouse.users.map(item => {
                  return (
                    <View
                      key={item.id}
                      style={{flexDirection: 'row', marginBottom: 12}}>
                      <View
                        style={{
                          backgroundColor: 'red',
                          borderRadius: 50,
                          flexDirection: 'row',
                          width: 35,
                          height: 35,
                          justifyContent: 'center',
                          alignItems: 'center',
                          marginRight: 12,
                        }}>
                        <CustomText>{item.firstName.charAt(0)}</CustomText>
                        <CustomText>{item.firstName.charAt(1)}</CustomText>
                      </View>
                      <View>
                        <CustomText subtitle2>Name</CustomText>
                        <CustomText textDefault>
                          {item?.firstName} {item?.lastName}
                        </CustomText>
                      </View>
                    </View>
                  );
                })}
            </View>
            <Button textColor="red">Leave house</Button>
          </View>
        )}

        <Button mode="contained" onPress={onLogout}>
          Logout
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};
