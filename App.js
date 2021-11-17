import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Liste from './liste';
import Login from './Login';
//import Profile from './.expo/profile';

export default function App() {
  return (
    
    <View style={styles.container}>
      
    <Login/>
    
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4aaaa5",
   // marginTop:70
   // backgroundColor: '#4aaaa5',
    //alignItems: 'center',
   // justifyContent: 'center',
  },
});
