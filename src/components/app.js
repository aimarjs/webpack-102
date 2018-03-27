import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './nav.css';
import Data from '../data/data';

import Routes from './Routes';

const App = () => (
	<BrowserRouter>
		<Routes />
	</BrowserRouter>
);

export default App;
