import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ProductProps} from '../types';

function Product({imgUrl, name, price, ingredients}: ProductProps) {
  return (
    <View style={styles.container}>
      <Image source={{uri: imgUrl}} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.ingredients}>İçindekiler: {ingredients}</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.btnText}>{price} TL, Sepete EKle</Text>
      </TouchableOpacity>
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
});

export default Product;
