import React, { useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, View } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import { styles } from './style';
import { CustomText } from '../../../shared/ui';
import { Button, TextInput } from 'react-native-paper';
import { useStore } from '../../../services/Store/store';

interface UserInfoScreenProps { }

export const UserInfoScreen: React.FC<UserInfoScreenProps> = ({ navigation }) => {
  const onGoBack = () => navigation.goBack();

  const { setUserInfo } = useStore(state => state);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onGoToUserCredentials = () => {
    setUserInfo({ first_name: firstName, last_name: lastName });
    navigation.navigate('UserCredentials');
  };

  const isValidInputs = firstName.length > 3 && lastName.length > 3;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ flex: 1, padding: 24 }}>
        <View style={{ marginBottom: 32 }}>
          <CustomText h1 style={{ paddingBottom: 12 }}>
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
        disabled={!isValidInputs}
        style={{ marginVertical: 32, marginHorizontal: 16 }}
        contentStyle={{}}>
        Next
      </Button>
    </SafeAreaView>
  );
};
