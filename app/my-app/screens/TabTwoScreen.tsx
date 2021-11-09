import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { useState } from 'react';

import { Text, View } from '../components/Themed';
import ShoppingList from '../shoppinglist';
import SearchBar from '../shoppinglist/SearchBar';





export default function TabTwoScreen() {

  const [items, setItems] = useState([
    {id: 1, text: 'Milk', quantity:1, price:1},
    {id: 2, text: 'Cheese', quantity:1, price:2},
    {id: 3, text: 'Rice', quantity:1, price:3},
    {id: 4, text: 'Bread', quantity:1, price:4}
  ])

  const addItem=(id:number, name:string, newPrice:number) => {
    setItems(prevItems =>{
      return [...prevItems, {id:id, text:name, quantity:1, price: newPrice}]
    });
  }

  const deleteItem = (id:number) =>{
    setItems(prevItems =>{
      return prevItems.filter(item => item.id!=id);
    })
  }

 const increaseQuantity = (id:number):void=>{
    let newCartItems = items.map( (item,index)=>{
      if (index == id-1) {
        console.log(id);
        item.quantity +=1;
        return item
      } else {
        return item;
      }
    });
    setItems(newCartItems);
  }

  const decreaseQuantity = (id:number):void=>{
    let newCartItems = items.map( (item,index)=>{
      if (index == id-1) {
        if(item.quantity!=0){
          console.log(id);
          item.quantity -=1;
          return item
        } else {return item}
      } else {
        return item;
      }
    });
    setItems(newCartItems);
  }

  const getTotalPrice = ()=>{
  
    return items.reduce((accumulator, current) => accumulator + current.price*current.quantity, 0);
    
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping List</Text>
      {/* <FlatList
      data = {items} renderItem = {({item})=>(
        <ListItem item = {item}/>
      )}
      
      /> */}
      <SearchBar />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      
      <ShoppingList items = {items}
          increaseQuantity = {increaseQuantity}
          decreaseQuantity = {decreaseQuantity}
          deleteItem = {deleteItem}
          getTotalPrice = {getTotalPrice}/>
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
