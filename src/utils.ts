import {ProductProps} from './types';

export const getTotalPrice = (basketItems: ProductProps[]): number => {
  return basketItems.reduce((acc: number, val: ProductProps) => {
    return acc + val.price;
  }, 0);
};

export const getDiscountedPrice = (totalPrice: number): number => {
  return parseFloat((totalPrice - totalPrice * 0.3).toFixed(2));
};
