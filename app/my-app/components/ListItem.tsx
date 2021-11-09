import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface FuncProps{
    name:string;
    id:number;
    quantity:number;
    increaseQuantity(id:number):void;
    decreaseQuantity(id:number):void;
    deleteItem(id:number):void;
}
const ListItem: React.FC<FuncProps>= (props) =>{
    return(
        <View style = {styles.listItem}>
            <View style = {styles.listItemView}>
                <View style= {styles.itemDescription}>
                    <Text>{props.name}</Text>
                    <Text style={{
                        fontSize: 10
                    }}
                    >Description</Text>
                </View>
                <View style = {styles.changeQuantities}>
                    <TouchableHighlight onPress={()=>props.increaseQuantity(props.id)} underlayColor="red">
                        <Ionicons
                            name="add-outline"
                            size={30}
                            color={"black"}
                            style={styles.listButtons}
                        />
                    </TouchableHighlight>
                        <Text style = {styles.quantityValue}>{props.quantity}</Text>
                    <TouchableHighlight onPress={()=>props.decreaseQuantity(props.id)} underlayColor="red">
                        <Ionicons
                            name="remove-outline"
                            size={30}
                            color={"black"}
                            style={styles.listButtons}
                        />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>props.deleteItem(props.id)} underlayColor="red">
                        <Ionicons
                            name="trash-outline"
                            size={30}
                            color={"red"}
                            style={styles.listButtons}
                        />
                    </TouchableHighlight>
                </View>
                {/* <Text>Butts</Text> */}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    listItem:{
        padding:15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee',
        alignSelf:"stretch"
    },
    listItemView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    changeQuantities:{
        alignSelf:"flex-end",
        flexDirection: 'row',
        justifyContent: 'center',
    },
    listButtons:{
        borderColor: '#eee',
        margin:0,
        borderWidth: 1
    },
    quantityValue:{
        alignSelf:'center',
        flexDirection: 'row',
        justifyContent: 'center',
        fontSize:20,
        marginHorizontal:5
    },
    itemDescription:{
        justifyContent: "space-between"
    }

});

export default ListItem;