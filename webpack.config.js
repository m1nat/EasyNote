const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new HTMLWebpackPlugin({
      filename: 'sign-in.html',
      template: './src/components/sign-in/sign-in.html'
    }),
    new HTMLWebpackPlugin({
      filename: 'sign-up.html',
      template: './src/components/sign-up/sign-up.html'
    }),
    new HTMLWebpackPlugin({
      filename: 'start-page.html',
      template: './src/components/start-page/start-page.html'
    }),
    new HTMLWebpackPlugin({
      filename: 'create-board.html',
      template: './src/components/create-board/create-board.html'
    }),
    new HTMLWebpackPlugin({
      filename: 'reset-password.html',
      template: './src/components/reset-password/reset-password.html'
    }),
    new HTMLWebpackPlugin({
      filename: 'saved-notes.html',
      template: './src/components/saved-nostes/saved-notes.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpg|png|svg|gif)/,
        use: ["file-loader"],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              sources: true
            }
          }
        ]
      }
    ]
  },
  devServer: {
    port: 4200
  }
}