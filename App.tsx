import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import screens
import Home from './src/components/home';
import List from './src/components/list';
import Detail from './src/components/detail'; 
import Location from './src/components/location';
import Conform from './src/components/conform';
import OrderDelivery from './src/components/orderDelivery';
import OrderPick from './src/components/orderPick';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="List" component={List} options={{ headerShown: false }}  />
        <Stack.Screen name="Detail" component={Detail} options={{ headerShown: false }} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="Conform" component={Conform} options={{ headerShown: false }}/>
        <Stack.Screen name="OrderDelivery" component={OrderDelivery} options={{ headerShown: false }}/>
        <Stack.Screen name="OrderPick" component={OrderPick} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;






////////////////



