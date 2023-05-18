import React, {useState} from 'react';
import {Pressable, SafeAreaView, ScrollView, View} from 'react-native';

import {AntDesign} from '@expo/vector-icons';

import {styles} from './style';
import {CustomText} from '../../../shared/ui';
import {Button, TextInput} from 'react-native-paper';

interface UserInfoScreenProps {}

export const UserInfoScreen: React.FC<UserInfoScreenProps> = ({navigation}) => {
  const onGoBack = () => navigation.goBack();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onGoToUserCredentials = () => navigation.navigate('UserCredentials');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flex: 1, paddingHorizontal: 24}}>
        <Pressable onPress={onGoBack} style={{marginBottom: 32}}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </Pressable>
        <View style={{marginBottom: 32}}>
          <CustomText h1 style={{paddingBottom: 12}}>
            Welcome!
          </CustomText>
          <CustomText textDefault>
            Think about a name it that will be displayed on the profile, you can
            use letters, numbers and a hyphen with a space
          </CustomText>
        </View>

        <TextInput
          label="First name"
          placeholder="Enter your first name"
          style={{
            backgroundColor: 'transparent',
          }}
          contentStyle={{
            borderRadius: 16,
            borderColor: '#ABABAB',
            borderWidth: 1,
            marginBottom: 12,
          }}
          underlineStyle={{
            backgroundColor: 'transparent',
          }}
          defaultValue={firstName}
          onChangeText={setFirstName}
          maxLength={20}
        />

        <TextInput
          label="Last name"
          placeholder="Enter your Last name"
          style={{
            backgroundColor: 'transparent',
          }}
          contentStyle={{
            borderRadius: 16,
            borderColor: '#ABABAB',
            borderWidth: 1,
          }}
          underlineStyle={{
            backgroundColor: 'transparent',
          }}
          defaultValue={lastName}
          onChangeText={setLastName}
          maxLength={20}
        />
      </ScrollView>

      <Button
        mode="contained"
        onPress={onGoToUserCredentials}
        // disabled={!isValidInputs}
        style={{marginVertical: 32, marginHorizontal: 16}}
        contentStyle={{}}>
        Next
      </Button>
    </SafeAreaView>
  );
};
