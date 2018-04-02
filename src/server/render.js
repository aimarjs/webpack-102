import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import serialize from 'serialize-javascript';
import flushChunks from 'webpack-flush-chunks';
import { flushChunkNames } from 'react-universal-component/server';
import { matchRoutes, renderRoutes } from 'react-router-config';
import Routes from '../components/Routes';
import createStore from '../store/store';

import App from '../components/App';

export default ({ clientStats }) => (req, res) => {
	const { js, styles } = flushChunks(clientStats, {
		chunkNames: flushChunkNames()
	});

	// console.log(js);

	const store = createStore();

	const promises = matchRoutes(Routes, req.path)
		.map(({ route }) => {
			return route.loadData ? route.loadData(store) : null;
		})
		.map(promise => {
			if (promise) {
				return new Promise((resolve, reject) => {
					promise.then(resolve).catch(resolve);
				});
			}
		});

	Promise.all(promises).then(() => {
		const context = {};
		const content = renderToString(
			<Provider store={store}>
				<StaticRouter location={req.url} context={context}>
					{renderRoutes(Routes)}
				</StaticRouter>
			</Provider>
		);

		// if (context.url) {
		// 	return res.redirect(301, context.url);
		// }
		// if (context.notFound) {
		// 	res.status(404);
		// }

		const serializedState = serialize(store.getState());

		const html = `
	    <!DOCTYPE html>
	    <html lang="en">
	    <head>
	      <meta charset="UTF-8">
	      <meta name="viewport" content="width=device-width, initial-scale=1.0">
	      <meta http-equiv="X-UA-Compatible" content="ie=edge">
	      <title>Webpack</title>
				${styles}
	    </head>
	    <body>
	      <div id="root">${content}</div>
				<script>
					window.__PRELOADED_STATE__ = ${serializedState}
	      </script>
				${js}
	    </body>
	    </html>
	  `;

		res.send(html);
	});
};
