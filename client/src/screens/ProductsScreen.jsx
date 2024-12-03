// React
import { useEffect } from 'react';

// Chakra UI
import { Box, Wrap, WrapItem, Center } from '@chakra-ui/react';

// React Redux
import { useSelector, useDispatch } from 'react-redux';

// Components
import ProductCard from '../components/ProductCard.jsx';

// Redux product actions
import { getProducts } from '../redux/actions/productActions.js';

const ProductsScreen = () => {
	const dispatch = useDispatch();
	const { loading, error, products, pagination } = useSelector((state) => state.product);

	useEffect(() => {
		dispatch(getProducts(1));
	}, [dispatch]);

	return (
		<>
			{products.length > 1 && (
				<Box>
					<Wrap spacing='30px' justify='center' minHeight='80vh' mx={{ base: '12', md: '20', lg: '32' }}>
						{products.map((product) => (
							<WrapItem key={product._id}>
								<Center w='250px' h='450px'>
									<ProductCard product={product} loading={loading} />
								</Center>
							</WrapItem>
						))}
					</Wrap>
				</Box>
			)}
		</>
	);
};

export default ProductsScreen;
