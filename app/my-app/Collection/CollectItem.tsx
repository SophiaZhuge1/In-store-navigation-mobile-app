import * as React from 'react';
import { Text, View } from '../components/Themed';
import { StyleSheet,TouchableOpacity  } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default function CollectItem ({shoppingList,toggleCollect, }) {
    //console.log(shoppingList)
    const currentItem = shoppingList.filter((item) => item.isCollected === false)[0]
    return (
        <View style={styles.c} >
            <View style={styles.c1}>
                <Text style={styles.t1}>General Shopping</Text>
            </View>
                {currentItem != undefined?
                (<View style={styles.c2}>
                    <View style={styles.c3}>
                        <Text style={styles.t2}>{currentItem.name}</Text>
                        <Text style={styles.t3}>Directions</Text>
                    </View>
                    <View style={styles.c4}>
                        <TouchableOpacity>
                            {/* <Ionicons name={!currentItem.isCollected?"checkmark-circle-outline":"checkmark-circle"}size={60} onPress={()=>toggleCollect(currentItem.id)} color="blue" /> */}
                            <Ionicons name={!onmouseover?"checkmark-circle-outline":"checkmark-circle"}size={60} onPress={()=>toggleCollect(currentItem.id)} color="blue" />

                        </TouchableOpacity>
                    </View>
                </View>):
                (<View style={{alignItems:"center",padding:10}}>
                    <Text style={styles.t2}>Completed</Text>
                </View>)
                }
      </View>
    );}
const styles = StyleSheet.create({
    t1:{
        fontSize:14,
        fontWeight:"600",
        color:"#454545",
    },
    t2:{
        fontSize:25,
        fontWeight:"bold",
        marginBottom:2,
    },
    t3:{
        fontSize:18,
        fontWeight:"600",
        color:"blue",
    },
    
    c:{ 
        //borderWidth:1,

        overflow:"hidden",
        //position:"absolute",
        //bottom:0,
        flex:2, 
        borderTopLeftRadius:100/3,
        borderTopRightRadius:100/3,
        paddingLeft:20,
        paddingRight:20,
        paddingTop:15,
        //paddingBottom:10,
        //width:"100%",
        
    },
    c1:{
        //borderWidth:1,
        //paddingTop:10,
        flexDirection:"row",
    },
    c2:{ 
        //borderWidth:1,
        flexDirection:"row",
        //marginTop:5, 
    },
    
    c3:{
        //borderWidth:1,
        flex:3,
        justifyContent:"center",
    },
    c4:{
        //borderWidth:1,
        backgroundColor:"none",
        justifyContent:"center",
        alignItems:"center",
        flex:2,
    },
}) 