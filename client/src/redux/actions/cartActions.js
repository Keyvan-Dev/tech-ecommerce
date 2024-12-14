// Axios
import axios from 'axios';

// Redux cart slices
import { setLoading, setError, cartItemAdd, cartItemRemoval, clearCart, setShippingcosts } from '../slices/cart.js';

export const addCartItem = (id, qty) => async (dispatch) => {
	dispatch(setLoading(true));
	try {
		const { data } = await axios.get(`/api/products/${id}`);
		const itemToAdd = {
			id: data._id,
			name: data.name,
			subtitle: data.subtitle,
			image: data.image[0],
			price: data.price,
			stock: data.stock,
			brand: data.brand,
			qty,
			stripeId: data.stripeId,
		};

		dispatch(cartItemAdd(itemToAdd));
	} catch (error) {
		dispatch(
			setError(
				error.response && error.response.data.message
					? error.response.data.message
					: error.message
					? error.message
					: 'An expected error has occured. Please try again later.'
			)
		);
	}
};

export const removeCartItem = (id) => async (dispatch) => {
	dispatch(setLoading(true));
	dispatch(cartItemRemoval(id));
};

export const setShipping = (value) => async (dispatch) => {
	dispatch(setShippingcosts(value));
};

export const resetCart = () => (dispatch) => {
	dispatch(clearCart);
};
