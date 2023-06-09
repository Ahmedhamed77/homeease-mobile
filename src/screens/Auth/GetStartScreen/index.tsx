import React, {useRef} from 'react';
import {Button} from 'react-native-paper';
import ActionSheet, {ActionSheetRef} from 'react-native-actions-sheet';

import {styles} from './style';
import {
  View,
  SafeAreaView,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import {CustomText} from '../../../shared/ui';
import {RootNavigation} from '../../../navigation/router/interface';
import {AuthParams} from '../../../navigation/auth-stack/interface';

interface GettingStartScreenProps {
  navigation: RootNavigation;
}

export const GettingStartScreen: React.FC<GettingStartScreenProps> = ({
  navigation,
}) => {
  const actionSheetRef = useRef<ActionSheetRef>(null);

  const {width} = useWindowDimensions();

  const onOpenGetStartedSheet = () =>
    actionSheetRef?.current?.setModalVisible(true);
  const onCloseGetStartedSheet = () =>
    actionSheetRef.current?.setModalVisible(false);

  const onGoToLogin = () => {
    onCloseGetStartedSheet();
    navigation.navigate(AuthParams.Login);
  };

  const onGoToSignUp = () => {
    onCloseGetStartedSheet();
    navigation.navigate(AuthParams.UserInfo);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.contentContainer}>
          <CustomText textArticle style={styles.alignText}>
            Welcome to
          </CustomText>
          <CustomText h1 style={styles.alignText}>
            Homeease
          </CustomText>
          <CustomText textArticle style={styles.alignText}>
            we trying to handle your home tasks for you, sign in and enjoy
          </CustomText>
        </View>
        <Button
          mode="contained"
          labelStyle={styles.buttonTextStyle}
          onPress={onOpenGetStartedSheet}>
          Get started
        </Button>
      </ScrollView>

      <ActionSheet
        containerStyle={{
          width,
          paddingHorizontal: 16,
          paddingVertical: 18,
        }}
        ref={actionSheetRef}>
        <View style={{marginBottom: 32}}>
          <CustomText style={{paddingBottom: 32}}>Sign in</CustomText>

          <CustomText style={{paddingBottom: 32}}>
            Hi there! by siginign in you will be able to continue using the app
            and get all the information lets get started
          </CustomText>

          <Button
            mode="contained"
            style={{backgroundColor: '#000000', marginBottom: 12}}
            onPress={onGoToSignUp}>
            Sign Up
          </Button>
          <Button
            mode="contained"
            style={{backgroundColor: '#e8f3ff'}}
            textColor="#000000"
            onPress={onGoToLogin}>
            Sign In
          </Button>
        </View>
      </ActionSheet>
    </SafeAreaView>
  );
};
