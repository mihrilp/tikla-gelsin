import React from 'react';
import {FlatList} from 'react-native';
import {useAppDispatch} from '../hooks/useStore';
import {addToBasket, removeFromBasket} from '../store/basket.slice';
import {ProductProps} from '../types';
import Product from './Product';

function ProductList({data}: {data: ProductProps[]}) {
  const dispatch = useAppDispatch();

  const keyExtractor = (item: ProductProps) => item.id.toString();
  const renderItem = ({item}: {item: ProductProps}) => {
    return (
      <Product
        {...item}
        addToBasket={() => dispatch(addToBasket(item))}
        removeFromBasket={() => dispatch(removeFromBasket(item))}
      />
    );
  };

  return (
    <FlatList data={data} keyExtractor={keyExtractor} renderItem={renderItem} />
  );
}

export default ProductList;
