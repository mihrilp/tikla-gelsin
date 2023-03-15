import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import LoginScreen from '../screens/Login';
import BasketScreen from '../screens/Basket';
import {StackScreens} from '../types';

type Props = {
  initial: keyof StackScreens;
};

const Stack = createNativeStackNavigator();

export function StackNavigator({initial}: Props) {
  return (
    <Stack.Navigator
      initialRouteName={initial}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Basket" component={BasketScreen} />
    </Stack.Navigator>
  );
}
