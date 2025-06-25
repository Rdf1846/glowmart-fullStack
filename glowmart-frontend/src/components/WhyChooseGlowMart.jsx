import React from 'react';

const WhyChooseGlowMart = () => {
  const features = [
    {
      icon: 'fas fa-truck',
      title: 'Free Shipping',
      description: 'Free delivery on all orders over ₹2000. Fast and reliable shipping across India.'
    },
    {
      icon: 'fas fa-gift',
      title: 'Gift Packaging',
      description: 'Beautiful gift wrapping available for all products. Perfect for presents.'
    },
    {
      icon: 'fas fa-leaf',
      title: 'Natural Ingredients',
      description: 'All products made with natural, cruelty-free ingredients. Good for you and the planet.'
    }
  ];

  return (
    <>
      <h2 className="section-title" id="features">Why Choose GlowMart</h2>
      <div className="features">
        {features.map((f, i) => (
          <div className="feature-card" key={i}>
            <i className={f.icon}></i>
            <h3>{f.title}</h3>
            <p>{f.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default WhyChooseGlowMart;
