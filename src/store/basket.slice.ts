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
  },
});

export const {addToBasket} = BasketSlice.actions;
export default BasketSlice.reducer;
