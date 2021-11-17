import React from 'react'
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'

export default function Login() {
    return (
        
        <View style={{marginHorizontal:50,backgroundColor: 'white',marginTop:100}}>
            <ScrollView showsVerticalScrollIndicator={false}>
           <View style={{marginTop:20}}>
            <Text style={{fontSize:30,color:"#4aaaa5",textAlign:"center"}}>Sing Up</Text>
           </View>
           <View style={{marginTop:50 }}>
               <TextInput placeholder="User Name" style={{marginHorizontal:15, borderBottomWidth:2,marginVertical:20,padding:10,fontSize:20,borderColor:"#4aaaa5"}}/>
               <TextInput placeholder="Email" style={{marginHorizontal:15, borderBottomWidth:2,marginVertical:20,padding:10,fontSize:20,borderColor:"#4aaaa5"}}/>
               <TextInput placeholder="Password" secureTextEntry={true} style={{marginHorizontal:15, borderBottomWidth:2,marginVertical:20,padding:10,fontSize:20,borderColor:"#4aaaa5"}}/>
               <TextInput placeholder="Confirm password" secureTextEntry={true} style={{marginHorizontal:15, borderBottomWidth:2,marginVertical:20,padding:10,fontSize:20,borderColor:"#4aaaa5"}}/>
           </View>
           <View>
               <TouchableOpacity activeOpacity={0.5} style={{backgroundColor:"#4aaaa5",borderRadius:50,alignItems:"center",marginVertical:10,padding:10,marginHorizontal:50}}>
                   <Text style={{color:"white" ,fontSize:20}}>Sign Up</Text>
               </TouchableOpacity>
           </View>
           <View style={{flexDirection:"row" ,alignItems:"center", marginHorizontal:30,marginBottom:30}}>
               <Text>You already have an account ?</Text>
               <Text style={{color:"#4aaaa5",marginLeft:10}}>Login</Text>
           </View>
           </ScrollView>
        </View>
        
    )
}
