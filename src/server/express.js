import express from 'express';
import path from 'path';
import webpack from 'webpack';
import WebpackHotServerMiddleware from 'webpack-hot-server-middleware';

import configDevClient from '../../config/webpack.dev-client.js';
import configDevServer from '../../config/webpack.dev-server.js';
import configProdClient from '../../config/webpack.prod-client.js';
import configProdServer from '../../config/webpack.prod-server.js';

const server = express();
const expressStaticGzip = require('express-static-gzip');

const PORT = process.env.PORT || 8000;
let isBuilt = false;

const done = () => {
	!isBuilt &&
		server.listen(PORT, () => {
			isBuilt = true;
			console.log(
				`Server listening on http://localhost:${PORT} in ${
					process.env.NODE_ENV
				}`
			);
		});
};

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;

if (isDev) {
	const compiler = webpack([configDevClient, configDevServer]);
	const clientCompiler = compiler.compilers[0];
	const serverCompiler = compiler.compilers[1];

	// require('webpack-mild-compile')(compiler);

	const webpackDevMiddleware = require('webpack-dev-middleware')(
		compiler,
		configDevClient.devServer
	);

	const webpackHotMiddleware = require('webpack-hot-middleware')(
		clientCompiler,
		configDevClient.devServer
	);

	const webpackHotServerMiddleware = require('webpack-hot-server-middleware')(
		compiler
	);

	server.use(webpackDevMiddleware);
	server.use(webpackHotMiddleware);
	server.use(webpackHotServerMiddleware);
	// server.use(WebpackHotServerMiddleware(compiler));
	console.log('Middleware enabled');
	compiler.plugin('done', done);
} else {
	webpack([configProdClient, configProdServer]).run((err, stats) => {
		const render = require('../../build/prod-server-bundle.js').default;
		server.use(
			expressStaticGzip('dist', {
				enableBrotli: true
			})
		);
		server.use('*', render());
		done();
	});
}
