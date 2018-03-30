import React from 'react';
import { hot } from 'react-hot-loader';

import './nav.css';
import Data from '../data/data';
import Aux from '../hoc/Auxy';
import Nav from './Nav';

import Routes from './Routes';

const App = () => (
	<Aux>
		<Nav />
		<Routes />
	</Aux>
);

export default hot(module)(App);
