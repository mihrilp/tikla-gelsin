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
  addToBasket,
  removeFromBasket,
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
        <TouchableOpacity style={styles.button} onPress={addToBasket}>
          <Text style={styles.btnText}>{price} TL, Sepete EKle</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.counter}>
          <TouchableOpacity style={styles.counterBtn} onPress={addToBasket}>
            <Text style={styles.counterBtnText}> +</Text>
          </TouchableOpacity>
          <Text style={styles.quantityInBasket}>{quantityInBasket}</Text>
          <TouchableOpacity
            style={styles.counterBtn}
            onPress={removeFromBasket}>
            <Text style={styles.counterBtnText}> -</Text>
          </TouchableOpacity>
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
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityInBasket: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 5,
  },
  counterBtn: {
    width: 25,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
  },
  counterBtnText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Product;
