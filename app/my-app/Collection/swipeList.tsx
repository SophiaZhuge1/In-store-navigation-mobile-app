import * as React from 'react';
import { Text, View } from '../components/Themed';
import CollectItem from './CollectItem';
import CollectList from './CollectList';
import Checkout from './Checkout';
import { DataStoreContext } from '../store';
import { Items, Item } from '../apptypes';
import { NavigationScreenProp } from 'react-navigation';

interface props {
  navigation: NavigationScreenProp<any, any>;
}

export default function SwipeList({ navigation }: props) {
  const { itemList, setItemList, toggleCollect } =
    React.useContext(DataStoreContext);

  // console.log(navigation, 'swipelistnav');

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
        <Checkout navigation={navigation} />
      </View>
    </View>
  );
}
