import React from 'react';

import {styles} from './style';
import {View, Text} from 'react-native';

interface HomeScreenProps {}

export const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
    </View>
  );
};
