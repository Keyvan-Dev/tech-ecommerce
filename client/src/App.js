// Chakra UI
import { ChakraProvider } from '@chakra-ui/react';

// React Router Dom
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// Screens
import ProductsScreen from './screens/ProductsScreen.jsx';
import LandingScreen from './screens/LandingScreen.jsx';
import ProductScreen from './screens/ProductScreen.jsx';

// Components
import Header from './components/Header.jsx';

const App = () => {
	return (
		<ChakraProvider>
			<Router>
				<Header />
				<main>
					<Routes>
						<Route path='/products' element={<ProductsScreen />} />
						<Route path='/' element={<LandingScreen />} />
						<Route path='/product/:id' element={<ProductScreen />} />
					</Routes>
				</main>
			</Router>
		</ChakraProvider>
	);
};

export default App;
