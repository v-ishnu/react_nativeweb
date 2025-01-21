const path = require('path');

module.exports = {
  mode: 'development', // Use 'production' for production builds
  entry: './index.web.js', // Entry point for web
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    alias: {
      'react-native$': 'react-native-web', // Redirect React Native imports to react-native-web
    },
    extensions: ['.web.js', '.js', '.json'], // Resolve web-specific files
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: ['file-loader'],
      },
    ],
  },
  devServer: {
    static: './public', // Serve static files from 'public' folder
    port: 8080,
  },
};
