import React from 'react';
import { BottomTabBarHeightContext, createBottomTabNavigator, useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import SplashScreen from '../screens/SplashScreen';
import SignUpScreen from '../screens/SignUpScreen';
//import SignInScreen from '../screens/SignInScreen';
import { Text, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import Colors from '../constants/Colors';
import RootStackScreen from '../screens/RootStackScreen';

const Tab = createBottomTabNavigator();
 
const Tabs = () => (
    <Tab.Navigator
        screenOptions={{
            tabBarStyle: { 
                position : 'absolute',
                height: '10%',
                borderRadius: 10
            },
            //tabBarShowLabel: false
        }}
    >
        <Tab.Screen name="Navigation" component={TabOneScreen} 
            options={{
                tabBarLabelStyle: {
                    fontSize: 16,
                    marginBottom:16,
                    marginTop: 0
                
                  },
                tabBarLabel: 'Navigation',
                tabBarIcon: (tabInfo) => {
                    // <View style = {{alignItems: 'center', justifyContent:'center'}}>
                    //     <Text style={{
                    //         color: '#e32f45', fontSize :12
                    //     }}>Navigation</Text>
                    // </View>
                    return (
                      <Ionicons
                        name="analytics-outline"
                        size={40}
                        color={tabInfo.focused ? '#1E539A' : "#8e8e93"}
                        style={{
                            marginBottom:0,
                            marginTop: 10
                        }}
                      />
                    );
                  },
                tabBarLabelPosition: 'below-icon'
            }}
        />
        <Tab.Screen name="Shopping List" component={TabTwoScreen} 
            options={{
                tabBarLabelStyle: {
                    fontSize: 16,
                    marginBottom:16,
                    marginTop: 0
                
                  },
                tabBarLabel: 'Shopping List',
                tabBarIcon: (tabInfo) => {
                    return (
                    <Ionicons
                        name="list-outline"
                        size={32}
                        color={tabInfo.focused ? "#1E539A" : "#8e8e93"}
                        style={{
                            marginBottom:0,
                            marginTop: 10
                        }}
                    />
                    );
                },
            }}
        />
        <Tab.Screen name="Account" component={RootStackScreen}
            options={{
                tabBarLabelStyle: {
                    fontSize: 16,
                    marginBottom:16,
                    marginTop: 0
                
                  },
                headerShown:false,
                tabBarLabel: 'Account',
                tabBarIcon: (tabInfo) => {
                    return (
                    <Ionicons
                        name="person-circle-outline"
                        size={32}
                        color={tabInfo.focused ? "#1E539A" : "#8e8e93"}
                        style={{
                            marginBottom:0,
                            marginTop: 10
                        }}
                    />
                    );
                },
            }}
        />
        {/* <Tab.Screen name="Sign Up" component={SignUpScreen} 
                    options={{
                        tabBarLabelStyle: {
                            fontSize: 16,
                            marginBottom:16,
                            marginTop: 0
                        
                        },
                        tabBarLabel: 'Sign Up',
                        tabBarIcon: (tabInfo) => {
                            return (
                            <Ionicons
                                name="person-circle-outline"
                                size={32}
                                color={tabInfo.focused ? "#1E539A" : "#8e8e93"}
                                style={{
                                    marginBottom:0,
                                    marginTop: 10
                                }}
                            />
                            );
                        },
                    }}
                /> */}
                {/* <Tab.Screen name = 'RootStackScreen' component={RootStackScreen}/> */}
    </Tab.Navigator>

    
)
export default Tabs;