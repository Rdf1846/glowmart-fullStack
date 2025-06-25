import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '1rem',
      width: '280px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      marginBottom: '20px',
      position: 'relative'
    }}>
      {product.discount && (
        <span style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          backgroundColor: '#ff6b9d',
          color: 'white',
          padding: '5px 10px',
          borderRadius: '20px',
          fontSize: '0.8rem'
        }}>{product.discount} OFF</span>
      )}
      <img
        src={product.image}
        alt={product.name}
        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
      />
      <h3 style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>{product.name}</h3>
      <p style={{ color: '#666', marginBottom: '0.5rem' }}>{product.category}</p>
      <strong>₹{product.price.toLocaleString()}</strong>
      <button
        style={{
          width: '100%',
          marginTop: '1rem',
          background: 'linear-gradient(to right, #ff6b9d, #a56cf0)',
          color: 'white',
          border: 'none',
          padding: '10px',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
        onClick={() => addToCart(product)} // ✅ this line makes "Add to Cart" work
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
