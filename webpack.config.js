const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const isDevServer = process.argv.find(v => v.includes('webpack-dev-server'));

module.exports = env => 
{
	env || (env = {});

	const DEBUG = !!env.DEBUG || isDevServer;

	let plugins =
	[
		new CopyWebpackPlugin(['./public'])
	];

	if (!DEBUG)
	{
		plugins.unshift(new webpack.optimize.UglifyJsPlugin({compress:{warnings:false}}));
	}

	return {

		entry: './src/index.ts',
		devtool: 'source-map',

		output: 
		{
			path: path.resolve(__dirname, 'dist'),
			filename: 'app.js'
		},

		resolve: 
		{
			extensions: ['.ts', '.tsx', '.js']
		},

		module: 
		{
			loaders: 
			[
				{
					test: /\.tsx?$/, 
					loader: 'ts-loader'
				},
				{
					test: /\.scss$/,
					loader: 'style-loader!css-loader!sass-loader'
				},
				{
					test: /\.(txt|html)$/, // Use html-loader if you want HTML compression, inline images, etc
					loader: 'raw-loader'
				},
			]
		},

		plugins,

		devServer: 
		{
			https: false,
			host: 'localhost',
			port: '8086',
			clientLogLevel: 'none'
		},

	};
}
