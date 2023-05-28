import React from 'react';

import {styles} from './style';
import {SafeAreaView, View} from 'react-native';
import {CustomText} from '../../../shared/ui';
import {Button} from 'react-native-paper';
import {usePersistedStore} from '../../../services/Store/store';

interface ProfileScreenType {}

export const ProfileScreen: React.FC<ProfileScreenType> = () => {
  const {setHasLoginToken} = usePersistedStore(store => store);
  const onLogout = () => setHasLoginToken(false);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={{marginBottom: 32}}>
          <CustomText h2>user name</CustomText>
          <CustomText>here will be some info about user</CustomText>
        </View>

        <Button mode="contained" onPress={onLogout}>
          Logout
        </Button>
      </View>
    </SafeAreaView>
  );
};
