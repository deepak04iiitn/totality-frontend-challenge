// src/redux/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  cartTotal: 0,
  bookingCount: 0,
  error: null,
  loading: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCartStart: (state) => {
      state.loading = true;
    },
    addToCartSuccess: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.cartItems.push(item);
      }

      state.cartTotal += item.price * item.quantity;
      state.bookingCount += item.quantity;
      state.loading = false;
      state.error = null;
    },
    addToCartFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    removeFromCartStart: (state) => {
      state.loading = true;
    },
    removeFromCartSuccess: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((cartItem) => cartItem.id === id);

      if (existingItem) {
        state.cartTotal -= existingItem.price * existingItem.quantity;
        state.bookingCount -= existingItem.quantity;
        state.cartItems = state.cartItems.filter((cartItem) => cartItem.id !== id);
      }

      state.loading = false;
      state.error = null;
    },
    removeFromCartFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.cartTotal = 0;
      state.bookingCount = 0;
    },
    increaseQuantity: (state, action) => {
      const { id, price } = action.payload;
      const item = state.cartItems.find((cartItem) => cartItem.id === id);

      if (item) {
        item.quantity += 1;
        state.cartTotal += price;
        state.bookingCount += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const { id, price } = action.payload;
      const item = state.cartItems.find((cartItem) => cartItem.id === id);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.cartTotal -= price;
        state.bookingCount -= 1;
      }
    },
  },
});

export const {
  addToCartStart,
  addToCartSuccess,
  addToCartFailure,
  removeFromCartStart,
  removeFromCartSuccess,
  removeFromCartFailure,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
