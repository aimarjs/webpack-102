const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');

module.exports = {
	name: 'client',
	entry: {
		main: ['./src/main.js']
	},
	mode: 'production',
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/'
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
			cacheGroups: {
				vendor: {
					name: 'vendor',
					chunks: 'initial',
					minChunks: 2
				}
			}
		}
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
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: { minimize: true }
					},
					{
						loader: 'postcss-loader'
					}
				]
			},
			{
				test: /\.sass$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'postcss-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: {
							attrs: ['img:src']
						}
					}
				]
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
		new FriendlyErrorsWebpackPlugin(),
		new OptimizeCssAssetsPlugin({
			assetNameRegExp: /\.css$/g,
			cssProcessor: require('cssnano'),
			cssProcessorOptions: {
				discardComments: {
					removeAll: true
				},
				canPrint: true
			}
		}),
		new MiniCssExtractPlugin({ filename: '[name].css' }),
		// new HtmlWebpackPlugin({ template: './src/index.html' }),
		new webpack.DefinePlugin({
			'process.env': JSON.stringify('production')
		}),
		new UglifyJSPlugin({
			sourceMap: true
		}),
		new CompressionPlugin({
			algorithm: 'gzip'
		}),
		new BrotliPlugin()
	]
};
