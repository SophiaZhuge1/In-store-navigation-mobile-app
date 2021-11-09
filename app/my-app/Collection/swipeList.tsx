import * as React from 'react';
import { Text, View } from '../components/Themed';
import { StyleSheet,FlatList,ScrollView ,TouchableOpacity } from 'react-native';
import CollectItem from '../Collection/CollectItem';
import CollectList from '../Collection/CollectList';
import Checkout from '../Collection/Checkout';

export default function SwipeList ({shoppingList,toggleCollect, }) {

return (
<View style={{borderWidth:1, }}>
    <CollectList shoppingList ={shoppingList} toggleCollect={toggleCollect}/>
    <Checkout shoppingList ={shoppingList}/>
</View>
);}