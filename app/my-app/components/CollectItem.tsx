import * as React from 'react';
import { Text, View } from './Themed';
import { StyleSheet } from 'react-native';
export default function CollectItem() {
    // const [isCollected, setCollected] = React.useState(true);
    
    return (
        <View style={{width:"100%"}}>
        <View style={styles.c} >
          <View >
           <Text style={styles.c1}>General Shopping</Text>
         </View>
          <View style={styles.c2}>
           <View style={styles.c3}>
             <Text style={styles.t2}>Rice</Text>
             <Text>Diection</Text>
           </View>
           
           <View style={styles.c4}>
            {/* <Button
               type="Outline"
               
             
              onPress={() => setCollected(!isCollected)}
              title={isCollected ? "Collected"  :"NotCollected"  }      
            /> */}
         </View>
        </View>
      </View></View>
    );}
const styles = StyleSheet.create({
    t1:{
        fontSize:10,
    },
    t2:{
        fontSize:30,
    },
    
    
    c:{ 
        flex:1, 
        borderWidth:1,
        borderTopLeftRadius:100/4,
        borderTopRightRadius:100/4,
        backgroundColor:"blue",
        padding:10,
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