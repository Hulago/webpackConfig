const path = require('path');
const config = require('./config');

// const NotifierPlugin = require('webpack-notifier')
const loaders = [
  {
    test: /\.js$/,
    loader: 'babel-loader',
    include: [config.dev.sourcePath],
    exclude: /node_modules/,
    query: {
      presets: ['es2015']
    }
  },
  {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    loader: 'ts-loader'
  },
  {
    test: /\.(png|jpg|jpeg|gif)$/,
    exclude: /node_modules/,
    loader: 'url',
    query: {
      limit: 500,
      name: `/${config.build.assetsSubDirectory}/images/[name].[hash:7].[ext]`
    }
  },
  {
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    loader: 'url',
    query: {
      limit: 10000,
      name: '/${config.build.assetsSubDirectory}/fonts/[name].[hash:7].[ext]'
    }
  },
  {
    test: /\.html$/,
    exclude: /node_modules/,
    loader: 'html-loader?attrs[]=img:src&attrs[]=img:image-loading-error'
  }
];

const postcss = [
  require('autoprefixer')({
    browsers: [
      'Android 2.3',
      'Android >= 4',
      'Chrome >= 20',
      'Firefox >= 24',
      'Explorer >= 8',
      'iOS >= 6',
      'Opera >= 12',
      'Safari >= 6'
    ]
  })
];


const webpackConfig = {
  entry: {
    // vendor: path.join(config.dev.sourcePath, config.dev.vendorEntryPoint),
    app: path.join(config.dev.entryPointPath, config.dev.entryPoint),
  },
  output: {
    path: config.build.distRoot,
    publicPath: config.build.publicPath,
    // filename for the entry points
    filename: '[name].[hash].bundle.js',
    // filename for non entry points
    chunkFilename: '[id].[name].[hash].js'
  },
  resolve: {
    extensions: ['', '.ts', '.js', '.tsx', '.html'],
    fallback: ['./node_modules'],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'scss': path.resolve(__dirname, '../scss'),
      'components': path.resolve(__dirname, '../src/components')
    }
  },
  module: {
    loaders
  },
  postcss,
  // ts: {
  //   appendTsSuffixTo: [/\.vue$/]
  // }
};

// add hot-reload related code to entry chunks
Object.keys(webpackConfig.entry).forEach(function (name) {
  webpackConfig.entry[name] = ['./config/dev-client'].concat(webpackConfig.entry[name])
})

module.exports = webpackConfig;