import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Image, SafeAreaView, View  } from 'react-native';
import Login from './components/login/login';



export default function App() {
  return (
    <>
    
    <View style={styles.container}>      
    <Image source={require("./components/imagens/logo1.png")} />
    </View>
    <View style={styles.login1}>
    <Login/>
    </View>
    <View style={styles.retangle}>
    <Image source={require("./components/imagens/Rectangle1.png")} />
    </View>
    <View style={styles.circle}>
    <Image source={require("./components/imagens/circle1.png")} />
    </View>
   
    <View style={styles.circle1}>
    <Image source={require("./components/imagens/circle1.png")} />
    </View>
    <View style={styles.retangle1}>
    <Image source={require("./components/imagens/Rectangle1.png")} style={{ transform: [{ rotate: '250deg' }] }} />
    </View>
   
    
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    bottom:"35%",
    margin:0,
    padding:0
  },
  retangle:{
    position:"absolute",
    left:-70,
    top:10
  },
  circle:{
    position:"absolute",
    left:"80%",
    top:60,
 

  },
  circle1:{
    position:"absolute",
    right:"85%",
    top:"45%",
  },
  retangle1:{
    position:"absolute",
    top:"85%",
    left:"50%"
    
    
  },
  login1:{
  position:"absolute",
  left:"32%"

  }
});
