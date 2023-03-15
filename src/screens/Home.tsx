import React, {useState, useEffect} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import products from '../products.json';
import Product from '../components/Product';
import {ProductProps} from '../types';
import SearchBar from '../components/SearchBar';

function Home() {
  const [searchText, setSearchText] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<ProductProps[]>();

  const keyExtractor = (item: ProductProps) => item.id.toString();
  const renderItem = ({item}: {item: ProductProps}) => {
    return <Product {...item} />;
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
    paddingHorizontal: 20,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#EB1730',
    fontSize: 22,
  },
  searchBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
});

export default Home;
