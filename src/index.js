import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ContextProvider } from './components/Context';
import App from './App';
import {Provider} from 'react-redux';
import store from './store';

ReactDOM.render(
	<ContextProvider>
		<Provider store={store}>
			<Router>
				<App />
			</Router>
		</Provider>
	</ContextProvider>,
	document.getElementById('root')
);
