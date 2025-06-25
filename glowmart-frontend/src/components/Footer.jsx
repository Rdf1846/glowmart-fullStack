import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-column">
          <h3>GlowMart</h3>
          <p>Your destination for premium beauty products. Natural, effective, and cruelty-free.</p>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-pinterest-p"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/"><i className="fas fa-chevron-right"></i> Home</a></li>
            <li><a href="/products"><i className="fas fa-chevron-right"></i> Products</a></li>
            <li><a href="#categories"><i className="fas fa-chevron-right"></i> Categories</a></li>
            <li><a href="#features"><i className="fas fa-chevron-right"></i> Features</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Customer Service</h3>
          <ul>
            <li><a href="/contact"><i className="fas fa-chevron-right"></i> Contact Us</a></li>
            <li><a href="/faq"><i className="fas fa-chevron-right"></i> FAQs</a></li>
            <li><a href="/return-policy"><i className="fas fa-chevron-right"></i> Return Policy</a></li>
            <li><a href="/shipping-info"><i className="fas fa-chevron-right"></i> Shipping Info</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact Us</h3>
          <p><i className="fas fa-map-marker-alt"></i> Zilla Ghaziabad, UP-201005</p>
          <p><i className="fas fa-phone"></i> +91 981062XXXX</p>
          <p><i className="fas fa-envelope"></i> glowmart.1999@gmail.com</p>
        </div>
      </div>

      <div className="copyright">
        <p>&copy; 2025 GlowMart Beauty Store. All rights reserved under Shaiv @ RDF.</p>
      </div>
    </footer>
  );
};

export default Footer;
