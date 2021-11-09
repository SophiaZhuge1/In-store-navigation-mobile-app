import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';

import { AppRegistry, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { View } from './components/Themed';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import Tabs from './navigation/tabs';
import useFonts from './hooks/usefonts';
import AppLoading from 'expo-app-loading';

const customTextProps = {
  style: {
    fontFamily: `'Inter', sans-serif`,
  },
};

export default function App() {
  const isLoadingComplete = useCachedResources();
  const [IsReady, SetIsReady] = useState(false);
  const colorScheme = useColorScheme();
  const LoadFonts = async () => {
    await useFonts();
  };

  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  } else {
    return (
        <SafeAreaProvider>
          <NavigationContainer>
            <Tabs />
          </NavigationContainer>
          {/*<Navigation colorScheme={colorScheme} />*/}
          <StatusBar />
        </SafeAreaProvider>
    );
  }
}

AppRegistry.registerComponent('MyApplication', () => App);
