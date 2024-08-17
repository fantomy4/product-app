import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProduct, fetchProductById } from '../redux/actions/productActions';
import { useParams } from 'react-router-dom';

const EditProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(state => state.products.selectedProduct);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [published, setPublished] = useState(false);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (product) {
      setTitle(product.title || ''); // Забезпечення початкових значень
      setPrice(product.price || ''); 
      setDescription(product.description || ''); 
      setPublished(product.published || false);
    }
  }, [product]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedProduct = { id, title, price, description, published };
    console.log('Submitting updated product:', updatedProduct); // Логування даних

    try {
      await dispatch(updateProduct(updatedProduct));
      dispatch(fetchProductById(id)); // Перезапит після оновлення
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2 className="form-title">Edit Product</h2>
        <input 
          type="text" 
          value={title || ''} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="Title" 
          required 
        />
        <input 
          type="number" 
          value={price || ''} 
          onChange={(e) => setPrice(e.target.value)} 
          placeholder="Price" 
          required 
        />
        <textarea 
          value={description || ''} 
          onChange={(e) => setDescription(e.target.value)} 
          placeholder="Description" 
          required 
        />
        <label>
          Published
          <input 
            type="checkbox" 
            checked={published} 
            onChange={() => setPublished(!published)} 
          />
        </label>
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default EditProduct;
