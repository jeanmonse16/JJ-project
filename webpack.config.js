/* eslint-disable quotes */
/* eslint-disable quote-props */
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = (env, argv) => {
  const development = {
    "usersApi": JSON.stringify('http://localhost:3010/users/')
  }

  const production = {
    "usersApi": JSON.stringify('not-available-yet/')
  }

  const environmentSettings = {
    // eslint-disable-next-line quote-props
    "development": development,
    "production": production,
    "none": development
  }

  return {
    devServer: {
      contentBase: './',
      hot: true,
      port: 3000
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'app.bundle.js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.jpg|png|gif|svg|mp4|webm|woff|eot|ttf$/,
          use: [{
            loader: 'url-loader',
            options: {
              limit: 90000
            }
          }
          ],
          exclude: /node_modules/
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      }),
      new webpack.DefinePlugin({
        USERS_API: JSON.stringify('http://localhost:3010/users/')
      })
    ]
  }
}
