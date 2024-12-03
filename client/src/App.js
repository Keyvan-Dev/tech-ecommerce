// Chakra UI
import { ChakraProvider } from '@chakra-ui/react';

// Screens
import ProductsScreen from './screens/ProductsScreen.jsx';

const App = () => {
	return (
		<>
			<ChakraProvider>
				<ProductsScreen />
			</ChakraProvider>
		</>
	);
};

export default App;
