const path = require('path');
const webpack = require('webpack');
const externals = require('./node-externals');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const buildFolder = path.resolve(__dirname, '../build');

let cleanOptions = {
	allowExternal: true
};

module.exports = {
	name: 'server',
	target: 'node',
	externals,
	entry: './src/server/render.js',
	mode: 'production',
	output: {
		filename: 'prod-server-bundle.js',
		chunkFilename: '[name].js',
		path: path.resolve(__dirname, '../build'),
		libraryTarget: 'commonjs2'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader'
					}
				],
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: {
					loader: 'css-loader'
				}
			},
			{
				test: /\.(jpg|gif|png)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'images/[name]-[hash:8].[ext]',
							emitFile: false
						}
					}
				]
			},
			{
				test: /\.md$/,
				use: [
					{
						loader: 'markdown-with-front-matter-loader'
					}
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(buildFolder, cleanOptions),
		new webpack.DefinePlugin({
			'process.env': JSON.stringify('production')
		})
	]
};
