import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import CollectItem from '../Collection/CollectItem';
import CollectList from '../Collection/CollectList';
import Checkout from '../Collection/Checkout';

export default function ModalScreen() {
  //mock list
  const [shoppingList,setShoppingList] = React.useState([
		{id:0, name:'Rice', isCollected:false},
		{id:1, name:'Milk',isCollected:false},
    {id:2, name:'Bread',isCollected:false},
    {id:3, name:'Sugar',isCollected:false},
  ])
  const [collectedList,setCollectedList] = React.useState([])
  const [toCollect,setToCollect] = React.useState(0)

  

  const toggleCollect = (id) => {
    setShoppingList(prev => {
      return prev.map(item =>
        item.id === id ? {id, name: item.name, isCollected:!item.isCollected} : item
      );
    })
  }
  const listExpended = true
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/ModalScreen.tsx" />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <View style={{ position:"absolute", width:"100%", flexDirection:"column"}}>
            <CollectItem  shoppingList ={shoppingList} toCollect={toCollect} toggleCollect={toggleCollect}/>
            
              <CollectList shoppingList ={shoppingList} toCollect={toCollect} toggleCollect={toggleCollect}/>
              <Checkout shoppingList={shoppingList}/>
            
      </View>
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
