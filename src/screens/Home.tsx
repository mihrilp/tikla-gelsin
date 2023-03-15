import React, {useState, useEffect} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import products from '../products.json';
import Product from '../components/Product';
import {ProductProps} from '../types';
import SearchBar from '../components/SearchBar';
import ShoppingCart from '../components/ShoppingCart';

function Home() {
  const [searchText, setSearchText] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<ProductProps[]>();
  const [basketItems, setBasketItems] = useState<ProductProps[]>([]);

  const addToCart = (product: ProductProps) => {
    setBasketItems([...basketItems, product]);
  };

  const keyExtractor = (item: ProductProps) => item.id.toString();
  const renderItem = ({item}: {item: ProductProps}) => {
    return <Product {...item} addToCart={addToCart} />;
  };

  useEffect(() => {
    const filtered = products.filter(
      product =>
        product.name.toLowerCase().includes(searchText.toLowerCase()) ||
        product.ingredients.toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilteredProducts(filtered);
  }, [searchText]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Ürün Listesi</Text>
        <ShoppingCart basketItems={basketItems} />
      </View>
      <View style={styles.searchBarContainer}>
        <SearchBar handleChange={value => setSearchText(value)} />
      </View>
      <FlatList
        data={filteredProducts || products}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  header: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 15,
  },
  title: {
    color: '#EB1730',
    fontSize: 22,
  },
  searchBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
});

export default Home;
