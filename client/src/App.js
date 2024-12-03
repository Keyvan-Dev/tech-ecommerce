// Chakra UI
import { ChakraProvider } from '@chakra-ui/react';

// React Router Dom
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// Screens
import ProductsScreen from './screens/ProductsScreen.jsx';

// Components
import Header from './components/Header.jsx';

const App = () => {
	return (
		<ChakraProvider>
			<Router>
				<Header />
				<main>
					<Routes path='/' element={<ProductsScreen />} />
				</main>
			</Router>
		</ChakraProvider>
	);
};

export default App;
