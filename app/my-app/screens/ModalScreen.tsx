import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import CollectItem from '../Collection/CollectItem';

export default function ModalScreen() {
  //mock list
  const [shoppingList,setShoppingList] = React.useState([
		{id:0, name:'Rice', isCollected:false},
		{id:1, name:'Milk',isCollected:false},
  ])
  const [collectedList,setCollectedList] = React.useState([])

  const toggleCollect = (id) => {
    setShoppingList(prev => {
      //prev[0].isCollected = !prev[0].isCollected
      return prev.map(item =>
        item.id === id ? {id, name: item.name, isCollected:!item.isCollected} : item
      );
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/ModalScreen.tsx" />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <CollectItem  shoppingList ={shoppingList} toggleCollect={toggleCollect}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
