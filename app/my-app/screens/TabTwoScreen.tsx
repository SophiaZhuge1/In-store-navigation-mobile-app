import * as React from 'react';
import SearchBar from '../shoppinglist/SearchBar';
import ShoppingList from '../shoppinglist';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Text, View } from '../components/Themed';
import { useState } from 'react';
import { Item} from '../apptypes';
import { DataStoreContext } from '../store';

type BackendItem = {
  id: number;
  text: string;
  quantity: number;
  price: number;
  description: string;
  weight: string;
  brand: string;
  category: string;
  position: number;
};

function mapBackendItemToFrontendItem(item: BackendItem): Item {
  return {
    id: item.id,
    price: item.price,
    category: item.category,
    name: item.text,
    isCollected: false,
    position: item.position,
    quantity:item.quantity,
  };
}

export default function TabTwoScreen() {
  const [items, setItems] = useState<BackendItem[]>([]);
  const { itemList, setItemList } = React.useContext(DataStoreContext);

  const addItem = (
    id: number,
    name: string,
    newPrice: number,
    newDescription: string,
    weight: string,
    brand: string,
    category: string,
    position: number
  ) => {
    let alreadyAdded = false;
    let newCartItems = items.map((item, index) => {
      if (items[index].text == name) {
        item.quantity += 1;
        setItemList(prev => {
          return prev.map(x => item.id==x.id? { ...x,...{quantity:item.quantity}}: x);
        })
        alreadyAdded = true;
        return item;
      } else {
        return item;
      }
    });
    if (alreadyAdded) {
      setItems(newCartItems);
    } else {
      const newItem = {
        id: id,
        text: name,
        quantity: 1,
        price: newPrice,
        description: newDescription,
        weight: weight,
        brand: brand,
        category: category,
        position: position,
      };
      setItems((prevItems) => {
        return [
          ...prevItems,
          newItem,
        ];
      });
      setItemList([...items, newItem].map(mapBackendItemToFrontendItem));
    }
  };

  const deleteItem = (text: string) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.text != text);
    })
    setItemList((prevItems) =>  {
      return prevItems.filter((item:Item) => item.name != text);
    })
  };

  const increaseQuantity = (text: string): void => {
    let newCartItems = items.map((item, index) => {
      if (items[index].text == text) {
        // console.log('Item name:' + items[index].text);
        // console.log('text:' + text);
        item.quantity += 1;
        console.log(item.quantity)
        console.log(itemList)
        setItemList(prev => {
                return prev.map(x => item.id==x.id? { ...x,...{quantity:item.quantity}}: x);
              })
        // var y = 
        // setItemList(itemList.map((x) => item.id==x.id? x.quantity=item.quantity: x) );
        return item;
      } else {
        // console.log('else');
        return item;
      }
    });
    setItems(newCartItems);
  };

  const decreaseQuantity = (text: string): void => {
    let newCartItems = items.map((item, index) => {
      if (items[index].text == text) {
        if (item.quantity != 0) {
          item.quantity -= 1;
          setItemList(prev => {
            return prev.map(x => item.id==x.id? { ...x,...{quantity:item.quantity}}: x);
          })
          return item;
        } else {
          return item;
        }
      } else {
        return item;
      }
    });
    setItems(newCartItems);
  };

  const getTotalPrice = () => {
    return items.reduce(
      (accumulator, current) => accumulator + current.price * current.quantity,
      0
    );
  };

  const getList = () => {
    return items;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.shoppingListButton}>
          <Text style={styles.shoppinListTex}> Shopping List</Text>
        </View>
        <View style={styles.recommendedButton}>
          <Text style={styles.recommendedText}>Recommended</Text>
        </View>
        <View style={styles.locationButton}>
          <Ionicons
            name="location-sharp"
            size={25}
            color={'#1F539A'}
            style={styles.locationIcon}
            //style={styles.buttonIcons}
          />
        </View>
      </View>
      <SearchBar
        items={items}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        deleteItem={deleteItem}
        getTotalPrice={getTotalPrice}
        addItem={addItem}
      />

      <ShoppingList
        items={items}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        deleteItem={deleteItem}
        getTotalPrice={getTotalPrice}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 0,
    backgroundColor: '#f5f6f7',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 25,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 78,
    width: '100%',
    padding: 0,
    backgroundColor: '#FFFFFF',
    borderBottomEndRadius: 10,
    borderBottomLeftRadius: 10,
  },
  shoppingListButton: {
    borderRadius: 50,
    backgroundColor: '#1E539A',
    marginTop: 23,
    height: 32,
    width: 119,
    justifyContent: 'center',
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  shoppinListTex: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 14,
  },
  recommendedText: {
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    fontSize: 14,
    marginRight: 8,
  },
  recommendedButton: {
    borderRadius: 50,
    borderColor: '#1E539A',
    borderWidth: 1,
    marginTop: 23,
    height: 32,
    width: 235,
    justifyContent: 'center',
    position: 'absolute',
    marginLeft: 20,
    backgroundColor: 'none',
  },
  locationButton: {
    justifyContent: 'center',
    alignSelf: 'flex-start',
    marginTop: 23,
    borderColor: '#1E539A',
    borderWidth: 1,
    position: 'absolute',
    borderRadius: 22,
    height: 31,
    width: 42,
    marginLeft: 310,
  },
  locationIcon: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
