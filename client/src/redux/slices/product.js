// Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
	loading: false,
	error: null,
	products: [],
	product: null,
	pagination: {},
	favoritesToggled: false,
	reviewed: false,
	favorites: JSON.parse(localStorage.getItem('favorites')) ?? [],
};

export const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setLoading: (state) => {
			state.loading = true;
		},
		setProducts: (state, { payload }) => {
			state.loading = false;
			state.error = null;
			state.products = payload;
		},
		setProduct: (state, { payload }) => {
			state.loading = false;
			state.error = null;
			state.product = payload;
			state.reviewed = false;
		},
		setError: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		setPagination: (state, { payload }) => {
			state.loading = false;
			state.error = null;
			state.pagination = payload;
		},
		setFavorites: (state, { payload }) => {
			state.favorites = payload;
		},
		setFavoritesToggle: (state, { payload }) => {
			state.favoritesToggled = payload;
		},
	},
});

export const { setLoading, setProducts, setProduct, setError, setPagination, setFavorites, setFavoritesToggle } =
	productSlice.actions;

export default productSlice.reducer;

export const productsSelector = (state) => state.products;
