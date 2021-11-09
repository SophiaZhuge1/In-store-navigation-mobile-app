import * as React from 'react';
import { Text, View } from '../components/Themed';
import { StyleSheet,Button ,TouchableHighlight } from 'react-native';

export default function Checkout ({shoppingList}) {
    //console.log(shoppingList)
    const [total,setTotal] = React.useState(0)
    var sum =0
    const currentItem = shoppingList.filter((item) => {
        if (item.isCollected === true)
            sum += item.price

    })
    return (
        <View style={styles.c} >
            <View style={styles.price}>
                <View  style={{ backgroundColor:"none",}}><Text style={styles.t}>Total Price</Text></View>
                <View style={{ backgroundColor:"none",}}><Text style={styles.t1} >£{sum.toFixed(2)}</Text></View>
            </View>
            <View style={styles.checkoutBtn}>
               <Text style={styles.t2}>Checkout</Text> 
            </View>
      </View>
    );}
const styles = StyleSheet.create({
    t:{
        color:"white",
        fontSize:12,
        fontWeight:"500",
    },
    t1:{
        color:"white",
        fontSize:20,
        fontWeight:"600",
    },
    t2:{
        color:"white",
        fontSize:20,
        fontWeight:"600",
    },
    c:{ 
        ///flex:1,
        //borderWidth:1,
        backgroundColor:"blue",
        borderRadius:100/9,
        margin:10,
        padding:8,
        //width:"100%",
        //margin:5,  
        flexDirection:"row",
        justifyContent:"space-between",   
    },
    price:{
        flexDirection:"column",
        backgroundColor:"none", 
        paddingLeft:15,
        flex:1,
    },
    checkoutBtn:{
        backgroundColor:"none",
        borderRadius:100/8,
        padding:5,
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
    
}) 