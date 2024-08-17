import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/actions/productActions';

const ProductSearch = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(fetchProducts(search));
    }, 300); 

    return () => clearTimeout(timer);
  }, [search, dispatch]);

  return (
    <div className="searchContainer">
      <input 
        className='searchInput'
        type="text" 
        value={search} 
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products..."
      />
    </div>
  );
};

export default ProductSearch;
