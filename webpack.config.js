var path = require('path');

module.exports = {
  context: path.join(__dirname, 'app'),
  entry: './main.js',
  resolve: {
    extensions: ['', '.js', '.sass', '.scss', '.jsx', '.json'],
    root: [
        path.join(__dirname, './node_modules'),
        path.join(__dirname, './app'),
        path.join(__dirname, './styles')
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel?optional[]=runtime&stage=0'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ]
  }
};
