import * as React from 'react';
import { Text, View } from '../components/Themed';
import { StyleSheet } from 'react-native';
import { Item, Items } from '../apptypes';
import { DataStoreContext } from '../store';

export default function Checkout() {
  const { itemList } = React.useContext(DataStoreContext);
  const sum = itemList
    .filter((item) => item.isCollected)
    .reduce((acc, item) => acc + item.price, 0);
  return (
    <View style={styles.c}>
      <View style={styles.price}>
        <View style={{ backgroundColor: 'none' }}>
          <Text style={styles.t}>Total Price</Text>
        </View>
        <View style={{ backgroundColor: 'none' }}>
          <Text style={styles.t1}>£{sum.toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.checkoutBtn}>
        <Text style={styles.t2}>Checkout</Text>
      </View>
    </View>
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
