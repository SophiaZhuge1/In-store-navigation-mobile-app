import React from 'react';
import {
  BottomTabBarHeightContext,
  createBottomTabNavigator,
  useBottomTabBarHeight,
} from '@react-navigation/bottom-tabs';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator
  initialRouteName="Shopping List"
    screenOptions={{
      tabBarStyle: {
        position: 'absolute',
        height: 82,
      },
    }}
  >
    <Tab.Screen
      name="Tesco Hammersmith"
      component={TabOneScreen}
      options={{
        headerStyle: {
          backgroundColor: '#E8E8E8',
        },
        headerTitleStyle: {
          fontWeight: '600',
          fontSize: 18,
        },
        headerTitleAlign: 'center',

        tabBarLabel: (tabInfo) => {
          if (tabInfo.focused) {
            return <View style={styles.focusedLabel}></View>;
          } else {
            return <View style={styles.label}>Navigation</View>;
          }
        },
        tabBarIcon: (tabInfo) => {
          return (
            <View
              style={tabInfo.focused ? styles.focusedButton : styles.button}
            >
              <Ionicons
                name="analytics"
                size={24}
                color={tabInfo.focused ? 'white' : 'black'}
                style={{
                  marginLeft: 3,
                }}
              />
            </View>
          );
        },
        tabBarLabelPosition: 'below-icon',
      }}
    />
    <Tab.Screen
      name="Shopping List"
      component={TabTwoScreen}
      options={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 7,
          marginBottom: 20,
          marginTop: 0,
        },
        tabBarLabel: (tabInfo) => {
          if (tabInfo.focused) {
            return <View style={styles.focusedLabel}></View>;
          } else {
            return <View style={styles.label}>Shopping List</View>;
          }
        },
        tabBarIcon: (tabInfo) => {
          return (
            <View
              style={tabInfo.focused ? styles.focusedButton : styles.button}
            >
              <Ionicons
                name="list-outline"
                size={24}
                color={tabInfo.focused ? 'white' : 'black'}
                style={{
                  marginLeft: 3,
                }}
              />
            </View>
          );
        },
      }}
    />
    <Tab.Screen
      name="Account"
      component={TabTwoScreen}
      options={{
        tabBarLabelStyle: {
          fontSize: 7,
          marginBottom: 20,
          marginTop: 0,
        },
        tabBarLabel: (tabInfo) => {
          if (tabInfo.focused) {
            return <View style={styles.focusedLabel}></View>;
          } else {
            return <View style={styles.label}>Account</View>;
          }
        },
        tabBarIcon: (tabInfo) => {
          return (
            <View
              style={tabInfo.focused ? styles.focusedButton : styles.button}
            >
              <Ionicons
                name="person-outline"
                size={24}
                color={tabInfo.focused ? 'white' : 'black'}
                style={{
                  marginLeft: 3,
                }}
              />
            </View>
          );
        },
      }}
    />
  </Tab.Navigator>
);
const styles = StyleSheet.create({
  button: {
    marginTop: 5,
    backgroundColor: '#e8e8e8',
    borderRadius: 50,
    width: 29,
    height: 29,
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 0,
  },
  focusedButton: {
    marginTop: 0,
    marginBottom: 5,
    backgroundColor: 'black',
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 5,
  },
  label: {
    fontSize: 7,
    marginBottom: 20,
  },
  focusedLabel: {
    backgroundColor: 'black',
    borderRadius: 2.5,
    height: 5,
    width: '80%',
    marginBottom: 10,
  },
});
export default Tabs;
