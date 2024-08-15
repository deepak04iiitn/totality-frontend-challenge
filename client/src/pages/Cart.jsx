// src/pages/Cart.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import CartItemCard from '../components/CartItemCard';

export default function Cart() {
  const { cartItems, cartTotal } = useSelector((state) => state.cart);

  return (
    <div className="cart-page mx-auto p-4 max-w-4xl">
      <h2 className="text-2xl font-semibold mb-8 text-center">Your Cart</h2>
      
      <div className="flex flex-wrap justify-center gap-6">
        {cartItems.map((item) => (
          <CartItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

