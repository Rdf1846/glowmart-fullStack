import React from 'react';
import ProductCard from '../components/ProductCard';
import products from '../data/products';
import Layout from '../components/Layout';

const Products = () => {
  return (
    <Layout>
    <div style={{ padding: '2rem' }}>
      <h2>Featured Products</h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'center',
        marginTop: '2rem'
      }}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
    </Layout>
  );
};

export default Products;
