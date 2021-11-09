import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { useState } from 'react';

import { Text, View } from '../components/Themed';
import ShoppingList from '../shoppinglist';

export default function TabTwoScreen() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping List</Text>
      {/* <FlatList
      data = {items} renderItem = {({item})=>(
        <ListItem item = {item}/>
      )}
      
      /> */}
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <ShoppingList />
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
    fontSize: 30,
    fontWeight: 'bold',
    marginTop:25,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
