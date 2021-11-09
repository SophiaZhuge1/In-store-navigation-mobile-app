import * as React from 'react';
import { Text, View } from './Themed';
import { StyleSheet } from 'react-native';
import * as RNSP from 'react-native-swipe-gestures';

interface MapListProps {
  setIsMapEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MapList(props: MapListProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const customStyle = () => {
    return {
      height: isExpanded ? '400px' : '150px',
      transition: 'height 0.5s',
    };
  };
  return (
    <RNSP.default
      style={[styles.container, customStyle()]}
      onSwipeUp={(_) => setIsExpanded(true)}
      onSwipeDown={(_) => setIsExpanded(false)}
      onTouchStart={(_) => props.setIsMapEnabled(false)}
      onTouchEnd={(_) => props.setIsMapEnabled(true)}
    >
      <View>
        <Text style={styles.smallText}>General Shopping</Text>
        <Text style={styles.itemName}>Item 1</Text>
        <Text style={styles.itemPosition}>Item Position Text</Text>
      </View>
      <View style={styles.rightCol}>
        <Text style={{color: '#A456E3'}}>SampleText</Text>
      </View>
    </RNSP.default>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '100%',
    height: '200px',
    bottom: '81px',
    paddingTop: '10px',
    paddingLeft: '20px',
    flexDirection: 'row',
    flex: 1,
    position: 'absolute',
  },
  rightCol: {
    marginLeft: '20px',
    paddingTop: '50px',
  },
  smallText: {
    fontSize: 10,
    marginVertical: '10px',
  },
  itemName: {
    fontSize: 30,
    marginVertical: '10px',
  },
  itemPosition: {
    fontSize: 20,
    color: '#A456E3',
    marginVertical: '10px',
  },
});
