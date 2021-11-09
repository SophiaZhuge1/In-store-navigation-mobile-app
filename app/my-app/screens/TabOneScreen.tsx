import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import MapCanvas from '../map';
import MapList from '../components/MapList';
import { DataStoreContext } from '../App';

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  const [isMapEnabled, setIsMapEnabled] = React.useState(true);

  //getHelloWorld();

  return (
    <DataStoreContext.Consumer>
      {({ currentItemIndex, changeItemIndex }) => (
        <View style={styles.container}>
          <MapCanvas
            currentItemIndex={currentItemIndex}
            isMapEnabled={isMapEnabled}
          />
          <MapList setIsMapEnabled={setIsMapEnabled} />
        </View>
      )}
    </DataStoreContext.Consumer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#E8E8E8',
  },
});
