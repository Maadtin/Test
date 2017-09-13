const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	resolve: {
		extensions: ['.js', '.jsx', '.json', '.css']
	},
	entry: [
		 'webpack-dev-server/client?http://localhost:8080',
		 './src/index.js'
	],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'paquete.js'
	},
	module: {
		rules: [
			{ test: /\.(js|jsx)$/, use: 'babel-loader' },
			{ test: /\.css$/, use: ['style-loader', 'css-loader']},
			{ test: /\.json$/, use: 'json-loader' }
		],
	},
	plugins: [
		 new HtmlWebpackPlugin({template: 'src/index.html'}),
		 new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		historyApiFallback: true,
		open: true,
		hot: true,
		contentBase: './src'
	}
};