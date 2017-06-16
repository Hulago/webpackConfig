var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.ts'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.ts', '.tsx', '.json', '.html', '.scss', '.css'],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'assets': resolve('src/assets'),
      'constants': resolve('src/constants'),
      'managers': resolve('src/managers'),
      'components': resolve('src/components'),
      'models': resolve('src/models'),
      'router': resolve('src/router'),
      'views': resolve('src/views')
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, 
        loader: 'ts-loader', 
        include: [resolve('src')], 
        exclude: /node_modules/,
        options: { appendTsSuffixTo: [/\.vue$/] }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.json$/, 
        loader: 'json'
      },
      {
        test: /\.html$/, 
        loader: 'vue-html-loader', 
        include: [resolve('src')], 
        exclude: /node_modules/
      },
    ]
  }
}
