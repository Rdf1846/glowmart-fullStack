import React from 'react';
import Layout from '../components/Layout';
import HeroBanner from '../components/HeroBanner';
import CategoriesSection from '../components/CategoriesSection';
import WhyChooseGlowMart from '../components/WhyChooseGlowMart';
import ProductCard from '../components/ProductCard';
import products from '../data/products';

const Home = () => {
  return (
    <Layout>
      <HeroBanner />

      <h2 className="section-title" id="products">Featured Products</h2>
      <div className="products">
        {/* Show first 3 products from actual product list */}
         {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <CategoriesSection />
      <WhyChooseGlowMart />
    </Layout>
  );
};

export default Home;
