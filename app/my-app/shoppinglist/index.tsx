
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import ListItem from '../components/ListItem';
import { useState } from 'react';
import {StyleSheet } from "react-native";
import { inheritsComments } from '@babel/types';

interface FuncProps{
  items:{id:number, text:string, quantity:number, price:number}[];
  increaseQuantity(id:number):void;
  decreaseQuantity(id:number):void;
  deleteItem(id:number):void;
  getTotalPrice():number;
}

const ShoppingList: React.FC<FuncProps>=(props)=> {
//   const [items, setItems] = useState([
//     {id: 1, text: 'Milk', quantity:1, price:1},
//     {id: 2, text: 'Cheese', quantity:1, price:2},
//     {id: 3, text: 'Rice', quantity:1, price:3},
//     {id: 4, text: 'Bread', quantity:1, price:4}
//   ])

//   const addItem=(id:number, name:string, newPrice:number) => {
//     setItems(prevItems =>{
//       return [...prevItems, {id:id, text:name, quantity:1, price: newPrice}]
//     });
//   }

//   const deleteItem = (id:number) =>{
//     setItems(prevItems =>{
//       return prevItems.filter(item => item.id!=id);
//     })
//   }

//  const increaseQuantity = (id:number):void=>{
//     let newCartItems = items.map( (item,index)=>{
//       if (index == id-1) {
//         console.log(id);
//         item.quantity +=1;
//         return item
//       } else {
//         return item;
//       }
//     });
//     setItems(newCartItems);
//   }

//   const decreaseQuantity = (id:number):void=>{
//     let newCartItems = items.map( (item,index)=>{
//       if (index == id-1) {
//         if(item.quantity!=0){
//           console.log(id);
//           item.quantity -=1;
//           return item
//         } else {return item}
//       } else {
//         return item;
//       }
//     });
//     setItems(newCartItems);
//   }

// const getTotalPrice = ()=>{
  
//   return props.items.reduce((accumulator, current) => accumulator + current.price*current.quantity, 0);
  
// }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width:'100%',
      
      //backgroundColor:'blue'
    },
    priceContainer:{
      alignSelf:'center',
      //alignItems:'center',
      backgroundColor: "blue",
      borderRadius: 15,
      width:'90%',
      height:100,
      marginBottom:100,
      flexDirection:'row',
      justifyContent: 'space-between'
      
    },
    priceText:{
      color:'white',
      //alignSelf:'center',
      fontSize:20,
      fontWeight: 'bold',
      
    },
    clubcard:{
      alignSelf:'center',
      marginLeft:30
      
    },
    price:{
      alignSelf:'center',
      marginRight:30
    }

  });

  const client = new ApolloClient({
    uri: 'http://localhost:8000/graphql/',
    cache: new InMemoryCache(),
  });
  return (
    <View style = {styles.container}>
      
      <FlatList
        data = {props.items} renderItem = {({item})=>(item.id==-1?null:
          <ListItem name = {item.text}
          id={item.id}
          quantity = {item.quantity} 
          increaseQuantity = {props.increaseQuantity}
          decreaseQuantity = {props.decreaseQuantity}
          deleteItem = {props.deleteItem}/>
        )}
      />
      <View style={styles.priceContainer}>
        <View style={styles.clubcard}>
          <Text style={styles.priceText}>Clubcard</Text>
          <Text style={styles.priceText}>9</Text>
        </View>
        <View style={styles.price}>
          <Text style={styles.priceText}>Guide Price</Text>
          <Text style={styles.priceText}>£{props.getTotalPrice()}</Text>
        </View>
          
      </View>
    {/* <ApolloProvider client={client}>
      <div className="App">
        <Items />
      </div>
    </ApolloProvider> */}
    </View>
  );

  
}

export default ShoppingList;