import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

export default function Login() {
    return (
        <View style={{marginHorizontal:50}}>
           <View>
            <Text style={{fontSize:30,color:"#4aaaa5",textAlign:"center"}}>Sing Up</Text>
           </View>
           <View style={{marginTop:50 }}>
               <TextInput placeholder="User Name" style={{ borderBottomWidth:2,marginVertical:20,padding:10,fontSize:20,borderColor:"#4aaaa5"}}/>
               <TextInput placeholder="Email" style={{ borderBottomWidth:2,marginVertical:20,padding:10,fontSize:20,borderColor:"#4aaaa5"}}/>
               <TextInput placeholder="Password" style={{ borderBottomWidth:2,marginVertical:20,padding:10,fontSize:20,borderColor:"#4aaaa5"}}/>
               <TextInput placeholder="Confirm password" style={{ borderBottomWidth:2,marginVertical:20,padding:10,fontSize:20,borderColor:"#4aaaa5"}}/>
           </View>
           <View>
               <TouchableOpacity style={{backgroundColor:"#4aaaa5",borderRadius:50,alignItems:"center",marginVertical:10}}>
                   <Text>Sign Up</Text>
               </TouchableOpacity>
           </View>
           <View>
               <Text>You already have an account ?</Text>
               <Text>Login</Text>
           </View>
        </View>
    )
}
