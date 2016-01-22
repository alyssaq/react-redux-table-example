var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer')
var embedFileSize = 65536

var output = {
  path: path.join(__dirname, 'build'),
  filename: 'app.js',
  publicPath: '/'
}

var assetsLoaders = [
  {test: /\.css$/, loader: 'style!css!postcss'},
  {test: /\.styl$/, loader: 'style!css!postcss!stylus'},
  {test: /\.json$/, loader: 'json'},
  {
    test: /\.svg(\?v=[0-9].[0-9].[0-9])?$/,
    loader: 'file?name=[name].[ext]!url?limit=' + embedFileSize +
      '&mimetype=image/svg+xml'
  },
  {test: /\.png$/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/png'},
  {test: /\.jpg$/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/jpeg'},
  {test: /\.gif$/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/gif'},
  {
    test: /\.(otf|eot|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'url?limit=' + embedFileSize
  }
]

var lintLoader = {
  test: /\.jsx?$/,
  exclude: /node_modules/,
  loader: 'eslint'
}

var plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.DedupePlugin()
]

var babelLoader = {
  loader: 'babel-loader',
  include: [
    path.resolve(__dirname, 'src')
  ],
  test: /\.jsx?$/,
  // Options to configure babel
  query: {
    cacheDirectory: true,
    plugins: ['transform-runtime', 'babel-plugin-add-module-exports'],
    presets: ['es2015', 'stage-0', 'react']
  }
}

var commonConfig = {
  output: output,

  standard: {
    parser: 'babel-eslint'
  },

  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],

  resolve: {
    extensions: ['', '.js', '.styl']
  },

  stats: {
    chunkModules: false,
    colors: true
  }
}

var production = Object.assign({
  devtool: 'eval',
  entry: [
    './src/app'
  ],

  plugins: plugins.concat([
    new webpack.optimize.UglifyJsPlugin({
      compressor: { warnings: false }
    }),
    new webpack.DefinePlugin({
      'process.env': {NODE_ENV: JSON.stringify('production')}
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin()
  ]),

  module: {
    loaders: [].concat(
      assetsLoaders, babelLoader
    )
  }
}, commonConfig)

var development = Object.assign({
  port: 3000,
  devtool: 'inline-source-map',
  debug: true,
  entry: [
    './src/app',
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server'
  ],

  plugins: plugins.concat([
    new webpack.HotModuleReplacementPlugin()
  ]),

  module: {
    loaders: [].concat(
      assetsLoaders, {
        test: /\.jsx?$/,
        loaders: ['react-hot'],
        include: path.join(__dirname, 'src')
      }, babelLoader
    ),
    preLoaders: [].concat(lintLoader)
  }
}, commonConfig)

module.exports = production
module.exports.development = development
