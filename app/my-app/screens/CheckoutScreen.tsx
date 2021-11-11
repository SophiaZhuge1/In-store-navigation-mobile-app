import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import ShoppingList from '../shoppinglist';
import { Ionicons } from "@expo/vector-icons";

export default function CheckoutScreen({navigation}) {
  return (
    <View style={styles.container}>
      
        <View style={styles.c}>
          <View style={{alignItems:"center"}}>
            <Text style={styles.t}>Total price</Text>
          </View>
          <View >
          <Text style={styles.total}>£15.40</Text>
          </View>
        </View>
        <View style={styles.c1}>
        <View style={styles.row}>
          <View style={styles.c2}>
            <Text style={styles.summary}>No. of items</Text>
          </View>
          <View style={styles.c3}>
            <Text style={styles.values}>5</Text>
          </View>
        </View>
        <View style={styles.row}>
        <View style={styles.c2}>
          <Text style={styles.summary}>Clubcard points</Text>
        </View>
        <View style={styles.c3}>
          <Text style={styles.values}>15</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.c2}>
          <Text style={styles.summary}>Total savings</Text>
        </View>
        <View style={styles.c3}>
          <Text style={styles.values}>£4.20</Text>
        </View>
      </View>
      <View style={styles.row}>
          <View style={styles.c2}>
            <Text style={styles.totalText}>Total</Text>
          </View>
          <View style={styles.c3}>
            <Text style={styles.values}>£15.40</Text>
          </View>
        </View>
        
      </View>
      <View style={styles.btns}>
        <View style={styles.tillBtn}>
          <TouchableOpacity onPress={() => navigation.navigate('PayScreen')}>
            <Text style={styles.btnText}>Pay at till</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.payBtn}>
          <TouchableOpacity>
            
            <Text style={styles.btnText}><Ionicons color="white" name="logo-apple"size={20}></Ionicons>Pay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    //height:"100%",
    alignItems: 'center',
    justifyContent: "space-between",
    padding:25,
    flexDirection:"column"
    
  },
  c:{
    alignItems:"center",
    justifyContent:"flex-end",
    //padding:20,
    flex:2,
    borderBottomWidth:1,
    borderColor:"#f2f2f2",
    //borderWidth:1,
    width:"100%",
    paddingTop:40,
    paddingBottom:10,
    
  },
  c1:{
    //alignItems: 'center',
    //ustifyContent:"center",
    //borderWidth:1,
    width:"100%",
    marginTop:70,
    flex:3,
  },
  
  btns:{
    //borderWidth:1,
    flexDirection:"row",
    justifyContent:"space-between",
    width:"100%",
    marginBottom:40,
    paddingVertical:30,
    //paddingHorizontal:10
    //sflex:2,

    //alignItems:"center",
  },
  c2:{
    
    flex:3,
  },
  c3:{
    
    flex:1,
    justifyContent:"flex-end",
    alignItems:"flex-end",
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  totalText:{
    color:"black",
    fontSize:25,
    fontWeight:"500",
  },

  total:{
    padding:20,
    fontSize:50,
    color:"#1e539a",
    fontWeight:"700",
  },
  t:{
    fontSize:18,
    fontWeight:"400",
  },
  summary:{
    //borderWidth:1,
    fontSize:20,
    fontWeight:"500",
    color:"grey",
    
  },
  values:{
    fontSize:25,
    color:"#1e539a",
    fontWeight:"600",
    
  },
  row:{
    
    borderTopWidth:1,
    borderColor:"#f2f2f2",
    width:"100%",
    justifyContent:"space-between",
    flexDirection:"row",
    paddingTop:15, 
    paddingBottom:15,
  },
  tillBtn:{
    
    paddingHorizontal:25,
    paddingVertical:15,
    backgroundColor:"#1e539a",
    borderRadius:100/8,
    alignItems:"center",
    justifyContent:"center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    width:150,
    //borderWidth:1,
  },
  payBtn:{
    justifyContent:"center",
    paddingHorizontal:25,
    paddingVertical:20,
    backgroundColor:"black",
    borderRadius:100/8,
    alignItems:"center",
    width:150,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    
    
    
  },
  
  btnText:{
    color:"white",
    fontSize:20,
    fontWeight:"500",
    
    
  }
});
