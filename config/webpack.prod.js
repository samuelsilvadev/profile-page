const path = require('path');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const dev = require('./webpack.dev');

module.exports = merge(dev, {
	mode: 'production',
	plugins: [
		new UglifyJsPlugin({
			test: /\.js($|\?)/i
		})
	]
})
