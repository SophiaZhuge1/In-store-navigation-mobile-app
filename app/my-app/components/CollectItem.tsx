import * as React from 'react';
import { Text, TextProps } from './Themed';

Const collecttItem = () => {
    return(
        <View>
            <Text>Rice</Text>
        </View>
    )
};

const [isCollected, setCollected] = useState(true);
  return (
    <View style={{padding:10}} >
      <View style={styles.c1} >
       <Text>General Shopping</Text>
       
        <View style={styles.c2}>
         <View style={styles.c3}>
           <Text style={styles.t1}>Rice</Text>
           <Text>Diection</Text>
         </View>
         
         <View style={styles.c4}>
           <Button
             type="Outline"
           
            onPress={() => setCollected(!isCollected)}
            title={isCollected ? "Collected"  :"NotCollected"  }      
            />
         </View>
       </View>
      </View>
    </View>
        );
}
const styles = StyleSheet.create({
  t1:{
    fontSize:30,
  },
  c1:{ 
    flex:1, 
    borderTopLeftRadius:100/6,
    borderTopRightRadius:100/6,
    borderWidth:1,
    padding:10,
 },
 
 c2:{ 
     borderWidth:1,
    flexDirection:"row",
    justifyContent: "space-between",
    padding:5,  
 
  },
  
  c3:{
      borderWidth:1,
      flex:3,
      padding:5,  
  },
  c4:{
    borderWidth:1,
    flex:2,
  },
  b1:{
    borderRadius:100,
    
  }
})