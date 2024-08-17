// api/productApi.js
import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/products';

export const fetchProductsFromApi = (limit = 24, search = '') => {
  return axios.get(API_URL, {
    params: { limit, search },
  });
};

export const fetchProductByIdFromApi = (id) => {
  return axios.get(`${API_URL}/${id}`);
};
