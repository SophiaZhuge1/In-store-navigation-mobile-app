import * as Store from './store';
import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';
import Tabs from './navigation/tabs';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import useFonts from './hooks/usefonts';
import { AppRegistry } from 'react-native';
import { Item, Items } from './apptypes';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { FilterItems } from './shoppinglist/SearchBar';
import { getAllItemsFromBackend } from './backendconnection';

const mockItems: Items = [];

export default function App(): JSX.Element {
  const isLoadingComplete = useCachedResources();
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [itemList, setItemList] = useState<Item[]>(mockItems);
  const [currentView, setCurrentView] = useState('list');
  const [allItems, setAllItems] = useState<FilterItems[]>([]);
  const [isReady, SetIsReady] = useState(false);
  const colorScheme = useColorScheme();
  const [areItemsLoaded, setAreItemsLoaded] = useState(false);
  const LoadFonts = async () => {
    await useFonts();
  };

  const loadAllItems = () => {
    return getAllItemsFromBackend((items: FilterItems[]) => {
      setAllItems(items);
      setAreItemsLoaded(true);
    });
  };
  
  const mapItem = (item: Item, id: number) => {
    return item.id === id
      ? {
          id,
          name: item.name,
          isCollected: !item.isCollected,
          price: item.price,
          category: item.category,
        }
      : item;
  };
  const toggleCollect = (id: number) => {
    setItemList(itemList.map((item) => mapItem(item, id)));
  };

  const asyncLoadItems = async () => {
    return Promise.all([LoadFonts(), loadAllItems()]).then(()=>{})
  }

  if (!isLoadingComplete || !isReady || !areItemsLoaded) {
    return (
      <AppLoading
        startAsync={asyncLoadItems}
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
          allItems,
          setAllItems,
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
