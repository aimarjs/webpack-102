import React from 'react';
import { hot } from 'react-hot-loader';
import { renderRoutes } from 'react-router-config';

import './nav.css';
import Data from '../data/data';
import Aux from '../hoc/Auxy';
import Nav from './Nav';

const App = ({ route }) => {
	return (
		<Aux>
			<Nav />
			{renderRoutes(route.routes)}
		</Aux>
	);
};

export default { component: App };
