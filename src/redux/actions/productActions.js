// actions/productActions.js
import axios from 'axios';
import { fetchProductsFromApi, fetchProductByIdFromApi } from '../../api/productApi';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCT = 'FETCH_PRODUCT';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';

export const fetchProducts = (search = '', limit = 24) => async dispatch => {
  try {
    const response = await fetchProductsFromApi(limit, search);
    dispatch({ type: FETCH_PRODUCTS, payload: response.data });
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

export const fetchProductById = (id) => async dispatch => {
  const response = await fetchProductByIdFromApi(id);
  dispatch({ type: FETCH_PRODUCT, payload: response.data });
};

export const createProduct = (product) => ({
  type: CREATE_PRODUCT,
  payload: product
});

export const updateProduct = (product) => async (dispatch) => {
  try {
    console.log('Sending update request for product:', product);
    const response = await axios.put(`https://fakestoreapi.com/products/${product.id}`, product, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    dispatch({ type: 'UPDATE_PRODUCT_SUCCESS', payload: response.data });
  } catch (error) {
    console.error('Error updating product:', error);
    dispatch({ type: 'UPDATE_PRODUCT_FAILURE', error });
  }
};

export const deleteProduct = (id) => ({
  type: DELETE_PRODUCT,
  payload: id
});
