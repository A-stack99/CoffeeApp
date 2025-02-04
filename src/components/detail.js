import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const Detail = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
     
      <View style={styles.header}>
      <TouchableOpacity style={styles.icon}
        onPress={() => navigation.navigate("List")}>
        <Image source={require('../assets/images/arrow-left.png')} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Detail</Text>
        <TouchableOpacity style={styles.icon}>
        <Image source={require('../assets/images/Heart.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>

    
       <Image source={require('../assets/images/bg3.png')}
        style={styles.coffeeImage}
      />
      
      
      <Image source={require('../assets/images/coffee.png')} style={{backgroundColor: '#494040', borderRadius: 20, width: 50, height: 50, top: 75 , left: 250}} />
        <Image source={require('../assets/images/bottle.png')} style={{backgroundColor: '#494040',  borderRadius: 20, width: 50, height: 50, top: 25 , left: 310}} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Cappuccino</Text>
        <Text style={styles.subtitle}>with Chocolate</Text>
        <View style={styles.rating}>
          <Image source={require('../assets/images/Rating.png')} />
          <Text style={styles.ratingText}> 4.8</Text>
          <Text style={styles.reviews}>(230)</Text>
        </View>
      </View>

<Image source={require('../assets/images/Line 1.png')} style={{ justifyContent: 'center', alignItems: 'center', left: 20, backgroundColor: '#EAEAEA', width: 350, height: 1, top: -70}}/>
    
     <View style={styles.descriptionContainer}>
      <Text style={styles.descriptionTitle}>Description</Text>
      <Text style={styles.description}>
      A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of fresh milk the fo..{' '}
        <Text style={styles.readMore}>Read More</Text>
      </Text>
      </View>

      <Text style={styles.sizeTitle}>Size</Text>
      <View style={styles.sizeContainer}>
      
        <TouchableOpacity style={[styles.sizeButton, styles.sizeButtonInactive]}>
          <Text style={styles.sizeButtonText}>S</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.sizeButton, styles.sizeButtonActive]}>
          <Text style={[styles.sizeButtonText, styles.activeSizeText]}>M</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.sizeButton, styles.sizeButtonInactive]}>
          <Text style={styles.sizeButtonText}>L</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.priceTitle}>Price</Text>
      <View style={styles.footer}>
        <Text style={styles.price}>$ 4.53</Text>
        <TouchableOpacity style={styles.buyButton}
        onPress={() => navigation.navigate('OrderDelivery')}>
          <Text style={styles.buyButtonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
 export default Detail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 22,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  icon: {
    fontSize: 20,
    color: '#000',
  },
  coffeeImage: {
    zIndex: 1,
    width: 350,
    height: 226,
    left: 20,
    borderRadius: 16,
  },
  infoContainer: {
    marginBottom: 30,
    paddingHorizontal: 20,
    top: -70
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#7D7D7D',
    marginVertical: 4,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  ratingText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000000',
    marginRight: 4,
  },
  reviews: {
    fontSize: 15,
    color: '#7D7D7D',
  },
  descriptionContainer: {
    paddingHorizontal: 20,
    top: -50
  },
  descriptionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  description: {
    fontFamily: 'Sora-Regular',
    width: '315px',
    height: '89px',
    left: -2,
    fontWeight: 400,
    fontSize: 16,
    color: '#9B9B9B',
    lineHeight: 24.96,
    letterSpacing: 0.1,
    padding:5,
  },
  readMore: {
    fontFamily: 'Sora-Regular',
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 22.96,
    color: '#C67C4E',
  },
  sizeTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    color: '#000',
    top: -30
  },
  sizeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    paddingHorizontal: 20,
    top: -20  
  },
  sizeButton: {
    width: 96,
    height: 43,
    borderRadius: 12,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    gap: 10,
    color:'#FFF5EE',
  },
  sizeButtonActive: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#C67C4E',
  },
  sizeButtonInactive: {
    borderColor: '#FFF5EE',
    backgroundColor: '#FFF5EE',
  },
  sizeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
   
  },
  activeSizeText: {
    color:'#C67C4E',
  },
  priceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#9B9B9B',
    bottom: -25,
    left: 22,
    zIndex: 1
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor:'#F1F1F1',
    backgroundColor:'#F9F9F9',
    top: -20,
    borderRadius:20
  },
 
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#C67C4E',
    bottom: -12
  },
  buyButton: {
    backgroundColor: '#C67C4E',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    width: '60%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buyButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
});