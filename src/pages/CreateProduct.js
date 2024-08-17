import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProduct } from '../redux/actions/productActions';
import { v4 as uuidv4 } from 'uuid';

const CreateProduct = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [published, setPublished] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newProduct = { 
      id: uuidv4(),
      title, 
      price, 
      description, 
      published, 
      date: new Date() 
    };
    
    dispatch(createProduct(newProduct));
    alert('Product created successfully!');
  };

  return (
    <div className="form-container">
      <form className="centered-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Create Product</h2>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="Title" 
          required 
        />
        <input 
          type="number" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
          placeholder="Price" 
          required 
        />
        <textarea 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          placeholder="Description" 
          required 
        />
        <div className="checkbox-container">
          <label>
            Published 
            <input 
              type="checkbox" 
              checked={published} 
              onChange={() => setPublished(!published)} 
            />
          </label>
        </div>
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
};

export default CreateProduct;
