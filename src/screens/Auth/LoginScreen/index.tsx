import React, {useState} from 'react';
import {Pressable, SafeAreaView, ScrollView, View} from 'react-native';

import {styles} from './style';
import {CustomText} from '../../../shared/ui';
import {AntDesign} from '@expo/vector-icons';
import {Button, TextInput} from 'react-native-paper';
import CardContent from 'react-native-paper/lib/typescript/src/components/Card/CardContent';

interface LoginScreenProps {}

export const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  const onGoBack = () => navigation.goBack();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onGoToHome = () => navigation.navigate('Home');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Pressable onPress={onGoBack} style={styles.goBackButton}>
          <AntDesign name="arrowleft" style={styles.arrowStyle} />
        </Pressable>
        <View style={styles.contentContainer}>
          <CustomText h1 style={styles.textAllign}>
            Welcome!
          </CustomText>
          <CustomText textDefault>
            User your email and password to login{' '}
          </CustomText>
        </View>

        <TextInput
          label="Email"
          placeholder="Enter your email"
          style={styles.textBackgroundColor}
          contentStyle={styles.emailContentStyle}
          underlineStyle={styles.underlineStyle}
          defaultValue={email}
          onChangeText={setEmail}
          maxLength={20}
        />

        <TextInput
          label="Password"
          placeholder="Enter your password"
          style={styles.textBackgroundColor}
          contentStyle={styles.passwordContentStyle}
          secureTextEntry
          underlineStyle={styles.underlineStyle}
          defaultValue={password}
          onChangeText={setPassword}
          maxLength={20}
        />
      </ScrollView>

      <Button
        mode="contained"
        onPress={onGoToHome}
        // disabled={!isValidInputs}
        style={styles.btnStyle}
        contentStyle={{}}>
        Login
      </Button>
    </SafeAreaView>
  );
};
