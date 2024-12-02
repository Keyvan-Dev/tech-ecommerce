// React
import { useEffect, useState } from 'react';

// Chakra UI
import { Box, Wrap, WrapItem, Center } from '@chakra-ui/react';

// Axios
import axios from 'axios';

// Components
import ProductCard from '../components/ProductCard';

const ProductsScreen = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get('/api/products')
			.then((response) => {
				setData(response.data.products);
			})
			.catch((error) => {
				console.error('Error fetching data: ', error);
			});
	}, []);

	return (
		<>
			{data.length > 1 && (
				<Box>
					<Wrap spacing='30px' justify='center' minHeight='80vh' mx={{ base: '12', md: '20', lg: '32' }}>
						{data.map((product) => (
							<WrapItem key={product._id}>
								<Center w='250px' h='450px'>
									<ProductCard product={product} loading={false} />
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
