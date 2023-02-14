const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './source/js/script.js',
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: 'source/index.html'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },
  module: {
    rules: [{
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    },
    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader", "postcss-loader"],
    }, 
    {
      test: /\.s[ac]ss$/i,
      use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
     }, {
      test: /\.(html)$/,
      use: ['html-loader'],
    }]
  },
};