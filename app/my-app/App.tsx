import * as Store from './store';
import AppLoading from 'expo-app-loading';
import React, { Component, useState } from 'react';
import Tabs from './navigation/tabs';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import useFonts from './hooks/usefonts';
import { AppRegistry, StyleSheet } from 'react-native';
import { Item, Items } from './apptypes';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const mockItems: Items = [
  { id: 0, name: 'Rice', isCollected: false, price: 5 },
  { id: 1, name: 'Milk', isCollected: false, price: 1.25 },
  { id: 2, name: 'Bread', isCollected: false, price: 0.9 },
  { id: 3, name: 'Sugar', isCollected: false, price: 2.5 },
  { id: 4, name: 'Eggs', isCollected: false, price: 1.5 },
  { id: 5, name: 'Flour', isCollected: false, price: 1.5 },
]

export default function App(): JSX.Element {
  const isLoadingComplete = useCachedResources();
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [itemList, setItemList] = useState<Item[]>(mockItems);
  const [currentView, setCurrentView] = useState('list');
  const [isReady, SetIsReady] = useState(false);
  const colorScheme = useColorScheme();
  const LoadFonts = async () => {
    await useFonts();
  };

  const mapItem = (item: Item, id: number) => {
    return item.id === id
      ? {
          id,
          name: item.name,
          isCollected: !item.isCollected,
          price: item.price,
        }
      : item;
  };
  const toggleCollect = (id: number) => {
    setItemList(itemList.map((item) => mapItem(item, id)));
  };

  if (!isLoadingComplete || !isReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  } else {
    return (
      <Store.DataStoreContext.Provider
        value={{
          currentItemIndex,
          changeItemIndex: setCurrentItemIndex,
          itemList,
          setItemList,
          toggleCollect,
        }}
      >
        <SafeAreaProvider>
          <NavigationContainer>
            <Tabs />
          </NavigationContainer>
          <StatusBar style={'dark'} />
        </SafeAreaProvider>
      </Store.DataStoreContext.Provider>
    );
  }
}

AppRegistry.registerComponent('MyApplication', () => App);
