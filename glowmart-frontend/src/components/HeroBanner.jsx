import React from 'react';

const HeroBanner = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Discover Your Perfect Glow</h1>
        <p>
          Premium beauty products curated for every skin type. Natural ingredients, professional results.
          Shop our collection of skincare, makeup, and beauty essentials.
        </p>
        <div className="btn-group" style={{ display: 'flex', gap: '15px', marginTop: '30px' }}>
          <button className="btn btn-primary" onClick={() => scrollToSection('categories')}>
            Shop Now <i className="fas fa-arrow-right"></i>
          </button>
          <button className="btn btn-outline" onClick={() => scrollToSection('products')}>
            View Offers
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
