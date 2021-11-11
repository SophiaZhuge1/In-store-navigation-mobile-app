import React from 'react';
import { View } from './Themed';
import SwipeList from '../Collection/swipeList';
import { StyleSheet } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

interface props {
  navigation: NavigationScreenProp<any, any>;
}

export default function List({ navigation }: props) {
  // console.log(navigation, 'list');
  return (
    <View style={styles.container}>
      <SwipeList navigation={navigation} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'silver',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#E8E8E8',
  },
});
