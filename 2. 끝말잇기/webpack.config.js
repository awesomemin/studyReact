const path = require('path');

module.exports = {
  name: 'wordrelay-setting',
  mode: 'development', // 실 서비스 : production
  devtool: 'eval', // 실 서비스 : hidden-source-map
  resolve: {
    extensions: ['.js', '.jsx']
  },

  entry: {
    app: ['./client'],
  }, // 입력

  module: {
    rules: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: ['@babel/plugin-proposal-class-properties'],
      }
    }],
  },

  output: {
    path: path.join(__dirname, 'dist'), 
    filename: 'app.js',
  }, // 출력
};