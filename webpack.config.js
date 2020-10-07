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
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      app$: path.resolve(__dirname, './src/components/app/app'),
      mainScreen$: path.resolve(__dirname, './src/components/main-screen/main-screen'),
      offerList$: path.resolve(__dirname, './src/components/offer-list/offer-list'),
      offerCard$: path.resolve(__dirname, './src/components/offer-card/offer-card'),
      favoritesScreen$: path.resolve(__dirname, './src/components/favorites-screen/favorites-screen'),
      offerScreen$: path.resolve(__dirname, './src/components/offer-screen/offer-screen'),
      reviewSection$: path.resolve(__dirname, './src/components/review-section/review-section'),
      reviewList$: path.resolve(__dirname, './src/components/review-list/review-list'),
      reviewItem$: path.resolve(__dirname, './src/components/review-item/review-item'),
      newReview$: path.resolve(__dirname, './src/components/new-review/new-review'),
      signInScreen$: path.resolve(__dirname, './src/components/sign-in-screen/sign-in-screen'),
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
