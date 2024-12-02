// Redux Toolkit
import { combineReducers, configureStore } from '@reduxjs/toolkit';

// Redux product slices
import product from './slices/product.js';

const reducer = combineReducers({
	product,
});

export default configureStore({ reducer });
