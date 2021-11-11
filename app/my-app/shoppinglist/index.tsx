import ListItem from '../components/ListItem';
import React from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { FlatList, Text, View } from 'react-native';
import { StyleSheet } from 'react-native';


interface FuncProps{
  items:{id:number, text:string, quantity:number, price:number, description:string, weight:string, brand:string}[];
  increaseQuantity(text:string):void;
  decreaseQuantity(text:string):void;
  deleteItem(text:string):void;
  getTotalPrice():number;
}

const ShoppingList: React.FC<FuncProps>=(props)=> {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width:'100%',
      
      //backgroundColor:'blue'
    },
    priceContainer:{
      alignSelf:'center',
      //alignItems:'center',
      backgroundColor: '#1E539A',
      borderRadius: 15,
      width:'90%',
      height: 60,
      marginBottom:100,
      flexDirection:'row',
      justifyContent: 'space-between',
      shadowOffset: {width: 0, height: 5},
      shadowOpacity: 0.2,
      shadowRadius: 5,
      
    },
    priceText:{
      color:'white',
      //alignSelf:'center',
      fontSize:18,
      fontWeight:'500',
      
    },
    labelText:{
      color:'white',
      //alignSelf:'center',
      fontSize:12,
      
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
      
      <FlatList style={{marginTop:20}}
        data = {props.items} renderItem = {({item})=>(item.id==-1?null:
          <ListItem name = {(item.text)[0]+(item.text).slice(1)}
          key={item.id}
          id={item.id}
          description = {(item.description).split('\n')[0]}
          weight = {item.weight}
          brand = {item.brand}
          quantity = {item.quantity} 
          increaseQuantity = {props.increaseQuantity}
          decreaseQuantity = {props.decreaseQuantity}
          deleteItem = {props.deleteItem}/>
        )}
      />
      <View style={styles.priceContainer}>
        <View style={styles.clubcard}>
          <Text style={styles.labelText}>Clubcard</Text>
          <Text style={styles.priceText}>{Math.floor(props.getTotalPrice())}</Text>
        </View>
        <View style={styles.price}>
          <Text style={styles.labelText}>Guide Price</Text>
          <Text style={styles.priceText}>£{props.getTotalPrice().toFixed(2)}</Text>
        </View>
          
      </View>
    </View>
  );

  
}

export default ShoppingList;