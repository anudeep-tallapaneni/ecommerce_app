import React from 'react';
import { useCart } from '../Context/CartContext';

const Cart = () => {
  const { cartItems } = useCart();

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cartItems.map((item, idx) => (
          <div key={idx}>
            <h4>{item.title}</h4>
            <p>${item.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
