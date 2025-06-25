import React from 'react';
import Layout from '../components/Layout';

const ShippingInfo = () => {
  return (
    <Layout>
      <h2>Shipping Information</h2>
      <p style={{ marginTop: '1rem', lineHeight: '1.6' }}>
        We offer free shipping on all orders above ₹2000. Standard delivery time is 3–5 business days across India.<br /><br />
        You will receive a tracking link on your registered email once your order is shipped. <br /><br />
        For any queries, feel free to reach out to <strong>glowmart.1999@gmail.com</strong>.
      </p>
    </Layout>
  );
};

export default ShippingInfo;
