const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    open: true,
    port: 1337,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpe?g|gif|woff2?|ttf|eot)$/,
        use: [ 'file-loader' ]
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@constants': path.resolve(__dirname, './src/constants'),
      '@app': path.resolve(__dirname, './src/components/app/app'),
      '@mainScreen': path.resolve(__dirname, './src/components/main-screen/main-screen'),
      '@favoritesScreen': path.resolve(__dirname, './src/components/favorites-screen/favorites-screen'),
      '@offerScreen': path.resolve(__dirname, './src/components/offer-screen/offer-screen'),
      '@signInScreen': path.resolve(__dirname, './src/components/sign-in-screen/sign-in-screen'),
    }
  },
  devtool: 'source-map',
  plugins: [
    new webpack.ProvidePlugin({
      'React': 'react',
      'PropTypes': 'prop-types',
    }),
  ],
};
