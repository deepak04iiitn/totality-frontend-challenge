// src/components/CartItemCard.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  removeFromCartStart,
  removeFromCartSuccess,
  removeFromCartFailure,
  increaseQuantity,
  decreaseQuantity,
} from '../redux/cart/cartSlice';

export default function CartItemCard({ item }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCartStart());

    try {
      dispatch(removeFromCartSuccess(item.id));
    } catch (error) {
      dispatch(removeFromCartFailure('Failed to remove item from cart'));
    }
  };

  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity({ id: item.id, price: item.price }));
  };

  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity({ id: item.id, price: item.price }));
  };

  const handleBookNow = () => {
    navigate(`/book-now/${item.id}`); // Example of navigation, replace with your actual route
  };

  // Calculate total cost for this item
  const totalCost = item.price * item.quantity;

  return (
    <div className="cart-item-card bg-white shadow-lg rounded-md p-4 mb-4 w-full max-w-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">{item.title}</h3>
        <button
          className="text-red-500"
          onClick={handleRemoveFromCart}
        >
          Remove
        </button>
      </div>
      <div className="text-gray-600 mb-4 text-center">
        <p>Price: INR {item.price.toLocaleString('en-US')}</p>
        <p>Quantity: {item.quantity}</p>
        <p className="font-bold text-lg">Total Cost: INR {totalCost.toLocaleString('en-US')}</p>
      </div>
      <div className="flex justify-center gap-2 mb-4">
        <button
          className="bg-green-500 text-white rounded-lg px-4 py-2"
          onClick={handleIncreaseQuantity}
        >
          +
        </button>
        <button
          className="bg-red-500 text-white rounded-lg px-4 py-2"
          onClick={handleDecreaseQuantity}
        >
          -
        </button>
      </div>
      <button
        className="bg-blue-500 text-white rounded-lg px-4 py-2 w-full"
        onClick={handleBookNow}
      >
        Book Now
      </button>
    </div>
  );
}
