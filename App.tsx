import {StatusBar} from 'expo-status-bar';
import React from 'react';

import {useFonts} from 'expo-font';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {Router} from './src/navigation';
import {queryClient} from './src/services/react-query';
import {QueryClientProvider} from '@tanstack/react-query';

const lightTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6949ff',
    accent: '#f0edff',
    text: '#1c1b1f',
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
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={lightTheme}>
        <Router />
        <StatusBar style="auto" />
      </PaperProvider>
    </QueryClientProvider>
  );
}
