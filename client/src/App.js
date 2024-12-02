// Chakra UI
import { ChakraProvider } from '@chakra-ui/react';

// Screens
import ProductsScreen from './screens/ProductsScreen';

const App = () => {
	return (
		<div>
			<ChakraProvider><ProductsScreen /></ChakraProvider>
		</div>
	);
};

export default App;
