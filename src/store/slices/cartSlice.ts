import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { Product } from '@/types/types';
export interface ICartState {
  count: number;
  products: Product[];
}

const initialState: ICartState = {
  count: 0,
  products: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
      state.count += 1;
    },
    removeProductFromCart: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter((value: Product) => {
        return value.id !== action.payload;
      });
      state.count -= 1;
    },
  },
});

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
