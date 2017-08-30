const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
	source: path.join(__dirname, 'source'),
	build: path.join(__dirname, 'build')
};

const common = {
	entry: PATHS.source + '/index.js',
	output: {
		path: PATHS.build,
		filename: '[name].js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'webpack app'
		})
	]
	// modules: {
	// 	rules: [
	// 		{

	// 		}
	// 	]
	// },
	
};

const developmentConfig = {
	devServer: {
			stats: 'errors-only',
			port: 3501
	}
};

const productionConfig = {

};

module.exports = function(env){
	if(env === 'production'){
		return common;
	}
	if(env === 'development'){
		return Object.assign(
			{},
			common,
			developmentConfig

		);
	}
};




