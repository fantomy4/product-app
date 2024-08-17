import { FETCH_PRODUCTS, FETCH_PRODUCT, CREATE_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from '../actions/productActions';

const initialState = {
  products: [],
  createdProducts: [],
  selectedProduct: null,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, products: action.payload };
    case FETCH_PRODUCT:
      return { ...state, selectedProduct: action.payload };
    case CREATE_PRODUCT:
      return { ...state, createdProducts: [...state.createdProducts, action.payload] };
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload.id ? action.payload : product
        ),
        createdProducts: state.createdProducts.map(product =>
          product.id === action.payload.id ? action.payload : product
        ),
        selectedProduct: state.selectedProduct?.id === action.payload.id ? action.payload : state.selectedProduct,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        createdProducts: state.createdProducts.filter(product => product.id !== action.payload),
      };
    default:
      return state;
  }
}
