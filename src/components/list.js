import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, FlatList, Button} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();
const promoImage = require('../assets/images/image.png');
const coffeeNames = ['Cappuccino', 'Macchiato', 'Latte', 'Americano'];

const coffeeData = [
  { id: 1 , name: 'Cappuccino', price: '$4.53', rating: '4.8', image: require('../assets/images/coffee1.png') },
  { id: 2 , name: 'Macchiato', price: '$4.53', rating: '4.8', image: require('../assets/images/coffee2.png') },
  { id: 3, name: 'Latte', price: '$4.53', rating: '4.5', image: require('../assets/images/coffee3.png') },
  { id: 4 , name: 'Americano', price: '$4.53', rating: '4.0', image: require('../assets/images/coffee4.png') },
];
export const List = ({ navigation }) => {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [open, setOpen] = React.useState(false);

  const handleAddToCart = (coffeeItem) => {
    setCart([...cart, coffeeItem]);
  };

  const filteredCoffeeData = coffeeData.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}/>
    
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <View style={styles.headerText}>
            <View>
              <Text style={styles.location}>Location</Text>
              <Text style={styles.locationText}>Bilzen, Tanjungbalai 
                <Image source={require('../assets/images/downArrow.png')} style={{ left: 15}} />
              </Text>
            </View>
            <TouchableOpacity>
              <Image source={require('../assets/images/profile.png')} style={styles.profileImage} />
            </TouchableOpacity>
          </View>
          <View style={styles.searchContainer}>
            <TouchableOpacity style={{ marginLeft: 20 }}>
              <Image source={require('../assets/images/search-normal.png')} style={styles.icon} />
            </TouchableOpacity>
            <TextInput
              placeholder="Search coffee"
              placeholderTextColor="#989898"
              style={styles.searchInput}
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            <TouchableOpacity style={styles.filterButton}>
              <Image source={require('../assets/images/filter.png')} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.promoContainer}>
          <Image source={promoImage} style={styles.promoImage} />
          <View style={styles.promoTextContainer}>
            <Text style={styles.promoTag}>Promo</Text>
            <Image source={require('../assets/images/rectangle.png')} style={styles.rectangle} />
            <Text style={styles.promoText}>Buy one get </Text>
            <Image source={require('../assets/images/rectangle.png')} style={styles.rectangle1} />
            <Text style={styles.promoText1}>one Free</Text>
          </View>
        </View>
        <FlatList
          style={styles.categoryContainer}
          horizontal
          data={coffeeNames}
          keyExtractor={(item) => item}
          renderItem={({ item, index }) => (
            <TouchableOpacity style={[styles.categoryItem, index === 0 && styles.categoryItemSelected]}>
              <Text style={[styles.categoryText, index === 0 && styles.categoryTextSelected]}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
        <View style={styles.coffeeListContainer}>
          <FlatList
            data={filteredCoffeeData}
            keyExtractor={(item) => item.id}
            numColumns={2}
            renderItem={({ item }) => (
              <View style={styles.coffeeContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Detail', { coffee: item })}>
                  <Image source={item.image} style={styles.coffeeImage} />
                </TouchableOpacity>
                <Image source={require('../assets/images/Rating.png')} style={styles.ratingIcon} />
                <Text style={styles.coffeeRating}>{item.rating}</Text>
                <Text style={styles.coffeeName}>{item.name}</Text>
                <Text style={styles.coffeeDesc}>with Chocolate</Text>
                <View style={styles.priceContainer}>
                  <Text style={styles.price}>{item.price}</Text>
                  <TouchableOpacity style={styles.addToCartButton} onPress={() => handleAddToCart(item)}>
                    <Image source={require('../assets/images/whiteplus.png')} style={styles.addToCartIcon} />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export const Favorites = ()=>{
  return(
    <View >
      <Text style={{backgroundColor:'orange' }} > This is the Favourite Screen</Text>
    </View>
  )
}
export const Cart = ()=>{
  return(
    <View>
      <Text> This is the Cart Screen</Text>
    </View>
  )
}
export const Profile = ()=>{
  return(
    <View>
      <Text> This is the Profile Screen</Text>
    </View>
  )
}

const BottomTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { height: 60 } }}>
      <Tab.Screen
        name="Home"
        component={List}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Image source={require('../assets/images/Home.png')} style={styles.tabIcon} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Image source={require('../assets/images/heart1.png')} style={styles.tabIcon} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Image source={require('../assets/images/bag.png')} style={styles.tabIcon} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Image source={require('../assets/images/Notification.png')} style={styles.tabIcon} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

{/* <BottomTabs/> */}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  headerContainer: {
    backgroundColor: '#131313',
    height: 300,
    padding: 10,
  },
  headerText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    padding: 20,
  },
  location: {
    color: '#fff',
    fontSize: 14,
  },
  locationText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  profileImage: {
    width: 54,
    height: 54,
    borderRadius: 5,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#313131',
    width: 350,
    height: 62,
    borderRadius: 15,
    alignItems: 'center',
    margin: 10,
    marginHorizontal: 20,
  },
  searchInput: {
    flex: 1,
    marginLeft: 20,
  },
  filterButton: {
    backgroundColor: '#C67C4E',
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
    width: 50,
    height: 50,
  },
  icon: {
    width: 30,
    height: 30,
  },
  promoContainer: {
    position: 'absolute',
    top: 200,
    left: 0,
    right: 0,
    marginBottom: 20,
    padding: 30,
  },
  promoImage: {
    width: '100%',
    height: 165,
    borderRadius: 15,
  },
  promoTextContainer: {
    position: 'absolute',
    top: 50,
    left: 50,
  },
  promoTag: {
    backgroundColor: '#ED5151',
    color: '#ffffff',
    paddingHorizontal: 9,
    paddingVertical: 6,
    borderRadius: 10,
    fontSize: 14,
    width: 60,
  },
  promoText: {
    fontSize: 35,
    fontWeight: '600',
    color: '#ffffff',
    letterSpacing: 1,
    top: 10,
  },
  rectangle: {
    position: 'absolute',
    top: 60,
    width: 205,
    height: 31,
    backgroundColor: '#ED5151',
  },
  promoText1: {
    fontSize: 30,
    fontWeight: '600',
    color: '#ffffff',
    top: 8,
  },
  rectangle1: {
    position: 'absolute',
    top: 105,
    width: 125,
    height: 31,
  },
  categoryContainer: {
    // flex: 1,
    width: '421',
    height: '40',
    marginTop: 120,
    marginLeft: 30,
    marginBottom: 20,
  },
  categoryItem: {
    padding: 10,
    borderRadius: 15,
    marginRight: 10,
    backgroundColor: '#F3F3F3',
  },
  categoryItemSelected: {
    backgroundColor: '#C67C4E',
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 400,
    color: '#2F4B4E',
  },
  categoryTextSelected: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 600,
    lineheight: 17,
  },
  coffeeListContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  coffeeContainer: {
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 15,
    margin: 7,
  },
  coffeeImage: {
    width: 162,
    height: 152,
    borderRadius: 10,
  },
  ratingIcon: {
    position: 'absolute',
    top: 18,
    left: 10,
  },
  coffeeRating: {
    fontSize: 14,
    color: '#ffffff',
    marginTop: 5,
    position: 'absolute',
    top: 12,
    left: 35,
  },
  coffeeName: {
    fontSize: 16,
    fontWeight: 600,
    lineheight: 20,
    marginTop: 10,
    marginLeft: 10,
    color: '#2F2D2C',
  },
  coffeeDesc: {
    fontSize: 12,
    fontWeight: 400,
    lineheight: 15,
    marginTop: 5,
    marginLeft: 10,
    color: '#9B9B9B',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 18,
    fontWeight: 600,
    lineheight: 22,
    color: '#2F4B4E',
    fontWeight: '600',
    letterSpacing: 1,
    left: 10,
  },
  addToCartButton: {
    backgroundColor: '#C67C4E',
    borderRadius: 10,
    width: 32,
    height: 32,
  },
  addToCartIcon: {
    width: 20,
    height: 20,
    top: 5,
    left: 5, 
  },
  tabIcon: {
    width: 25,
    height: 25,
  },
};
