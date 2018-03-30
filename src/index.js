import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import App from './components/App';
import Routes from './components/Routes';

import createStore from './store/store';
// const store = createStore();

const store = createStore(window.__PRELOADED_STATE__);

ReactDOM.hydrate(
	<Provider store={store}>
		<BrowserRouter>{renderRoutes(Routes)}</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
