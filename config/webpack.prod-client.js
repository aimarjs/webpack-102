const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
	.BundleAnalyzerPlugin;

const distFolder = path.resolve(__dirname, '../dist');

let cleanOptions = {
	allowExternal: true
};

module.exports = {
	name: 'client',
	entry: {
		main: './src/main.js'
	},
	mode: 'production',
	output: {
		filename: '[name].[hash:20].js',
		chunkFilename: '[name].chunk.js',
		path: distFolder,
		publicPath: '/'
	},
	devServer: {
		contentBase: 'dist',
		overlay: true
	},
	optimization: {
		// minimize: false,
		// runtimeChunk: {
		// 	name: 'vendor'
		// },
		splitChunks: {
			cacheGroups: {
				default: false,
				commons: {
					test: /node_modules/,
					name: 'vendor',
					filename: 'vendor.[chunkhash].js',
					chunks: 'all',
					minSize: 1
				}
			}
		}
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
					{
						loader: 'html-loader',
						options: {
							attrs: ['img:src'],
							minimize: true
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
		new CleanWebpackPlugin(distFolder, cleanOptions),
		new MiniCssExtractPlugin({ filename: '[name].[chunkhash].css' }),
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
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production'),
				WEBPACK: true
			}
		}),
		new UglifyJSPlugin({
			sourceMap: true
		}),
		new CompressionPlugin({
			algorithm: 'gzip'
		}),
		new BrotliPlugin(),
		new BundleAnalyzerPlugin()
	]
};
