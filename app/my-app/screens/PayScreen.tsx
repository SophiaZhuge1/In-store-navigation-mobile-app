import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import ShoppingList from '../shoppinglist';
import { Ionicons } from "@expo/vector-icons";
import { Image } from 'react-native';


export default function PayScreen() {
    return (
        <View style={styles.container}>
          <View style={styles.c}>
              <Text style={styles.t1}>Scan the barcode below at the checkout</Text>
          </View>
          <View style={styles.c1}>
          <Image source={require('../checkout/barcode.png' )}/>
          </View>
          <View style={styles.c}>
              <Text style={styles.t2}>Once scanned please follow the instructions on the checkout screen</Text>
          </View>
          <View style={styles.c2}>
            <View style={styles.finishedBtn}>
              <TouchableOpacity>
                
                <Text style={styles.t3}>Finished</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        //height:"100%",
        alignItems: 'center',
        //justifyContent: "space-between",
        padding:25,
        flex:1,
        flexDirection:"column",
        width:"100%"
        
      },
      c:{
        //justifyContent:"center",
        width:"100%",
        borderWidth:1,
        padding:70,
        alignItems:"center",
      },
      c1:{
        borderWidth:1,
      },
      c2:{
        width:"100%",
        borderWidth:1,
        paddingVertical:30,
      },
      t1:{
        fontSize:16,
        fontWeight:"600",
        textAlign: 'center',
      },
      t2:{
        fontSize:12,
        fontWeight:"400",
        textAlign: 'center',
      },
      t3:{
          color:"white",
          fontWeight:"600",
          fontSize:16,
          textAlign: 'center',
      },
      finishedBtn:{
        
        borderWidth:1,
        backgroundColor:"#1e539a",
        borderRadius:100/12,
        paddingVertical:10,
        //alignItems:"center",
        justifyContent:"center",
        paddingHorizontal:5,
        //paddingVertical:5,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        
        
        
      },
    });