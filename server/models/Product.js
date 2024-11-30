// Mongoose
import mongooes from 'mongoose';

const productSchema = new mongooes.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		images: {
			type: Array,
			required: true,
			default: [],
		},
		brand: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		reviews: {
			type: Array,
			required: true,
			default: [],
		},
		rating: {
			type: Number,
			required: true,
			default: 0,
		},
		numberOfReviews: {
			type: Number,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		stock: {
			type: Number,
			required: true,
		},
		productIsNew: {
			type: Boolean,
			required: true,
		},
		stripeId: {
			type: String,
		},
	},
	{ timestamps: true }
);

const Product = mongooes.model('Product', productSchema);

export default Product;
