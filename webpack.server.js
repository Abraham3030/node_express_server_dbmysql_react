const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'production',
  target: 'node',
  entry: path.resolve(__dirname, 'server', 'app.js'), // ajusta si tu archivo principal tiene otro nombre
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js'
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'server'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  node: {
    __dirname: false,
    __filename: false
  }
};