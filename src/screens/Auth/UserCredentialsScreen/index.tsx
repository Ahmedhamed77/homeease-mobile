import React, {useState} from 'react';
import {Pressable, SafeAreaView, ScrollView, View} from 'react-native';

import {CustomText} from '../../../shared/ui';
import {styles} from './style';
import {Button, TextInput} from 'react-native-paper';
import {AntDesign} from '@expo/vector-icons';

interface UserCredentialsScreenProps {}

export const UserCredentialsScreen: React.FC<UserCredentialsScreenProps> = ({
  navigation,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onGoBack = () => navigation.goBack();

  const onGoToLogin = () => navigation.navigate('Login');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Pressable onPress={onGoBack} style={styles.goBackBtn}>
          <AntDesign name="arrowleft" style={styles.arrowStyle} />
        </Pressable>
        <View style={styles.contentContainer}>
          <CustomText h2 style={styles.textAllign}>
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
          style={styles.textBackgroundColor}
          contentStyle={styles.emailContentStyle}
          underlineStyle={styles.underlineStyle}
          defaultValue={email}
          onChangeText={setEmail}
        />

        <TextInput
          label="Password"
          placeholder="Enter your Password"
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
        onPress={onGoToLogin}
        // disabled={!isValidInputs}
        style={styles.btnStyle}
        contentStyle={{}}>
        Next
      </Button>
    </SafeAreaView>
  );
};
