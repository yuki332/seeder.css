const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
	// entry: ['./src/sass/main.scss', './src/js/main.js'],
	entry: './src/main.scss',
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					miniCssExtractPlugin.loader,
					{ loader: 'css-loader', options: {minimize: true }},
					'sass-loader'
				]
			}
		]
	},
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				// sourceMap: true // set to true if you want JS source maps
			}),
			new OptimizeCSSAssetsPlugin({})
		]
	},
	plugins: [
		new miniCssExtractPlugin({
			filename: 'main.css'
		})
	]
}
