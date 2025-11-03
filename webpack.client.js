const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'client', 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist', 'client'),
    filename: 'static/js/[name].[contenthash].js',
    publicPath: '/',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'client', 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env','@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/media/[name].[hash][ext]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'client', 'public', 'index.html'),
      filename: 'index.html'
    })
    // ,
    // new CopyPlugin({
    //   patterns: [
    //     { from: path.resolve(__dirname, 'client', 'public', 'favicon.ico'), to: '.' }
    //   ].filter(Boolean)
    // })
  ]
};