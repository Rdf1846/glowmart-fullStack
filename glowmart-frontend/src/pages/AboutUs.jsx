import React from 'react';
import Layout from '../components/Layout';

const AboutUs = () => {
  return (
    <Layout>
      <h2>About Us</h2>
      <p style={{ marginTop: '1rem', lineHeight: '1.6' }}>
        <strong>Name:</strong> Shaiv @ RDF<br />
        <strong>Location:</strong> Ghaziabad, Uttar Pradesh, India<br />
        <strong>Email:</strong> glowmart.1999@gmail.com<br />
        <strong>Mobile:</strong> +91-98XXXXXX48<br />
    

        <strong>Bio:</strong><br />
        I am a passionate Java Developer.  
        Skilled in Java, Spring Boot, Hibernate, React.js, and building end-to-end web applications.  
        <br /><br />
        GlowMart is a self-created e-commerce demo project to showcase my full-stack development capabilities including shopping cart, order flow, OTP verification, and user management.
      </p>
    </Layout>
  );
};

export default AboutUs;
