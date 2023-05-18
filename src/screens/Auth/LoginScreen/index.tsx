import React, {useState} from 'react';
import {Pressable, SafeAreaView, ScrollView, View} from 'react-native';

import {styles} from './style';
import {CustomText} from '../../../shared/ui';
import {AntDesign} from '@expo/vector-icons';
import {Button, TextInput} from 'react-native-paper';

interface LoginScreenProps {}

export const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  const onGoBack = () => navigation.goBack();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onGoToHome = () => navigation.navigate('Home');

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flexGrow: 1, paddingHorizontal: 24}}>
        <Pressable onPress={onGoBack} style={{marginBottom: 32}}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </Pressable>
        <View style={{marginBottom: 32}}>
          <CustomText h1 style={{paddingBottom: 12}}>
            Welcome!
          </CustomText>
          <CustomText textDefault>
            User your email and password to login{' '}
          </CustomText>
        </View>

        <TextInput
          label="Email"
          placeholder="Enter your email"
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
          maxLength={20}
        />

        <TextInput
          label="Password"
          placeholder="Enter your password"
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
        onPress={onGoToHome}
        // disabled={!isValidInputs}
        style={{marginVertical: 32, marginHorizontal: 16}}
        contentStyle={{}}>
        Login
      </Button>
    </SafeAreaView>
  );
};
