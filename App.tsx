import {StatusBar} from 'expo-status-bar';
import React from 'react';

import {useFonts} from 'expo-font';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {Router} from './src/navigation';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6949ff',
    accent: '#f0edff',
  },
};

export default function App() {
  const [fontsLoaded] = useFonts({
    'Circe-Bold': require('./src/shared/assets/Circe-Bold.ttf'),
    'Circe-Regular': require('./src/shared/assets/Circe-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <PaperProvider theme={theme}>
      <Router />
      <StatusBar style="auto" />
    </PaperProvider>
  );
}
