import * as React from 'react';
import { Text, View } from '../components/Themed';
import { StyleSheet,Button ,TouchableOpacity } from 'react-native';
import CheckoutBtn from '../checkout/CheckoutBtn';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CheckoutScreen from '../screens/CheckoutScreen';
import Checkout from './Checkout';
import SwipeList from './swipeList';
import PayScreen from '../screens/PayScreen';

const MyStack = createStackNavigator();

export default function Stack() {
  return (
    <MyStack.Navigator initialRouteName="SwipeList" screenOptions={{headerShown:false}}>  
        <MyStack.Screen name="SwipeList" component={SwipeList}/>
        <MyStack.Screen name="CheckoutScreen" component={CheckoutScreen} />
        <MyStack.Screen name="PayScreen" component={PayScreen} />
    </MyStack.Navigator>
  );
}