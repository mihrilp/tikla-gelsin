import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ProductProps} from '../types';
import {useRoute} from '@react-navigation/native';
import {useAppSelector} from '../hooks/useStore';

function Product({
  id,
  imgUrl,
  name,
  price,
  ingredients,
  addToCart,
}: ProductProps) {
  const route = useRoute();
  const quantityInBasket = useAppSelector(state =>
    state.basket.items.reduce(
      (acc: number, val: ProductProps) => (val.id === id ? acc + 1 : acc),
      0,
    ),
  );

  return (
    <View style={styles.container}>
      <Image source={{uri: imgUrl}} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.ingredients}>İçindekiler: {ingredients}</Text>
      </View>
      {route.name === 'Home' ? (
        <TouchableOpacity style={styles.button} onPress={addToCart}>
          <Text style={styles.btnText}>{price} TL, Sepete EKle</Text>
        </TouchableOpacity>
      ) : (
        <View>
          <Text style={styles.quantityInBasket}>{quantityInBasket}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    padding: 15,
    backgroundColor: '#EB1730',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginHorizontal: 15,
  },
  name: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  ingredients: {
    color: '#fff',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  button: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#000',
  },
  btnText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  quantityInBasket: {
    color: '#fff',
  },
});

export default Product;
