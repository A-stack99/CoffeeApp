
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Home =({navigation}) =>{
  return (
    <View style={styles.container}>
        <Image source={require('../assets/images/bg.png')} style={styles.image} />

        <View style={styles.overlay} />
      <View style={styles.textContainer}>
           <Text style={styles.title}>Coffee so good,{"\n"}your taste buds{"\n"}will love it.</Text>
           <Text style={styles.subtitle}>The best grain, the finest roast, the{"\n"}powerful flavor.</Text>
                  
           </View>
        
        <TouchableOpacity style={styles.button}>
                 <Image source={require("../assets/images/google.png")} style={styles.googleIcon} />
                 <Text style={styles.buttonText}>Continue with Google</Text>
         </TouchableOpacity>
        
   </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1.9,
    backgroundColor: '#000',
    alignItems: 'center',
    borderRadius: 10,
    resizeMode:'contain',
  },

  image: {
  flex: 0.5,
    width: '100%',
    height: '50%',
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)", 
  },
  textContainer: {
    alignItems: 'center',
    top: -70,
    justifyContent:'center',
    position: "absolute",
    bottom: 80,
    width:"336",
    height:"134",
    top:487,
  },
  title:{
    color:'#ffffff',
    fontFamily:'sora',
    fontWeight:'bold',
    fontSize: 40,
    lineHeight: 45,
    textAlign: "center",
    letterSpacing:1,
    top:80
  },
  subtitle:{
    color:'#A9A9A9',
    fontFamily:'sora',
    fontWeight:'400',
    fontSize: 16,
    lineHeight: 21,
    textAlign: "center",
    letterSpacing:1,
    top:110
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    bottom:-150,
    width: "90%",
    height:"65"
  },
  googleIcon: {
    width: 35,
    height: 35,
    left:50,

  },
  buttonText: { 
    color:"#0000008A",
    fontFamily:'sora',
    fontSize:21,
    fontWeight: "bold",
    width: 350,
    height: 80,
    top:25,
    letterSpacing:1,
    textAlign:'center'
    
  }
});