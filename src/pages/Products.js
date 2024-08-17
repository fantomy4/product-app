import React from 'react';
import ProductList from '../components/ProductList';
import CreatedProductList from '../components/CreatedProductList';

const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      <ProductList />
      <CreatedProductList />
    </div>
  );
};

export default Products;
