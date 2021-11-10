import React from 'react';
import { BottomTabBarHeightContext, createBottomTabNavigator, useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import { Text, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import Colors from '../constants/Colors';
import { StyleSheet } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';

const Tab = createBottomTabNavigator();
 
const Tabs = () => (
    <Tab.Navigator
        screenOptions={{
            tabBarStyle: { 
                position : 'absolute',
                height: 82,
                borderRadius: 10,
            },
            
        }}
    >
        <Tab.Screen name="Navigation" component={TabOneScreen} 
            options={{
                tabBarLabelStyle: {
                    fontSize: 7,
                    marginBottom:20,
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
                        <View style={styles.navButton}>
                            <Ionicons
                                name="analytics-outline"
                                size={25}
                                color={tabInfo.focused ? "#1E539A" : "black"}
                                style={{
                                    marginLeft:3
                                }}
                            />
                      </View>
                    );
                  },
                tabBarLabelPosition: 'below-icon'
            }}
        />
        <Tab.Screen name="Shopping List" component={TabTwoScreen} 
            options={{
                headerShown:false,
                tabBarLabelStyle: {
                    fontSize: 7,
                    marginBottom:20,
                    marginTop: 0
                    
                  },
                tabBarIcon: (tabInfo) => {
                    return (
                    <View style={styles.listButton}>
                        <Ionicons
                            name="list-outline"
                            size={35}
                            color={tabInfo.focused ? "#1E539A" : "black"}
                            style={{
                                marginLeft:3
                            }}
                        />
                    </View>
                    );
                },
            }}
        />
        <Tab.Screen name="Account" component={TabTwoScreen} 
            options={{
                tabBarLabelStyle: {
                    fontSize: 7,
                    marginBottom:20,
                    marginTop: 0
                
                  },
                tabBarLabel: 'Account',
                tabBarIcon: (tabInfo) => {
                    return (
                    <View style={styles.navButton}>
                        <Ionicons
                            name="person-circle-outline"
                            size={25}
                            color={tabInfo.focused ? "#1E539A" : 'black'}
                            style={{
                                marginLeft:2
                            }}
                        />
                    </View>
                    );
                },
            }}
        />

    </Tab.Navigator>
    
)
const styles = StyleSheet.create({
    navButton:{
        marginTop:15,
        backgroundColor:'#e8e8e8',
        borderRadius:50,
        width:29,
        height:29,
        justifyContent:'center',
        alignSelf:'center',
        padding:0


        
    },
    listButton:{
        marginTop:15,
        marginBottom:5,
        backgroundColor:'#e8e8e8',
        borderRadius:50,
        width:40,
        height:40,
        justifyContent:'center',
        alignSelf:'center',
        padding:0

    },
})
export default Tabs;