import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { getFromLocalStorage, setItemInLocalStorage } from '@/lib/helper';

import { Product } from '@/types/types';
export interface ICartState {
  count: number;
  products: Product[];
}

function getIntialState(): ICartState {
  const cart = getFromLocalStorage('cart');

  if (cart !== null) {
    return JSON.parse(cart);
  }

  return { count: 0, products: [] };
}

const initialState: ICartState = getIntialState();

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
      state.count += 1;
      setItemInLocalStorage('cart', JSON.stringify(state));
    },
    removeProductFromCart: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter((value: Product) => {
        return value.id !== action.payload;
      });
      state.count -= 1;
      setItemInLocalStorage('cart', JSON.stringify(state));
    },
  },
});

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
