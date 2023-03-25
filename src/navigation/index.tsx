import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import LoginScreen from '../screens/Login';
import BasketScreen from '../screens/Basket';
import {StackScreens} from '../types';
import BackArrow from '../components/icons/BackArrow';
import ShoppingCart from '../components/ShoppingCart';
import LogOut from '../components/LogOut';

type Props = {
  initial: keyof StackScreens;
};

const Stack = createNativeStackNavigator();

export function StackNavigator({initial}: Props) {
  return (
    <Stack.Navigator
      initialRouteName={initial}
      screenOptions={{
        headerTintColor: '#EB1730',
        headerTitleStyle: {
          fontSize: 23,
        },
        headerBackVisible: false,
      }}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Ürün Listesi',
          headerRight: ShoppingCart,
          headerLeft: LogOut,
        }}
      />
      <Stack.Screen
        name="Basket"
        component={BasketScreen}
        options={({navigation}) => ({
          title: 'Sepet',
          // eslint-disable-next-line react/no-unstable-nested-components
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <BackArrow />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
}
