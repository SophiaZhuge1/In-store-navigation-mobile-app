import * as React from 'react';
import { Text, View } from '../components/Themed';
import { StyleSheet, Button, TouchableOpacity } from 'react-native';
import CheckoutBtn from '../checkout/CheckoutBtn';
import { NavigationScreenProp } from 'react-navigation';
import { DataStoreContext } from '../store';

interface props {
  navigation: NavigationScreenProp<any, any>;
}

export default function Checkout({ navigation }: props) {
  //console.log(shoppingList)
  const [total, setTotal] = React.useState(0);
  const {itemList} = React.useContext(DataStoreContext);
  const sum = itemList.filter(item => item.isCollected).reduce((acc, cur) => acc + (cur.price*cur.quantity), 0);
  // console.log(sum, itemList);

  // console.log(navigation, 'checkoutnav')
  return (
    // console.log('Here'),
    (
      <View style={styles.c}>
        <View style={styles.price}>
          <View style={{ backgroundColor: 'none' }}>
            <Text style={styles.t}>Total Price</Text>
          </View>
          <View style={{ backgroundColor: 'none' }}>
            <Text style={styles.t1}>£{sum.toFixed(2)}</Text>
          </View>
        </View>
        <CheckoutBtn navigation={navigation} />
      </View>
    )
    //console.log("there")
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
    backgroundColor: '#1E539A',
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
