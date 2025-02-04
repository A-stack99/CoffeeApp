
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Home =({navigation}) =>{
  return (
    <View style={styles.container}>
        <Image source={require('../assets/images/bg.png')} style={styles.image} />
        <View style={styles.textContainer}>
           <Image source={require('../assets/images/CoffeeWrite.png')}/>
        </View>
          <Image source={require('../assets/images/Line.png')} style={styles.imageLine}/>
        <TouchableOpacity style={styles.button}
          onPress={() => navigation.navigate('List')}> 
          <Image source={require('../assets/images/Fixed.png')} style={styles.buttonText} />
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
    borderRadius: 10
  },
  image: {
  flex: 1,
    width: '100%',
    height: '50%',
    resizeMode: 'cover',
  },
  textContainer: {
    alignItems: 'center',
    top: -70
  },
  imageLine: {
    top: -40
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    top: -22
  },
  buttonText: { 
    width: 350,
    height: 60,
    
  }
});