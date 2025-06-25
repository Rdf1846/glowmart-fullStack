import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [message, setMessage] = useState('');
  const user = JSON.parse(sessionStorage.getItem('user')) || null;

  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem('user'));
    if (!userData) {
      setMessage('Please login to view your orders.');
      return;
    }

    const fetchOrders = async () => {
      try {
        const res = await fetch(`http://localhost:8080/api/orders/user/${userData.id}`);
        if (res.ok) {
          const data = await res.json();
          setOrders(data);
        } else {
          setMessage('Failed to fetch orders.');
        }
      } catch (err) {
        console.error(err);
        setMessage('Server error while fetching orders.');
      }
    };

    fetchOrders();
  }, []);

  if (!user) {
    return (
      <Layout>
        <div className="form-container">
          <h2>My Orders</h2>
          <p style={{ color: 'red' }}>{message}</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="form-container">
        <h2>My Orders</h2>

        {message && (
          <p style={{ color: 'red' }}>{message}</p>
        )}

        {!message && orders.length === 0 && (
          <p>You have not placed any orders yet.</p>
        )}

        {orders.length > 0 && orders.map((order) => (
          <div key={order.id} className="order-card">
            <h4>Order ID: #{order.id}</h4>
            <p><strong>Total:</strong> ₹{order.totalAmount.toLocaleString()}</p>
            <p><strong>Items:</strong></p>
            <ul className="order-item-list">
              {order.items.map((item, index) => (
                <li key={index}>
                  <span>{item.productName}</span> <span>₹{item.price.toLocaleString()}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default MyOrders;
