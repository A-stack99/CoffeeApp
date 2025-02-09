import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

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

const BottomTabs = ({navigation}) => {
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



const styles = StyleSheet.create({
    tabIcon: {
        width: 25,
        height: 25,
      },
})

export default BottomTabs;