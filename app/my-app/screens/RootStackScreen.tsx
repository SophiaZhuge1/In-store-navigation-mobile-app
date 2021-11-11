
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import TabOneScreen from './TabOneScreen';

const RootStack = createStackNavigator();

export default function RootStackScreen(){
    return(
        <RootStack.Navigator initialRouteName='SplashScreen'>
            <RootStack.Screen options={{headerShown: false}} name="SplashScreen" component={SplashScreen}/>
            <RootStack.Screen options={{headerShown: false}} name="SignInScreen" component={SignInScreen}/>
            <RootStack.Screen options={{headerShown: false}} name="SignUpScreen" component={SignUpScreen}/>
            <RootStack.Screen options={{headerShown: false}} name="TabOneScreen" component={TabOneScreen}/>
        </RootStack.Navigator>
    )
}
