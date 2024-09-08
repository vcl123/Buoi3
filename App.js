import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Home';  // Màn hình chính
import Ex1 from './Ex1';
import Ex2 from './Ex2';
import Ex3 from './Ex3';
import Ex4 from './Ex4';
import Ex5 from './Ex5';
import Ex6 from './Ex6';
import Ex7 from './Ex7';
import Ex8 from './Ex8';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Ex1" component={Ex1} />
        <Stack.Screen name="Ex2" component={Ex2} />
        <Stack.Screen name="Ex3" component={Ex3} />
        <Stack.Screen name="Ex4" component={Ex4} />
        <Stack.Screen name="Ex5" component={Ex5} />
        <Stack.Screen name="Ex6" component={Ex6} />
        <Stack.Screen name="Ex7" component={Ex7} />
        <Stack.Screen name="Ex8" component={Ex8} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
