import * as React from 'react';
import * as RNSP from 'react-native-swipe-gestures';
import List from './List';
import { DataStoreContext } from '../store';
import { Ionicons } from '@expo/vector-icons';
import { mapCategoryToColour } from '../helpers';
import { StyleSheet } from 'react-native';
import { Text, View } from './Themed';
import PullUpContent from './PullUpContent';

interface MapListProps {
  setIsMapEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MapList(props: MapListProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const customStyle = () => {
    return {
      height: isExpanded ? '330px' : '130px',
      transition: 'height 0.5s',
    };
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
          <PullUpContent
            currentItemIndex={currentItemIndex}
            changeItemIndex={changeItemIndex}
          ></PullUpContent>
          <List></List>
        </RNSP.default>
      )}
    </DataStoreContext.Consumer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '100%',
    bottom: '81px',
    flexDirection: 'column',
    flex: 1,
    position: 'absolute',
  },
});
