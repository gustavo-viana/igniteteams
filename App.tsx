import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'react-native';

import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import theme from './src/theme';

import { Groups } from '@screens/Groups';
import { Loading } from '@components/Loading';
import React from 'react';

export default function App() {

  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      {fontsLoaded ? <Groups /> : <Loading />}
    </ThemeProvider>
  );
}