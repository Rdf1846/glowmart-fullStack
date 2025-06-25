import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleCheckout = () => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    if (!user) {
      window.location.href = '/register?from=cart';
    } else {
      window.location.href = '/checkout';
    }
  };

  return (
    <Layout>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link to="/products">Shop now</Link></p>
      ) : (
        <>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cartItems.map((item) => (
              <li key={item.id} style={{
                border: '1px solid #ccc', borderRadius: '8px', padding: '1rem',
                marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between'
              }}>
                <div>
                  <h4>{item.name}</h4>
                  <p>₹{item.price.toLocaleString()}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{ backgroundColor: '#ff6b6b', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '6px', cursor: 'pointer' }}
                >Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total: ₹{total.toLocaleString()}</h3>
          <div style={{ marginTop: '1rem', display: 'flex', gap: '10px' }}>
            <button onClick={clearCart} style={{ backgroundColor: '#999', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Clear Cart</button>
            <button className="checkout-btn" onClick={handleCheckout} style={{ background: 'linear-gradient(to right, #ff6b9d, #a56cf0)', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </Layout>
  );
};

export default Cart;
