import * as React from 'react';
import { Text, View } from '../components/Themed';
import { StyleSheet,FlatList  } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default function CollectList ({shoppingList,toggleCollect, toCollect}) {
    const list = shoppingList.filter
    return (
        // <View style={{alignItems:"stretch", justifyContent:"flex-end"}}>
        <View style={styles.c5} >
            <FlatList data={shoppingList.filter((item)=> item.isCollected ===false)} renderItem={({item}) => (
                <View style={styles.c2}>
                    <View style={styles.c3}>
                        <Text style={styles.t2}>{item.name}</Text>
                    </View>
                    <View style={styles.c4}>
                        <Ionicons name={!item.isCollected?"checkmark-circle-outline":"checkmark-circle"}size={30} onPress={()=>toggleCollect(item.id)} color="blue" />
                    </View>
                </View>
            )}/>
            <FlatList data={shoppingList.filter((item)=> item.isCollected ===true)} renderItem={({item}) => (
                <View style={styles.c2}>
                    <View style={styles.c3}>
                        <Text style={styles.t2}>{item.name}</Text>
                    </View>
                    <View style={styles.c4}>
                        {item.isCollected?
                         (<Text style={styles.t1} onPress={()=>toggleCollect(item.id)}>Collected</Text>):
                        (<Ionicons name={!item.isCollected?"checkmark-circle-outline":"checkmark-circle"}size={30} onPress={()=>toggleCollect(item.id)} color="blue" />)
                        }
                    </View>
                </View>
            )}/>
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
    
    c5:{ 
        borderWidth:1,
        bottom:0,
        paddingLeft:25,
        paddingRight:20,
        //paddingTop:5,
        paddingBottom:10,
        // flex:1, 
        justifyContent: "space-end",
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