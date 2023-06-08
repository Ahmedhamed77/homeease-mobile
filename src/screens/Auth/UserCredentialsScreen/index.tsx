import React, {useState} from 'react';
import {Alert, Pressable, SafeAreaView, ScrollView, View} from 'react-native';

import {CustomText} from '../../../shared/ui';
import {Button, TextInput} from 'react-native-paper';
import {AntDesign} from '@expo/vector-icons';
import {RootNavigation} from '../../../navigation/router/interface';
import {AuthParams} from '../../../navigation/auth-stack/interface';
import {styles} from './style';
import {createUser} from '../../../services/ApiService/auth';
import {useCreateUser} from '../../../shared/hooks/react-query/mutation/useCreateUser';
import {useStore} from '../../../services/Store/store';
import {QueryKeys, queryClient} from '../../../services/react-query';

interface UserCredentialsScreenProps {
  navigation: RootNavigation;
}

export const UserCredentialsScreen: React.FC<UserCredentialsScreenProps> = ({
  navigation,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {userInfo} = useStore(state => state);
  console.log(userInfo, '--userInfo');

  const {mutate, isLoading} = useCreateUser();

  const onGoBack = () => navigation.goBack();

  const onGoToLogin = () => {
    const isValidEmail = validateEmail();

    if (isValidEmail) {
      mutate(
        {
          username: {
            firstname: userInfo.first_name,
            lastname: userInfo.last_name,
          },
          email: email,
          password: password,
        },
        {
          onSuccess: () => {
            queryClient.invalidateQueries([QueryKeys.getHouse]);
            navigation.navigate(AuthParams.Login);
          },
        },
      );
    }
  };

  const validateEmail = () => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);

    if (!isValid) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return false;
    }
    return true;
  };

  // const isValidEmail = validateEmail();

  const isValidPassword = password.length > 6;

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
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete={undefined}
          autoCorrect={false}
          defaultValue={email}
          onChangeText={setEmail}
        />

        <TextInput
          label="Password"
          placeholder="Enter your Password at least 6 chars"
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
        disabled={!isValidPassword}
        loading={isLoading}
        style={{marginVertical: 32, marginHorizontal: 16}}
        contentStyle={{}}>
        Next
      </Button>
    </SafeAreaView>
  );
};
