import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import products from '../products.json';
import Product from '../components/Product';
import {ProductProps} from '../types';

function Home() {
  const keyExtractor = (item: ProductProps) => item.id.toString();
  const renderItem = ({item}: {item: ProductProps}) => {
    return <Product {...item} />;
  };

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.title}>Ürün Listesi</Text>
      </View>
      <FlatList
        style={styles.foods}
        data={products}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fafafa',
    paddingHorizontal: 30,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#EB1730',
    fontSize: 22,
  },
  foods: {
    backgroundColor: '#EB1730',
  },
});

export default Home;
