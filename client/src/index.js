// React
import React from 'react';
import ReactDOM from 'react-dom/client';

// React Redux
import { Provider } from 'react-redux';

// Components
import App from './App';

// Redux folder
import store from './redux/store.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
