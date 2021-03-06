import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ShoppingList from '../shoppinglist';
import { BackgroundImage } from 'react-native-elements/dist/config';

interface FuncProps {
  name: string;
  id: number;
  quantity: number;
  description: string;
  weight: string;
  brand: string;
  increaseQuantity(text: string): void;
  decreaseQuantity(text: string): void;
  deleteItem(text: string): void;
}
const ListItem: React.FC<FuncProps> = (props) => {
  return (
    <View style={styles.listItem}>
      <View style={styles.listItemView}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={styles.icons}
            source={require('../assets/Icons/' + props.name + '.png')}
          />
          <View style={styles.itemDescription}>
            <Text>
              {props.brand + ' '}
              {props.name + ' '}
              {props.weight}
            </Text>
            <Text
              style={{
                fontSize: 10,
              }}
            >
              {props.description}
            </Text>
          </View>
        </View>
        <View style={styles.changeQuantities}>
          <TouchableHighlight
            onPress={() => props.increaseQuantity(props.name)}
            underlayColor="red"
            style={styles.listButtons}
          >
            <Ionicons
              name="add-outline"
              size={20}
              color={'white'}
              style={styles.buttonIcons}
            />
          </TouchableHighlight>
          <Text style={styles.quantityValue}>{props.quantity}</Text>
          <TouchableHighlight
            onPress={() => props.decreaseQuantity(props.name)}
            underlayColor="red"
            style={styles.listButtons}
          >
            <Ionicons
              name="remove-outline"
              size={20}
              color={'white'}
              style={styles.buttonIcons}
            />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => props.deleteItem(props.name)}
            underlayColor="red"
            style={styles.deleteButtons}
          >
            <Ionicons
              name="trash-outline"
              size={20}
              color={'white'}
              style={styles.buttonIcons}
            />
          </TouchableHighlight>
        </View>
        {/* <Text>Butts</Text> */}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
    alignSelf: 'stretch',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  changeQuantities: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    marginLeft: '65%',
  },
  listButtons: {
    borderColor: '#eee',
    margin: 0,
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: '#1E539A',
    width: 21,
    height: 21,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  deleteButtons: {
    borderColor: '#eee',
    margin: 0,
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: '#E62432',
    width: 36,
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  },
  quantityValue: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: 14,
    marginHorizontal: 5,
  },
  itemDescription: {
    justifyContent: 'space-between',
    alignSelf: 'flex-start',
    width: 200,
  },
  buttonIcons: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: 2,
    //backgroundColor:'#1E539A'
  },
  icons: {
    width: 20,
    height: 20,
    paddingRight: 0,
    marginRight: 4,
  },
});

export default ListItem;
