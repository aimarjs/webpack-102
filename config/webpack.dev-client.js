const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	name: 'client',
	entry: {
		vendor: ['react', 'react-dom'],
		main: [
			'react-hot-loader/patch',
			'babel-runtime/regenerator',
			'webpack-hot-middleware/client?reload=true',
			'./src/main.js'
		]
	},
	mode: 'development',
	output: {
		filename: '[name].js',
		chunkFilename: '[name].chunk.js',
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/'
	},
	devServer: {
		contentBase: 'dist',
		overlay: true
	},
	devtool: 'source-map',
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
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			},
			{
				test: /\.(jpg|gif|png)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'images/[name]-[hash:8].[ext]'
						}
					}
				]
			},
			{
				test: /\.html$/,
				use: [
					// {
					// 	loader: 'file-loader',
					// 	options: {
					// 		name: '[name].[ext]'
					// 	}
					// },
					// {
					// 	loader: 'extract-loader'
					// },
					{
						loader: 'html-loader',
						options: {
							attrs: ['img:src']
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
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development'),
				WEBPACK: true
			}
		}),
		new webpack.HotModuleReplacementPlugin()
		// new HtmlWebpackPlugin({
		// 	template: './src/index.html'
		// })
	]
};
