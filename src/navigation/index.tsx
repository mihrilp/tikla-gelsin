import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import LoginScreen from '../screens/Login';
import BasketScreen from '../screens/Basket';
import SuccessScreen from '../screens/Success';
import {StackScreens} from '../types';

type Props = {
  initial: keyof StackScreens;
};

const Stack = createNativeStackNavigator();

export function StackNavigator({initial}: Props) {
  return (
    <Stack.Navigator initialRouteName={initial}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Basket" component={BasketScreen} />
      <Stack.Screen
        name="Success"
        component={SuccessScreen}
        options={{title: 'Sepetim'}}
      />
    </Stack.Navigator>
  );
}
