import {createSlice} from '@reduxjs/toolkit';
import {ProductProps} from '../types';

interface Basket {
  items: Array<ProductProps>;
}

const initialState: Basket = {
  items: [],
};

const BasketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        basketItem => basketItem.id === action.payload.id,
      );
      let newBasket = [...state.items];
      newBasket.splice(index, 1);
      state.items = newBasket;
    },
  },
});

export const {addToBasket, removeFromBasket} = BasketSlice.actions;
export default BasketSlice.reducer;
