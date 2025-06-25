// 📁 src/pages/ThankYou.jsx

import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <Layout>
      <div className="thankyou-container">
        <h1>🎉 Thank You for Your Order!</h1>
        <p>Your order has been placed successfully. We’ll send you a confirmation email shortly.</p>
        
        <div className="thankyou-buttons">
          <Link to="/products">
            <button className="btn-gradient">Continue Shopping</button>
          </Link>
          <Link to="/my-orders">
            <button className="btn-outline">View My Orders</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default ThankYou;
