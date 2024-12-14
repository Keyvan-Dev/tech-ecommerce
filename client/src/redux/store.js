// Redux Toolkit
import { combineReducers, configureStore } from '@reduxjs/toolkit';

// Redux slices
import product from './slices/product.js';
import cart from './slices/cart.js';

const reducer = combineReducers({
	product,
	cart,
});

export default configureStore({ reducer });
