import * as React from 'react';
import { Text, View } from '../components/Themed';
import { StyleSheet,Button ,TouchableHighlight } from 'react-native';

export default function Checkout ({shoppingList}) {
    console.log(shoppingList)
    const sum = 0
    const currentItem = shoppingList.filter((item) => {
        if (item.isCollected === true)
            sum + 1

    })
    return (
        <View style={styles.c} >
            <View style={{flexDirection:"row",justifyContent:"space-between", backgroundColor:"blue",}}>
            <View>
                <Text>Total Price:£{sum}</Text>
            </View>
            <View style={styles.checkoutBtn}>
               <Text>Checkout</Text> 
            </View>
            </View>
      </View>
    );}
const styles = StyleSheet.create({
    c:{ 
        borderWidth:1,
        flex:1, 
        backgroundColor:"blue",
        borderRadius:100/8,
        padding:10,
        width:"100%",
        margin:5,
        
    },
    checkoutBtn:{
        borderRadius:100/2.5,
        padding:5,
    }
    
}) 