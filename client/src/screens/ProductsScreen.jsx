// Chakra UI
import { Box } from '@chakra-ui/react';

// Components
import ProductCard from '../components/productCard';

const ProductsScreen = () => {
	return (
		<Box>
			<ProductCard product={{name: 'smartphone'}} loading={false}/>
		</Box>
	);
};

export default ProductsScreen;
