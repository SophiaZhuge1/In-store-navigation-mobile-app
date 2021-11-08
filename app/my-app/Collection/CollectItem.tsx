import * as React from 'react';
import { Text, View } from '../components/Themed';
import { StyleSheet,Button  } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default function CollectItem ({shoppingList,toggleCollect, toCollect}) {
    console.log(shoppingList)
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
                        <Ionicons name={!currentItem.isCollected?"checkmark-circle-outline":"checkmark-circle"}size={70} onPress={()=>toggleCollect(currentItem.id)} color="blue" />
                    </View>
                </View>):
                (<View style={{alignItems:"center"}}>
                    <Text style={styles.t2}>Completed</Text>
                </View>)
                }
      </View>
    );}
const styles = StyleSheet.create({
    t1:{
        fontSize:15,
        fontWeight:"600",
        color:"#454545",
    },
    t2:{
        fontSize:30,
        fontWeight:"bold"
    },
    t3:{
        fontSize:20,
        fontWeight:"600",
        color:"blue",
    },
    
    c:{ 
        borderWidth:1,
        //position:"absolute",
        //bottom:0,
        flex:1, 
        justifyContent: "space-between",
        borderTopLeftRadius:100/2.5,
        borderTopRightRadius:100/2.5,
        paddingLeft:25,
        paddingRight:20,
        paddingTop:15,
        paddingBottom:10,
        width:"100%",
        
    },
    c1:{
        //paddingTop:10,
        flexDirection:"row",
    },
    c2:{ 
        //borderWidth:1,
        flexDirection:"row",
        marginTop:5, 
    },
    
    c3:{
        //borderWidth:1,
        flex:3,
        justifyContent: "space-evenly",
    },
    c4:{
        //borderWidth:1,
        justifyContent:"center",
        alignItems:"center",
        flex:2,
    },
}) 