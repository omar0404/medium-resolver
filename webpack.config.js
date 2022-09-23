const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './background.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'background.js'
  }
};