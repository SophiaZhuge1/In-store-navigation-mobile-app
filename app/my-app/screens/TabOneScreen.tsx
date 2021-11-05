import * as React from 'react';
import { StyleSheet } from 'react-native';


import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const [data, setData] = React.useState('');
  async function getHelloWorld() {
    const response = await fetch('http://localhost:8000/');
    let res = await response.text();
    setData(res);
  }

  //getHelloWorld();

  return (

    <View style={styles.container}>
      {/* <Text style={styles.title}>{data}</Text> */}
      <Text style={styles.title}>Goddam it</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
