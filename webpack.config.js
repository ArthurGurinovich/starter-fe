const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractCss = require('./webpack/css.extract');
const devserver = require('./webpack/devserver');
const uglifyJS = require('./webpack/js.uglify');
const images = require('./webpack/images');

const PATHS = {
	source: path.join(__dirname, 'source'),
	build: path.join(__dirname, 'build')
};

const common = {
	entry: {
		'index': PATHS.source + '/pages/index/index.js',
		'login': PATHS.source + '/pages/login/login.js',
	},
	output: {
		path: PATHS.build,
		filename: './js/[name].js'
	},
	// resolve: {
	// 	root: path.resolve(__dirname, '/app'),
	// 	modulesDirectories: ['node_modules'],
	// 	extensions: ['', '.js']
	// },
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			chunks: ['index', 'common'],
			template: PATHS.source + '/pages/index/index.html',
		}),
		new HtmlWebpackPlugin({
			filename: 'login.html',
			chunks: ['login', 'common'],
			template: PATHS.source + '/pages/login/login.html',
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common'
		})
	]	
};

module.exports = function(env){
	if(env === 'production'){
		return merge([
			common,
			extractCss(),
			images()
			//uglifyJS()
		]);
	}
	if(env === 'development'){
		return merge([
			common,
			devserver(),
			sass(),
			css(),
			images()
		]);
	}
};




