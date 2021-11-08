import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { AppRegistry } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import Tabs from './navigation/tabs';


export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
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