
import React  from 'react';
import { StyleSheet, Image, SafeAreaView, View  } from 'react-native';
import Login from './components/login/login';



export default function App() {
  return (
    <>
    <View style={styles.container}>      

    <Image source={require("./components/imagens/logo1.png")} bottom={"35%"}/>
    </View>
    <View style={styles.retangle}>
    <Image source={require("./components/imagens/Rectangle1.png")} />
    </View>
    <View style={styles.circle}>
    <Image source={require("./components/imagens/circle1.png")} />
    </View>
    <View>{Login}</View>
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
});
