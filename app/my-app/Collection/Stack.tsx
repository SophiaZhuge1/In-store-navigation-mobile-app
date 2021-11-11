import * as React from 'react';
import Checkout from './Checkout';
import CheckoutBtn from '../checkout/CheckoutBtn';
import CheckoutScreen from '../screens/CheckoutScreen';
import MapList from '../components/MapList';
import PayScreen from '../screens/PayScreen';
import SwipeList from './swipeList';
import { Button, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from '../components/Themed';
import TabOneScreen from '../screens/TabOneScreen';

const MyStack = createStackNavigator();

interface props {
  setIsMapEnabled: (isMapEnabled: boolean) => void;
}

export default function Stack(props: props) {
  return (
    <MyStack.Navigator
      initialRouteName="Tesco Hammersmith"
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#E8E8E8',
        },
        headerTitleStyle: {
          fontWeight: '600',
          fontSize: 18,
        },
        headerTitleAlign: 'center',
      }}
    >
      <MyStack.Screen name="Tesco Hammersmith" component={TabOneScreen} />
      <MyStack.Screen
        name="CheckoutScreen"
        component={CheckoutScreen}
        options={{ title: 'Checkout' }}
      />
      <MyStack.Screen
        name="PayScreen"
        component={PayScreen}
        options={{ title: 'Pay' }}
      />
    </MyStack.Navigator>
  );
}
