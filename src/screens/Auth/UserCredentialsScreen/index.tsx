import React, {useState} from 'react';
import {Pressable, SafeAreaView, ScrollView, View} from 'react-native';

import {CustomText} from '../../../shared/ui';
import {Button, TextInput} from 'react-native-paper';
import {AntDesign} from '@expo/vector-icons';
import {RootNavigation} from '../../../navigation/router/interface';
import {AuthParams} from '../../../navigation/auth-stack/interface';
import {styles} from './style';

interface UserCredentialsScreenProps {
  navigation: RootNavigation;
}

export const UserCredentialsScreen: React.FC<UserCredentialsScreenProps> = ({
  navigation,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onGoBack = () => navigation.goBack();

  const onGoToLogin = () => navigation.navigate(AuthParams.Login);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flexGrow: 1, paddingHorizontal: 24}}>
        <Pressable onPress={onGoBack} style={{marginBottom: 24}}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </Pressable>
        <View style={{marginBottom: 18}}>
          <CustomText h2 style={{paddingBottom: 12}}>
            Enter email and password
          </CustomText>

          <CustomText textDefault>
            Enter your email and your password strong password should contain
            some symbols
          </CustomText>
        </View>

        <TextInput
          label="Email"
          placeholder="Enter your Email"
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
          defaultValue={email}
          onChangeText={setEmail}
        />

        <TextInput
          label="Password"
          placeholder="Enter your Password"
          style={{
            backgroundColor: 'transparent',
          }}
          contentStyle={{
            borderRadius: 16,
            borderColor: '#ABABAB',
            borderWidth: 1,
          }}
          secureTextEntry
          underlineStyle={{
            backgroundColor: 'transparent',
          }}
          defaultValue={password}
          onChangeText={setPassword}
          maxLength={20}
        />
      </ScrollView>

      <Button
        mode="contained"
        onPress={onGoToLogin}
        // disabled={!isValidInputs}
        style={{marginVertical: 32, marginHorizontal: 16}}
        contentStyle={{}}>
        Next
      </Button>
    </SafeAreaView>
  );
};
