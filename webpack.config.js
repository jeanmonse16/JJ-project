/* eslint-disable quotes */
/* eslint-disable quote-props */
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = (env, argv) => {
  const development = {
    "authMethod": JSON.stringify('jwt'),
    "USERS_API": JSON.stringify('http://localhost:9000/.netlify/functions/api/users/'),
    "FACEBOOK_APP_ID": JSON.stringify('928954197608186'),
    "GOOGLE_APP_ID": JSON.stringify('39290471449-jfojerbm3kggrh32smknhreil1vc5m8e.apps.googleusercontent.com'),
    "GRAVATAR_API": JSON.stringify('http://www.gravatar.com/avatar/'),
    "RANDOM_ITEMS_API": JSON.stringify('http://randomuser.me/api/'),
    "filesUrl": JSON.stringify('http://localhost:9000/netlify/functions/api/taskfiles/'),
    "cdnOrigin": JSON.stringify('http://localhost:9000')
  }

  const production = {
    "authMethod": JSON.stringify('jwt'),
    "USERS_API": JSON.stringify('https://festive-heyrovsky-0aafff.netlify.app/.netlify/functions/api/users/'),
    "FACEBOOK_APP_ID": JSON.stringify('928954197608186'),
    "GOOGLE_APP_ID": JSON.stringify('39290471449-jfojerbm3kggrh32smknhreil1vc5m8e.apps.googleusercontent.com'),
    "GRAVATAR_API": JSON.stringify('https://www.gravatar.com/avatar/'),
    "RANDOM_ITEMS_API": JSON.stringify('https://randomuser.me/api/'),
    "filesUrl": JSON.stringify('https://festive-heyrovsky-0aafff.netlify.app/netlify/functions/api/taskfiles/'),
    "cdnOrigin": JSON.stringify('https://festive-heyrovsky-0aafff.netlify.app')
  }

  const local = {
    "authMethod": JSON.stringify('jwt'),
    "USERS_API": JSON.stringify('http://localhost:3010/users/'),
    "FACEBOOK_APP_ID": JSON.stringify('928954197608186'),
    "GOOGLE_APP_ID": JSON.stringify('39290471449-jfojerbm3kggrh32smknhreil1vc5m8e.apps.googleusercontent.com'),
    "GRAVATAR_API": JSON.stringify('https://www.gravatar.com/avatar/'),
    "RANDOM_ITEMS_API": JSON.stringify('https://randomuser.me/api/'),
    "filesUrl": JSON.stringify('http://localhost:3010/taskfiles/'),
    "cdnOrigin": JSON.stringify('http://localhost')
  }

  const environtmentSettings = { "development": development, "production": production, "local": local }

  return {
    devServer: {
      contentBase: './',
      hot: true,
      port: 3000
    },
    output: {
      path: path.resolve(__dirname, 'public'),
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
        ENV: environtmentSettings[argv.mode] || environtmentSettings.local
      })
    ]
  }
}
