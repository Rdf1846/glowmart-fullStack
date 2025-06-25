import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { icon: 'fas fa-spa', name: 'Skincare' },
  { icon: 'fas fa-paint-brush', name: 'Makeup' },
  { icon: 'fas fa-pump-soap', name: 'Bath & Body' },
  { icon: 'fas fa-wind', name: 'Fragrance' },
  { icon: 'fas fa-air-freshener', name: 'Haircare' },
];

const CategoriesSection = () => {
  return (
    <>
      <h2 className="section-title" id="categories">Shop by Category</h2>
      <div className="categories">
        {categories.map((cat, i) => (
          <Link
            to={`/category/${cat.name.toLowerCase().replace(/ & /g, '-').replace(/\s/g, '-')}`}
            className="category"
            key={i}
          >
            <i className={cat.icon}></i>
            <h3>{cat.name}</h3>
          </Link>
        ))}
      </div>
    </>
  );
};

export default CategoriesSection;
