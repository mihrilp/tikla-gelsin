import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import useAppNavigation from '../hooks/useAppNavigation';
import {useAppSelector} from '../hooks/useStore';
import BasketIcon from './icons/BasketIcon';

function ShoppingCart() {
  const basketItemsCount = useAppSelector(state => state.basket.items.length);
  const navigation = useAppNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Basket')}
      style={styles.container}
      disabled={basketItemsCount === 0}>
      <BasketIcon />
      <Text style={styles.basketItems}>{basketItemsCount}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
  basketItems: {
    position: 'absolute',
    top: -8,
    right: -8,
    color: '#EB1730',
    fontWeight: 'bold',
  },
});

export default ShoppingCart;
