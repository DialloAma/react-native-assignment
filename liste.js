import React from "react";
import { View, Text, SafeAreaView, Image, FlatList } from "react-native";
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';


export default function Liste() {
  let Info = [{ name: "diallo", tel: 56215931, profile:require("./assets/phot.jpg") },
  { name: "shai", tel: 16215931, profile:require("./assets/phot.jpg") },
  { name: "prince", tel: 26215931, profile:require("./assets/phot.jpg") },
  { name: "rolando", tel: 36215931, profile:require("./assets/phot.jpg") },
  { name: "diallo", tel: 46215931, profile:require("./assets/phot.jpg") }];
  return (
    <View>
    
    
        <FlatList data={Info} renderItem={({item})=>{
          return(
                  <Contact name={item.name} number={item.tel} image={item.profile}/>
          )
        }}
        keyExtractor={(item)=>item.tel}/>
        
        </View> 
  );
}

const Contact=(props)=>{
  return(
    <View style={{flexDirection:"row",marginHorizontal:30,alignItems:"center",marginVertical:10,borderStyle:"solid,"}}>
      <Image style={{width:50,height:50,borderRadius:50}} source={props.image}/>
      <View style={{marginHorizontal:10,justifyContent:"center",flex:3}}>
        <Text style={{fontSize:20, fontWeight:"bold"}}> {props.name}</Text>
        <Text> {props.number}</Text>
      </View>
      <View style={{flex:1}}>
      <Feather name="message-square" size={24} color="blue" />
      </View>
      <View style={{flex:1}}> 
         <FontAwesome name="phone" size={24} color="blue" />
         </View>
      <View style={{flex:1}}>
         <Fontisto name="more-v" size={24} color="blue" />
         </View>
    </View>
  )

}