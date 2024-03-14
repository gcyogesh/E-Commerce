import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


export interface CounterState {
  value: number;
  cart: any[]; // Assuming cart is an array of items
}

const initialState: CounterState = {
  value: 0,
  cart: [], // Initialize cart as an empty array
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setCartCount: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },

    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    addItem: (state, action: PayloadAction<any>) => {
      const product = action.payload;
      const exist = state.cart.find((item) => item.id === product.id);

      if (exist) {
        // If product already exists in cart, increase its quantity
        exist.qty++;
      } else {
        // Otherwise, add the product to cart with quantity 1
        state.cart.push({ ...product, qty: 1 });
      }
    },
    deleteItem: (state, action: PayloadAction<any>) => {
      const productId = action.payload.id;

      // Filter out the item with the specified productId
      state.cart = state.cart.filter((item) => item.id !== productId);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setCartCount,
  increment,
  decrement,
  incrementByAmount,
  addItem,
  deleteItem,
} = counterSlice.actions;

export default counterSlice.reducer;


