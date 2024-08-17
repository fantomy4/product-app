import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/actions/productActions';
import ProductCard from './ProductCard';
import ProductSearch from './ProductSearch';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleLoadMore = (count) => {
    setVisibleCount(count);
  };

  return (
    <div>
      <ProductSearch></ProductSearch>
      <div className="product-list">
        {products.slice(0, visibleCount).map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className='button-container'>
        <button onClick={() => handleLoadMore(8)}>Load 8</button>
        <button onClick={() => handleLoadMore(16)}>Load 16</button>
        <button onClick={() => handleLoadMore(products.length)}>Load All</button>
      </div>
    </div>
  );
};

export default ProductList;
