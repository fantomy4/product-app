import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById } from '../redux/actions/productActions';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(state => state.products.selectedProduct);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="cardContainer">
      <div className="card">
        <img src={product.image} alt={product.name} className="card-img" />
        <div className="card-body">
          <h1 className="card-title">{product.title}</h1>
          <p className="card-price">${product.price}</p>
          <p className="card-description">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
