import React from 'react';
import { View, Text } from './Themed';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { mapCategoryToColour } from '../helpers';
import { DataStoreContext } from '../store';
import { Item } from '../apptypes';

interface Props {
  currentItemIndex: number;
  changeItemIndex: (index: number) => void;
}

export default function PullUpContent(props: Props) {
  const { currentItemIndex, changeItemIndex } = props;
  const [isClicked, setIsClicked] = React.useState(false);

  const { itemList, setItemList, toggleCollect } =
    React.useContext(DataStoreContext);

  const currentItem =
    currentItemIndex < itemList.length ? itemList[currentItemIndex] : null;
  
  console.log(currentItem);

  const moveToNextItem = () => {
    changeItemIndex(currentItemIndex + 1);
    toggleCollect(currentItemIndex);
    setIsClicked(false);
  };

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(moveToNextItem, 500);
  };

  const positionMapping = ['Bottom Shelf', 'Middle Shelf', 'Top Shelf'];

  return (
    <View style={styles.topPart}>
      <View style={styles.leftCol}>
        <Text style={styles.smallText}>General Shopping</Text>
        <Text style={styles.itemName}>
          {currentItem ? currentItem.name : 'Heading to checkout'}
        </Text>
        <Text style={styles.itemPosition}>
          {currentItem ? positionMapping[currentItem.position - 1] : ''}
        </Text>
      </View>
      <View style={styles.rightCol}>
        <Ionicons
          onClick={handleClick}
          name={isClicked ? 'checkmark-circle' : 'checkmark-circle-outline'}
          size={63}
          style={styles.checkmark}
          color={mapCategoryToColour(currentItem ? currentItem.category : '')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topPart: {
    paddingTop: '10px',
    paddingLeft: '20px',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  leftCol: {
    backgroundColor: 'white',
  },
  rightCol: {
    backgroundColor: 'white',
    width: '50%',
    marginLeft: '20px',
    flex: 1,
  },
  smallText: {
    fontSize: 14,
    marginVertical: '10px',
    fontWeight: '600',
    color: '#555555',
  },
  itemName: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: '10px',
    color: 'black',
    maxWidth: '200px',
  },
  itemPosition: {
    fontSize: 18,
    fontWeight: '600',
    color: '#A456E3',
    marginVertical: '10px',
  },
  checkmark: {
    marginTop: '20px',
    marginLeft: 'auto',
    marginRight: '25px',
    marginBottom: 'auto',
  },
});
