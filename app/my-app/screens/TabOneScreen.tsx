import * as React from 'react';
import { StyleSheet } from 'react-native';


import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types'
import MapCanvas from '../map';
import CollectItem from '../Collection/CollectItem';
import CollectList from '../Collection/CollectList';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [shoppingList,setShoppingList] = React.useState([
		{id:0, name:'Rice', isCollected:false},
		{id:1, name:'Milk',isCollected:false},
    {id:2, name:'Bread',isCollected:false},
    {id:3, name:'Sugar',isCollected:false},
  ])
  const [data, setData] = React.useState('');
  async function getHelloWorld() {
    const response = await fetch('http://localhost:8000/');
    let res = await response.text();
    setData(res);
  }
  const toggleCollect = (id) => {
    setShoppingList(prev => {
      return prev.map(item =>
        item.id === id ? {id, name: item.name, isCollected:!item.isCollected} : item
      );
    })
  }
  //getHelloWorld();

  return (

    <View style={styles.container}>
      {/* <Text style={styles.title}>{data}</Text> */}
      
      <MapCanvas />

      <View style={{backgroundColor:"none",justifyContent:"flex-end",bottom:40, width:"100%", flexDirection:"column"}}>

      <CollectItem  shoppingList ={shoppingList}  toggleCollect={toggleCollect}/>
        
      <CollectList shoppingList ={shoppingList} toggleCollect={toggleCollect}/>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
});
