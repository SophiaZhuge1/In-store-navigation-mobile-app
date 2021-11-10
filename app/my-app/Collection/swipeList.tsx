import * as React from 'react';
import { View } from '../components/Themed';
import CollectItem from './CollectItem';
import CollectList from './CollectList';
import Checkout from './Checkout';
import { DataStoreContext } from '../store';
import { Items, Item } from '../apptypes';



export default function SwipeList() {
  const { itemList, setItemList, toggleCollect } = React.useContext(DataStoreContext);
 
  return (
    <View
      style={{
        backgroundColor: 'white',
        width: '100%',
        flexDirection: 'column',
      }}
    >
      <View style={{ backgroundColor: 'white' }}>
        <CollectList shoppingList={itemList} toggleCollect={toggleCollect} />
        <Checkout />
      </View>
    </View>
  );
}
