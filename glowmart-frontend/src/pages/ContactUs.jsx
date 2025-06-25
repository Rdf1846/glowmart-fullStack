import React from 'react';
import Layout from '../components/Layout';

const ContactUs = () => {
  return (
    <Layout>
      <h2>Contact Us</h2>
      <p>Fill out the form below or reach us via the contact info.</p>

      <div style={{ marginTop: '2rem', display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
        <form style={{ flex: '1', minWidth: '300px' }}>
          <input type="text" placeholder="Your Name" style={inputStyle} required /><br />
          <input type="email" placeholder="Your Email" style={inputStyle} required /><br />
          <textarea placeholder="Your Message" style={{ ...inputStyle, height: '120px' }} required /><br />
          <button className="btn btn-primary">Send Message</button>
        </form>

        <div style={{ flex: '1', minWidth: '250px' }}>
          <p><i className="fas fa-map-marker-alt"></i> Zilla gzb, UP-201005, India</p>
          <p><i className="fas fa-phone"></i> +91 98101 06248</p>
          <p><i className="fas fa-envelope"></i> info@glowmart.com</p>
        </div>
      </div>
    </Layout>
  );
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '15px',
  borderRadius: '6px',
  border: '1px solid #ccc'
};

export default ContactUs;
