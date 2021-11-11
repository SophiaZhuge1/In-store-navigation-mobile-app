import * as React from 'react';
import { Text, View } from '../components/Themed';
import { StyleSheet,FlatList,ScrollView ,TouchableOpacity,Animated } from 'react-native';
import CollectItem from './CollectItem';
import CollectList from './CollectList';
import Checkout from './Checkout';
import Stack from './Stack';
import CheckoutScreen from '../screens/CheckoutScreen';

export default function SwipeList ({navigation}) {
    const [shoppingList,setShoppingList] = React.useState([
		{id:0, name:'Rice', isCollected:false, price:5},
		{id:1, name:'Milk',isCollected:false, price:1.25},
        {id:2, name:'Bread',isCollected:false, price:0.9},
        {id:3, name:'Sugar',isCollected:false, price:2.5},
  ])
  const toggleCollect = (id) => {
    setShoppingList(prev => {
      return prev.map(item =>
        item.id === id ? {id, name: item.name, isCollected:!item.isCollected, price:item.price} : item
      );
    })
  }
return (
<View style={{ backgroundColor:"none", width:"100%", flexDirection:"column"}}>
    <CollectItem  shoppingList ={shoppingList}  toggleCollect={toggleCollect}/>
    <View style={{ }}>
        <CollectList shoppingList ={shoppingList} toggleCollect={toggleCollect}/>
        <Checkout navigation = {navigation}/>
    </View>
</View>
);}