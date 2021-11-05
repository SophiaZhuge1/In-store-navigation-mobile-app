import * as React from 'react';
import { Text, View } from '../components/Themed';
import { StyleSheet,Button  } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default function CollectItem ({shoppingList}:{shoppingList:any}) {
    console.log(shoppingList[0])
    console.log(shoppingList[0].isCollected)
    // const [isCollected, setCollected] = React.useState(true);
    var currentItem = shoppingList[0]
    return (
        // <View style={{alignItems:"stretch", justifyContent:"flex-end"}}>
        <View style={styles.c} >
          <View >
           <Text style={styles.c1}>General Shopping</Text>
         </View>
          <View style={styles.c2}>
           <View style={styles.c3}>
             <Text style={styles.t2}>{shoppingList[0].name}</Text>
             <Text>Direction</Text>
           </View>
           
           <View style={styles.c4}>
           {/* { true?
            (<Ionicons name="checkmark-circle-outline"size={32} color="blue" 
            />):(<Ionicons name="checkmark-circle"size={32} color="blue" 
            />)} */}
            <Ionicons name={!currentItem.isCollected?"checkmark-circle-outline":"checkmark-circle"}size={32} color="blue" />

         </View>
        </View>
      </View>
    //   </View>
    );}
const styles = StyleSheet.create({
    t1:{
        fontSize:10,
    },
    t2:{
        fontSize:30,
    },
    
    
    c:{ 
        position:"absolute",
        bottom:0,
        flex:1, 
        borderWidth:1,
        borderTopLeftRadius:100/4,
        borderTopRightRadius:100/4,
        padding:10,
        width:"100%",
        
    },
    c1:{
        flexDirection:"row",
        borderWidth:1,
    },
    c2:{ 
        borderWidth:1,
        flexDirection:"row",
        justifyContent: "space-between",
        marginTop:5, 
    },
    
    c3:{
        flex:3,
    },
    c4:{
    justifyContent:"center",
    flex:2,
    },
}) 