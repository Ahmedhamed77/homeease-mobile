import React from 'react';
import {Text, TextProps} from 'react-native-paper';

import {styles} from './style';

export interface CustomTextProps<T> extends TextProps<T> {
  h1?: boolean;
  h2?: boolean;
  subtitle?: boolean;
  subtitle2?: boolean;
  textDefault?: boolean;
  textS?: boolean;
  link?: boolean;
  titleTag?: boolean;
  textArticle?: boolean;
}

export const CustomText: React.FC<CustomTextProps<Text>> = ({
  children,
  h1,
  h2,
  subtitle,
  subtitle2,
  textDefault,
  textS,
  link,
  titleTag,
  textArticle,
  style,
  ...props
}) => {
  return (
    <Text
      suppressHighlighting={true}
      {...props}
      style={[
        h1 && styles.h1Style,
        h2 && styles.h2Style,
        subtitle && styles.subtitle,
        subtitle2 && styles.subtitle2,
        textDefault && styles.textDefault,
        textS && styles.textS,
        link && styles.link,
        titleTag && styles.titleTag,
        textArticle && styles.textArticle,
        style,
      ]}>
      {children}
    </Text>
  );
};
