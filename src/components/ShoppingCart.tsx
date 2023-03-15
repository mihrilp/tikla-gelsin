import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ProductProps} from '../types';
import BasketIcon from './icons/BasketIcon';

function ShoppingCart({basketItems}: {basketItems: ProductProps[]}) {
  return (
    <TouchableOpacity style={styles.container}>
      <BasketIcon />
      <Text style={styles.basketItems}>{basketItems.length}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  basketItems: {
    position: 'absolute',
    top: -8,
    right: -8,
    color: '#EB1730',
    fontWeight: 'bold',
  },
});

export default ShoppingCart;
