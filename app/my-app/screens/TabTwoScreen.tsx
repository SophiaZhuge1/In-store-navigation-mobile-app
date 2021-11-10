import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { useState } from 'react';
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from '../components/Themed';
import ShoppingList from '../shoppinglist';
import SearchBar from '../shoppinglist/SearchBar';





export default function TabTwoScreen() {

  const [items, setItems] = useState([
    {id: -1, text: '', quantity:0, price:0, description:'', weight:'', brand:''},
    // {id: 1, text: 'Milk', quantity:1, price:1},
    // {id: 2, text: 'Cheese', quantity:1, price:2},
    // {id: 3, text: 'Rice', quantity:1, price:3},
    // {id: 4, text: 'Bread', quantity:1, price:4}
  ])

  const addItem=(id:number, name:string, newPrice:number, newDescription:string, weight:string, brand:string) => {
    let alreadyAdded = false;
    let newCartItems = items.map( (item,index)=>{
      if (items[index].text == name) {
        item.quantity +=1;
        alreadyAdded = true;
        return item
      } else {
        return item;
      }
    });
    if(alreadyAdded){
      setItems(newCartItems);
    } else{
    setItems(prevItems =>{
        return [...prevItems, {id:id, text:name, quantity:1, price: newPrice, description:newDescription, weight:weight, brand:brand}]
      });
    }
  }

  const deleteItem = (text:string) =>{
    setItems(prevItems =>{
      return prevItems.filter(item => item.text!=text);
    })
  }

 const increaseQuantity = (text:string):void=>{
    let newCartItems = items.map( (item,index)=>{
      if (items[index].text == text) {
        item.quantity +=1;
        return item
      } else {
        return item;
      }
    });
    setItems(newCartItems);
  }

  const decreaseQuantity = (text:string):void=>{
    let newCartItems = items.map( (item,index)=>{
      if (items[index].text == text) {
        if(item.quantity!=0){
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


  const getList = ()=>{
    return items;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.shoppingListButton}>
          <Text style={styles.shoppinListTex}> Shopping List</Text>
        </View>
        <View style={styles.recommendedButton}>
          <Text style={styles.recommendedText}>Recommended</Text>
        </View>
        <View style={styles.locationButton}>
        <Ionicons
            name="location-outline"
            size={25}
            color={'#1E539A'}
            //style={styles.buttonIcons}
        />
        </View>
      </View>
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
      <SearchBar items = {items}
          increaseQuantity = {increaseQuantity}
          decreaseQuantity = {decreaseQuantity}
          deleteItem = {deleteItem}
          getTotalPrice = {getTotalPrice}
          addItem = {addItem}/>
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
  header: {
    flexDirection:'row',
    justifyContent:'flex-start',
  },
  shoppingListButton:{
    borderRadius:50,
    backgroundColor:'#1E539A',
    marginTop:20,
    height:30,
    width:100,
    justifyContent:'center',
    alignSelf:'flex-start',
    marginRight:250
  },
  shoppinListTex:{
    color:'#FFFFFF',
    fontWeight: 'bold',
    alignSelf:'center',
    fontSize:12
  },
  recommendedText:{
    color:'black',
    fontWeight: 'bold',
    alignSelf:'flex-end',
    fontSize:12,
    marginRight:5
  },
  recommendedButton:{
    borderRadius:50,
    borderColor:'#1E539A',
    borderWidth:2,
    marginTop:20,
    height:30,
    width:200,
    justifyContent:'center',
    position:'absolute',
    marginLeft:1,
    backgroundColor: 'none'
  },
  locationButton:{
    justifyContent:'center',
    alignSelf:'center',
    marginTop:20,
    borderColor:'#1E539A',
    borderWidth:2,
    position:'absolute',
    borderRadius:50,
    height: 30,
    marginLeft:300
  }

});
