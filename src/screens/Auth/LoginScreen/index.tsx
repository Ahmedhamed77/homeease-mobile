import React, {useState} from 'react';
import {Pressable, SafeAreaView, ScrollView, View} from 'react-native';

import {styles} from './style';
import {CustomText} from '../../../shared/ui';
import {AntDesign} from '@expo/vector-icons';
import {Button, TextInput} from 'react-native-paper';
import {useLoginUser} from '../../../shared/hooks';
import {usePersistedStore} from '../../../services/Store/store';
import {RootNavigation} from '../../../navigation/router/interface';

import {getUserSession} from '../../../services/ApiService/auth';
import {getHouse} from '../../../services/ApiService/house';

interface LoginScreenProps {
  navigation: RootNavigation;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  const onGoBack = () => navigation.goBack();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {setHasLoginToken, setUserSession, setUserHouse} = usePersistedStore(
    state => state,
  );

  const {mutate: onLogin, data, isLoading} = useLoginUser();

  // odillmann@axadvisory.com
  // Zaracoco123

  console.log(data, '----data');
  const onPressLogin = () => {
    onLogin(
      {payload: {email: 'odillmann@axadvisory.com', password: 'Zaracoco123'}},
      {
        onSuccess: async () => {
          try {
            const session = await getUserSession();
            setUserSession(session);

            const user_house = await getHouse({houseId: session.user.houseId});
            setUserHouse(user_house);

            setHasLoginToken(true);
          } catch (error) {
            console.log('error with login');
          }
        },
      },
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContentContainer}>
        <Pressable onPress={onGoBack} style={styles.pressableContainerStyle}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </Pressable>
        <View style={{marginBottom: 32}}>
          <CustomText h1 style={{paddingBottom: 12}}>
            Welcome!
          </CustomText>
          <CustomText textDefault>
            Enter your email and password to login
          </CustomText>
        </View>

        <TextInput
          label="Email"
          placeholder="Enter your email"
          style={styles.inputStyle}
          contentStyle={[styles.inputContentStyle, styles.inputSpace]}
          underlineStyle={styles.inputUnderline}
          defaultValue={email}
          onChangeText={setEmail}
          maxLength={20}
        />

        <TextInput
          label="Password"
          placeholder="Enter your password"
          style={styles.inputStyle}
          contentStyle={styles.inputContentStyle}
          secureTextEntry
          underlineStyle={styles.inputUnderline}
          defaultValue={password}
          onChangeText={setPassword}
          maxLength={20}
        />
      </ScrollView>

      <Button
        mode="contained"
        onPress={onPressLogin}
        loading={isLoading}
        style={styles.buttonStyle}
        contentStyle={{}}>
        Login
      </Button>
    </SafeAreaView>
  );
};
