import React, {useState} from 'react';

import {styles} from './style';
import {Pressable, SafeAreaView, ScrollView, View} from 'react-native';
import {CustomText} from '../../../shared/ui';
import {AntDesign} from '@expo/vector-icons';
import {Button, TextInput} from 'react-native-paper';
import {MainNavigation} from '../../../navigation/main-stack/interface';
import {useCreateHouse} from '../../../shared/hooks/react-query/mutation/useCreateHouse';
import {useJoinHouse} from '../../../shared/hooks/react-query/mutation/useJoinHouse';

interface JoinHouseScreenType {
  navigation: MainNavigation;
}

export const JoinHouseScreen: React.FC<JoinHouseScreenType> = ({
  navigation,
}) => {
  const {mutate: createHouse, isLoading} = useCreateHouse();

  const {mutate: joinHouse} = useJoinHouse();
  const [houseName, setHouseName] = useState('');
  const [invitationCode, setInvitationCode] = useState('');

  const onGoBack = () => navigation.goBack();

  const onCreateHouse = () => {
    createHouse({name: houseName});
  };

  const onJoinHouse = () => {
    joinHouse({invitationCode: invitationCode});
  };

  const isHouseNameHas3Chars = houseName.length >= 3;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Pressable style={styles.arrowContainer} onPress={onGoBack}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </Pressable>
        <View style={styles.viewContent}>
          <CustomText subtitle style={styles.textSpace}>
            You can join house or create house
          </CustomText>

          <CustomText subtitle2 style={styles.textSpace}>
            Create house
          </CustomText>

          <TextInput
            label="House"
            placeholder="Enter your house title"
            style={styles.inputStyle}
            contentStyle={[styles.inputContentStyle, styles.inputSpace]}
            underlineStyle={styles.inputUnderlineStyle}
            defaultValue={houseName}
            onChangeText={setHouseName}
            maxLength={20}
          />

          <Button
            mode="contained"
            loading={isLoading}
            disabled={!isHouseNameHas3Chars}
            onPress={onCreateHouse}
            style={styles.inputSpace}>
            Create
          </Button>

          <CustomText subtitle2 style={styles.joinTextStyle}>
            or Join House
          </CustomText>

          <TextInput
            label="Code"
            placeholder="Enter your invitation code"
            style={styles.inputStyle}
            contentStyle={[styles.inputContentStyle, styles.inputSpace]}
            underlineStyle={styles.inputUnderlineStyle}
            defaultValue={invitationCode}
            onChangeText={setInvitationCode}
            maxLength={20}
          />
          <Button
            mode="contained"
            disabled={!invitationCode.length}
            onPress={onJoinHouse}>
            Join house
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
