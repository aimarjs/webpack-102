import React from 'react';

import App from './App';
import Home from './Home';
import Counter from './Counter';
import Posts from './Post';
import About from './About';

export default [
	{
		...App,
		routes: [
			{
				...Home,
				path: '/',
				exact: true
			},
			{
				...Counter,
				path: '/counter'
			},
			{
				...Posts,
				path: '/posts'
			},
			{
				...About,
				path: '/about'
			}
		]
	}
];
