import * as React from 'react';
import { Text, View } from '../components/Themed';
import { StyleSheet,Button ,TouchableHighlight } from 'react-native';

export default function Checkout ({shoppingList}) {
    console.log(shoppingList)
    const sum = 9
    const currentItem = shoppingList.filter((item) => {
        if (item.isCollected === true)
            sum + 1

    })
    return (
        <View style={styles.c} >
            <View style={{flexDirection:"column"}}>
                <View> <Text>Total Price:</Text></View>
                <View><Text>£{sum/1}</Text></View>
            </View>
            <View style={styles.checkoutBtn}>
               <Text>Checkout</Text> 
            </View>
      </View>
    );}
const styles = StyleSheet.create({
    c:{ 
        ///flex:1,
        borderWidth:1,
        backgroundColor:"blue",
        borderRadius:100/9,
        margin:5,
        padding:5,
        //width:"100%",
        //margin:5,  
        flexDirection:"row",
        justifyContent:"space-between",   
    },
    checkoutBtn:{
        
        borderRadius:100/8,
        padding:5,
    }
    
}) 