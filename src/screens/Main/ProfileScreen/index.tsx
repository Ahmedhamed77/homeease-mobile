import React from 'react';

import {styles} from './style';
import {SafeAreaView, View} from 'react-native';
import {CustomText} from '../../../shared/ui';
import {Button} from 'react-native-paper';
import {usePersistedStore} from '../../../services/Store/store';

interface ProfileScreenType {}

export const ProfileScreen: React.FC<ProfileScreenType> = () => {
  const {setHasLoginToken} = usePersistedStore(state => state);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={{marginBottom: 32}}>
          <CustomText h2>user name</CustomText>
          <CustomText>here will be some info about user</CustomText>
        </View>

        <Button mode="contained" onPress={() => {setHasLoginToken(false)}}> Logout</Button>
      </View>
    </SafeAreaView>
  );
};
