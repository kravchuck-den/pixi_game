const path = require('path');
const srcFolder = path.join(__dirname, 'client/src');
const distFolder = path.join(__dirname, 'client/public');

module.exports = {
  entry: path.join(srcFolder, 'js/index.js'),
  output: {
    path: path.resolve(distFolder, 'js'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};
