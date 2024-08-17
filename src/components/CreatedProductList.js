import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct } from '../redux/actions/productActions';
import { Link } from 'react-router-dom';

const CreatedProductList = () => {
  const [showPublished, setShowPublished] = useState(true);
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.createdProducts);

  const filteredProducts = products.filter(product => product.published === showPublished);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className='showContainer'>
      <button onClick={() => setShowPublished(!showPublished)}>
        {showPublished ? 'Show Unpublished' : 'Show Published'}
      </button>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Published</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map(product => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>${product.price}</td>
              <td>{product.description}</td>
              <td>{product.published ? 'Yes' : 'No'}</td>
              <td>
                <button className='delButton' onClick={() => handleDelete(product.id)}>Delete</button>
                <Link className='edButton' to={`/edit-product/${product.id}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CreatedProductList;
