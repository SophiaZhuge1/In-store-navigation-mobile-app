import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';

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

export interface Store {
  currentItemIndex: number;
  changeItemIndex: (index: number) => void;
}

export const DataStoreContext = React.createContext<Store>({
  currentItemIndex: 0,
  changeItemIndex: () => {},
});

export default function App() {
  const isLoadingComplete = useCachedResources();
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
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
      <DataStoreContext.Provider
        value={{
          currentItemIndex: currentItemIndex,
          changeItemIndex: setCurrentItemIndex,
        }}
      >
        <SafeAreaProvider>
          <NavigationContainer>
            <Tabs />
          </NavigationContainer>
          <StatusBar style={'dark'} />
        </SafeAreaProvider>
      </DataStoreContext.Provider>
    );
  }
}

AppRegistry.registerComponent('MyApplication', () => App);
