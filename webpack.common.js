const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src/scripts/index.js'),
    signin: path.resolve(__dirname, 'src/scripts/signin.js'),
    signup: path.resolve(__dirname, 'src/scripts/signup.js'),
    main: path.resolve(__dirname, 'src/scripts/main.js'),
    cordova: path.resolve(__dirname, 'src/scripts/cordova.js'),
    cordova_plugins: path.resolve(__dirname, 'src/scripts/cordova_plugins.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'fonts/'
						}
					}
				]
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'images/',
						}
					}
				]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/templates/index.html'),
			favicon: "./src/public/images/favicon.ico",
      filename: 'index.html',
      title: 'InstaApp',
      chunks: ['index','cordova','cordova_plugins'],
    }),
    new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/templates/signin.html'),
			favicon: "./src/public/images/favicon.ico",
      filename: 'signin.html',
      title: 'InstaApp',
      chunks: ['signin'],
    }),
    new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/templates/signup.html'),
			favicon: "./src/public/images/favicon.ico",
      filename: 'signup.html',
      title: 'InstaApp',
      chunks: ['signup'],
    }),
    new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/templates/main.html'),
			favicon: "./src/public/images/favicon.ico",
      filename: 'main.html',
      title: 'InstaApp',
      chunks: ['main','cordova','cordova_plugins'],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new CleanWebpackPlugin(),
  ],
};