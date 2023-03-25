import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import ProductList from '../components/ProductList';
import useAppNavigation from '../hooks/useAppNavigation';
import {useAppDispatch, useAppSelector} from '../hooks/useStore';
import {resetBasket} from '../store/basket.slice';
import {ProductProps} from '../types';
import {getDiscountedPrice, getTotalPrice} from '../utils';

function Basket() {
  const basketItems = useAppSelector(state => state.basket.items);
  const dispatch = useAppDispatch();

  const navigation = useAppNavigation();

  const uniqueItems = basketItems.filter(
    (item: ProductProps, index: number) => {
      return basketItems.indexOf(item) === index;
    },
  );

  const totalPrice = getTotalPrice(basketItems);
  const discountedPrice = getDiscountedPrice(totalPrice);
  const gain = (totalPrice - discountedPrice).toFixed(2);

  const handleBuy = () => {
    dispatch(resetBasket());
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ProductList data={uniqueItems} />
      <View style={styles.priceInfoContainer}>
        <Text
          style={[
            styles.priceInfoText,
            basketItems.length > 1 && styles.cancelPrice,
          ]}>
          Toplam Fiyat: {totalPrice} ₺
        </Text>
        {basketItems.length > 1 && (
          <>
            <Text style={styles.priceInfoText}>
              İndirimli Fiyat:{discountedPrice} ₺
            </Text>
            <View style={styles.gain}>
              <Text style={styles.priceInfoText}>Kazancınız: {gain} ₺</Text>
            </View>
          </>
        )}
      </View>
      <TouchableOpacity style={styles.buyBtn} onPress={handleBuy}>
        <Text style={styles.buyText}>Satın Al </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  priceInfoContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'absolute',
    bottom: '20%',
  },
  priceInfoText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'right',
  },
  cancelPrice: {
    textDecorationLine: 'line-through',
  },
  gain: {
    width: '50%',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#EB1730',
    paddingTop: 10,
  },
  buyBtn: {
    width: '60%',
    backgroundColor: '#EB1730',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    position: 'absolute',
    bottom: '10%',
    left: '20%',
  },
  buyText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Basket;
