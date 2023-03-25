import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import products from '../products.json';
import {ProductProps} from '../types';
import SearchBar from '../components/SearchBar';
import ShoppingCart from '../components/ShoppingCart';
import Logout from '../components/icons/LogOut';
import ProductList from '../components/ProductList';
import {useAppDispatch} from '../hooks/useStore';
import {logout} from '../store/user.slice';
import useAppNavigation from '../hooks/useAppNavigation';

function Home() {
  const [searchText, setSearchText] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<ProductProps[]>();

  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();

  useEffect(() => {
    const filtered = products.filter(
      product =>
        product.name.toLowerCase().includes(searchText.toLowerCase()) ||
        product.ingredients.toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilteredProducts(filtered);
  }, [searchText]);

  const handleLogout = () => {
    dispatch(logout());
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleLogout}>
          <Logout />
        </TouchableOpacity>
        <Text style={styles.title}>Ürün Listesi</Text>
        <ShoppingCart />
      </View>
      <View style={styles.searchBarContainer}>
        <SearchBar handleChange={value => setSearchText(value)} />
      </View>
      <ProductList data={filteredProducts || products} />
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
