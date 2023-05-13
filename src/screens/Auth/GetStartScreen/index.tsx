import React from 'react';

import {styles} from './style';
import {View, SafeAreaView, ScrollView} from 'react-native';
import {CustomText} from '../../../shared/ui';
import {Button} from 'react-native-paper';

interface GettingStartScreenProps {}

export const GettingStartScreen: React.FC<GettingStartScreenProps> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.contentContainer}>
          <CustomText textArticle style={{}}>
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
          labelStyle={{
            fontSize: 16,
            fontFamily: 'Circe-Bold',
            lineHeight: 20,
          }}>
          Get started
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};
