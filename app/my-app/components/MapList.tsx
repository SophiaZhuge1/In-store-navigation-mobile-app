import * as React from 'react';
import { Text, View } from './Themed';
import { StyleSheet } from 'react-native';
import * as RNSP from 'react-native-swipe-gestures';
import { Ionicons } from '@expo/vector-icons';
import { DataStoreContext } from '../App';

interface MapListProps {
  setIsMapEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}

const mapCategoryToColour = (category: string) => {
  switch (category.toLowerCase()) {
    case 'drinks':
      return '#FFC107';
    case 'nuts':
      return '#03A9F4';
    case 'eggs':
      return '#4CAF50';
    case 'fruits':
      return '#FF9800';
    case 'grain':
      return '#F44336';
    case 'cereal':
      return '#9C27B0';
    default:
      return '#FFC107';
  }
};

export default function MapList(props: MapListProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [isClicked, setIsClicked] = React.useState(false);
  const currentMockItem = {
    category: 'drinks',
  };
  const customStyle = () => {
    return {
      height: isExpanded ? '400px' : '130px',
      transition: 'height 0.5s',
    };
  };

  const handleClick = (
    currentItemIndex: number,
    changeItemIndex: (index: number) => void
  ) => {
    setIsClicked((isClicked) => !isClicked);
    changeItemIndex(currentItemIndex + 1);
  };

  return (
    <DataStoreContext.Consumer>
      {({ currentItemIndex, changeItemIndex }) => (
        <RNSP.default
          style={[styles.container, customStyle()]}
          onSwipeUp={(_) => setIsExpanded(true)}
          onSwipeDown={(_) => setIsExpanded(false)}
          onTouchStart={(_) => props.setIsMapEnabled(false)}
          onTouchEnd={(_) => props.setIsMapEnabled(true)}
        >
          <View style={styles.leftCol}>
            <Text style={styles.smallText}>General Shopping</Text>
            <Text style={styles.itemName}>Item {currentItemIndex}</Text>
            <Text style={styles.itemPosition}>Item Position Text</Text>
          </View>
          <View style={styles.rightCol}>
            <Ionicons
              onClick={() => handleClick(currentItemIndex, changeItemIndex)}
              name={isClicked ? 'checkmark-circle' : 'checkmark-circle-outline'}
              size={63}
              style={styles.checkmark}
              color={mapCategoryToColour(currentMockItem.category)}
            />
          </View>
        </RNSP.default>
      )}
    </DataStoreContext.Consumer>
  );
}

const styles = StyleSheet.create({
  checkmark: {
    marginTop: '20px',
    marginLeft: 'auto',
    marginRight: '25px',
    marginBottom: 'auto',
  },
  container: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '100%',
    bottom: '81px',
    paddingTop: '10px',
    paddingLeft: '20px',
    flexDirection: 'row',
    flex: 1,
    position: 'absolute',
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
  },
  itemPosition: {
    fontSize: 18,
    fontWeight: '600',
    color: '#A456E3',
    marginVertical: '10px',
  },
});
