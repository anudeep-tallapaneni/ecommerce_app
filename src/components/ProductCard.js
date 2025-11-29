import React from 'react';
import { useCart } from '../Context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div style={{ width: '200px', border: '1px solid gray', padding: '10px' }}>
      <img src={product.image} alt={product.title} style={{ width: '100px' }} />
      <h4>{product.title}</h4>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
