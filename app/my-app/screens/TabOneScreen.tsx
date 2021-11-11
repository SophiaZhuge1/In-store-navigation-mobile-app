import * as React from 'react';
import MapCanvas from '../map';
import MapList from '../components/MapList';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { DataStoreContext } from '../store';
import { RootTabScreenProps } from '../types';
import { Text, View } from '../components/Themed';
import Stack from '../Collection/Stack';
import { NavigationScreenProp } from 'react-navigation';

interface props {
  navigation: NavigationScreenProp<any, any>;
}

// Emanuel Code
export default function TabOneScreen({ navigation }: props) {
  const [isMapEnabled, setIsMapEnabled] = React.useState(true);
  const [isPathLoaded, setIsPathLoaded] = React.useState(false);
  // console.log(navigation, 'tabonescreennav')

  //getHelloWorld();

  return (
    <DataStoreContext.Consumer>
      {({ currentItemIndex, changeItemIndex }) => (
        <View style={styles.container}>
          {!isPathLoaded ? (
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                flex: 1,
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'center',
                zIndex: 1,
              }}
            >
              <ActivityIndicator size="large" color="#1E539A" />
              <Text style={{ marginTop: 10 }}>
                Calculating optimal path for your route
              </Text>
            </View>
          ) : null}
          <MapCanvas
            currentItemIndex={currentItemIndex}
            isMapEnabled={isMapEnabled}
            setIsPathLoaded={setIsPathLoaded}
          />
          <MapList navigation={navigation} setIsMapEnabled={setIsMapEnabled} />
        </View>
      )}
    </DataStoreContext.Consumer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'silver',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#E8E8E8',
  },
});
