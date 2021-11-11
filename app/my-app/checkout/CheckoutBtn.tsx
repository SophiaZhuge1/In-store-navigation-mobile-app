import * as React from 'react';
import { Text, View } from '../components/Themed';
import { StyleSheet,Button ,TouchableOpacity } from 'react-native';
import { RootStackScreenProps } from '../types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootTabScreenProps } from '../types'
//import { useNavigation } from 'react-navigation/core';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack'; 


// const Stack = createNativeStackNavigator()
// function CheckoutNavigator() {
//   return (
//     <NavigationContainer>
//         <Stack.Navigator initialRouteName="Checkout">
//             <Stack.Screen name="Checkout" component={CheckoutScreen} options={{title: 'Checkout'}}/>
//         </Stack.Navigator>
//     </NavigationContainer>
//   );
// }  


function CheckoutBtn ({navigation}) {
    
    return (
            <TouchableOpacity style={styles.checkoutBtn} onPress={() => navigation.navigate('CheckoutScreen')}>
               <Text style={styles.t2}>Checkout</Text> 
               </TouchableOpacity>
      
    );
}


 
 
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
export default CheckoutBtn;