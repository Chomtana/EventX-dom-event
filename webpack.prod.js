const path = require('path');
const webpack = require('webpack');


module.exports = {
  entry: './src/dom.js',
  mode: 'production',
  output: {
    filename: 'eventx-dom.min.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    /*new webpack.ProvidePlugin({
        evx: "eventx-core"
    })*/
  ]
};
