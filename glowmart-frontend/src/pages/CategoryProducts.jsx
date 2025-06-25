import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import products from '../data/products';
import ProductCard from '../components/ProductCard';

const CategoryProducts = () => {
  const { categoryName } = useParams();
  const filtered = products.filter(
    (p) => p.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <Layout>
      <h2 className="section-title" style={{ textTransform: 'capitalize' }}>
        {categoryName} Products
      </h2>
      <div className="products">
        {filtered.length > 0 ? (
          filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p style={{ padding: '2rem' }}>No products found in this category.</p>
        )}
      </div>
    </Layout>
  );
};

export default CategoryProducts;
