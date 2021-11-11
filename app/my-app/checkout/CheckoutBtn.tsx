import * as React from 'react';
import { Text, View } from '../components/Themed';
import { StyleSheet, Button, TouchableOpacity } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

interface props {
  navigation: NavigationScreenProp<any, any>;
}

function CheckoutBtn({ navigation }: props) {
    // console.log(navigation, 'checkoutbtnnav')
  return (
    <TouchableOpacity
      style={styles.checkoutBtn}
      onPress={() => navigation.navigate('Map', {screen: 'CheckoutScreen'})}
    >
      <Text style={styles.t2}>Checkout</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  t: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
  t1: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
  t2: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
  c: {
    ///flex:1,
    //borderWidth:1,
    backgroundColor: 'blue',
    borderRadius: 100 / 9,
    margin: 10,
    padding: 8,
    //width:"100%",
    //margin:5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    flexDirection: 'column',
    backgroundColor: 'none',
    paddingLeft: 15,
    flex: 1,
  },
  checkoutBtn: {
    backgroundColor: 'none',
    borderRadius: 100 / 8,
    padding: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default CheckoutBtn;
