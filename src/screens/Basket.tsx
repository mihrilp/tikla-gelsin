import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import BackArrow from '../components/icons/BackArrow';
import ProductList from '../components/ProductList';
import useAppNavigation from '../hooks/useAppNavigation';
import {useAppSelector} from '../hooks/useStore';
import {ProductProps} from '../types';

function Basket() {
  const basketItems = useAppSelector(state => state.basket.items);
  const navigation = useAppNavigation();

  const uniqueItems = basketItems.filter(
    (item: ProductProps, index: number) => {
      return basketItems.indexOf(item) === index;
    },
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.goBackBtn}
          onPress={() => navigation.goBack()}>
          <BackArrow />
        </TouchableOpacity>
        <Text style={styles.title}>Sepet</Text>
      </View>
      <ProductList data={uniqueItems} />
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
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 15,
  },
  goBackBtn: {
    position: 'absolute',
    left: 20,
  },
  title: {
    color: '#EB1730',
    fontSize: 22,
  },
});

export default Basket;
