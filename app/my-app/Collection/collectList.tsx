import * as React from 'react';
import { Text, View } from '../components/Themed';
import {
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Item, Items } from '../apptypes';

export default function CollectList({
  shoppingList,
  toggleCollect,
}: {
  shoppingList: Items;
  toggleCollect: (id: number) => void;
}) {
  return (
    // <View style={{alignItems:"stretch", justifyContent:"flex-end"}}>
    <View style={styles.c5}>
      <ScrollView style={styles.scrollList}>
        <FlatList
        scrollEnabled={false}
          data={shoppingList
            .filter((item) => item.isCollected === false)
            .slice(1)}
          renderItem={({ item }) => (
            <View style={styles.c2}>
              <View style={styles.c3}>
                <Text style={styles.t1}>{item.name}</Text>
              </View>
              <View style={styles.c4}>
                <Ionicons
                  name={
                    !item.isCollected
                      ? 'checkmark-circle-outline'
                      : 'checkmark-circle'
                  }
                  size={30}
                  onPress={() => toggleCollect(item.id)}
                  color="blue"
                />
              </View>
            </View>
          )}
        />
        <FlatList
          scrollEnabled={false}
          data={shoppingList.filter((item) => item.isCollected === true)}
          renderItem={({ item }) => (
            <View style={styles.c2}>
              <View style={styles.c3}>
                <Text style={styles.t1}>{item.name}</Text>
              </View>
              <View style={styles.c4}>
                <TouchableOpacity>
                  {item.isCollected ? (
                    <Text
                      style={styles.t2}
                      onPress={() => toggleCollect(item.id)}
                    >
                      Collected
                    </Text>
                  ) : (
                    <Ionicons
                      name={
                        !item.isCollected
                          ? 'checkmark-circle-outline'
                          : 'checkmark-circle'
                      }
                      size={30}
                      onPress={() => toggleCollect(item.id)}
                      color="blue"
                    />
                  )}
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  t2: {
    fontSize: 15,
    fontWeight: '600',
    color: '#454545',
  },
  t1: {
    fontSize: 15,
    fontWeight: '400',
    color: '#3b3b3b',
  },
  t3: {
    fontSize: 20,
    fontWeight: '600',
    color: 'blue',
  },
  scrollList: {
    //borderWidth:1,
    padding: 0,
    margin: 0,
    backgroundColor: 'white',
    height: 130,
  },

  c5: {
    //borderWidth:1,
    bottom: 0,
    paddingLeft: 20,
    paddingRight: 20,
    //paddingTop:5,
    //paddingBottom:10,
    flex: 2,
    //justifyContent: "space-between",
    //width:"100%",
    backgroundColor: 'white',
    height: 130
  },

  //List Row
  c1: {
    //paddingTop:10,
    flexDirection: 'row',
    backgroundColor: 'white',
  },

  c2: {
    //borderWidth:1,
    height: 40,
    paddingTop: 6,
    flexDirection: 'row',
    marginTop: 5,
    borderTopWidth: 1,
    borderTopColor: '#f0f1f2',
    backgroundColor: 'white',
  },

  c3: {
    //borderWidth:1,
    flex: 3,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  c4: {
    //borderWidth:1,
    backgroundColor: 'white',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 20,
    flex: 2,
  },
});
