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
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Pressable onPress={onGoBack} style={styles.goBackButton}>
          <AntDesign name="arrowleft" style={styles.arrowStyle} />
        </Pressable>
        <View style={styles.contentContainer}>
          <CustomText h1 style={styles.textAllign}>
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
          style={styles.textBackgroundColor}
          contentStyle={styles.firstNameContentStyle}
          underlineStyle={styles.underlineStyle}
          defaultValue={firstName}
          onChangeText={setFirstName}
          maxLength={20}
        />

        <TextInput
          label="Last name"
          placeholder="Enter your Last name"
          style={styles.textBackgroundColor}
          contentStyle={styles.lastNameContentStyle}
          secureTextEntry
          underlineStyle={styles.underlineStyle}
          defaultValue={lastName}
          onChangeText={setLastName}
          maxLength={20}
        />
      </ScrollView>

      <Button
        mode="contained"
        onPress={onGoToUserCredentials}
        // disabled={!isValidInputs}
        style={styles.btnStyle}
        contentStyle={{}}>
        Next
      </Button>
    </SafeAreaView>
  );
};
