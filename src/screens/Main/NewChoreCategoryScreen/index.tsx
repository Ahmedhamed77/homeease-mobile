import React from 'react';

import {styles} from './style';
import {View} from 'react-native';
import {CustomText} from '../../../shared/ui';

interface NewChoreCategoryScreenType {}

export const NewChoreCategoryScreen: React.FC<
  NewChoreCategoryScreenType
> = () => {
  return (
    <View style={styles.container}>
      <CustomText>welcome</CustomText>
    </View>
  );
};
