import React from 'react';
// import { Route, Link } from 'react-router-dom';
// import { Switch } from 'react-router';
// import universal from 'react-universal-component';

// const UniversalComponent = universal(props => import(`./${props.page}`));
// import * as teamActions from '../store/actions/teamActions';
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

// export default () => (
// 	<Switch>
// 		<Route exact path="/" component={Home} />
// 		<Route path="/counter" component={Counter} />
// 		<Route path="/posts" component={Posts} />
// 		<Route path="/about" component={About} />
//
// 		{/* <Route exact path="/">
// 				<UniversalComponent page="Home" />
// 			</Route>
// 			<Route path="/counter">
// 				<UniversalComponent page="Counter" />
// 			</Route>
// 			<Route path="/posts">
// 				<UniversalComponent page="Post" />
// 			</Route>
// 			<Route path="/about">
// 				<UniversalComponent page="About" />
// 			</Route> */}
// 	</Switch>
// );
