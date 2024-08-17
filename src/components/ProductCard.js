import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className='product-list'>
      <div className='list-container'>
        <div className='cards'>
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          <p>${product.price}</p>
          <Link className='unline' to={`/products/${product.id}`}>View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
