var path = require('path')
var webpack = require('webpack')

var webpackConfig = {
  devtool: 'inline-source-map',

  resolve: {
    extensions: ['', '.js']
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      include: path.join(__dirname, 'tests')
    }, {
      test: /\.js$/,
      include: path.join(__dirname, 'src'),
      loader: 'isparta'
    }],
    loaders: [
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.styl$/, loader: 'style!css!stylus'},
      {test: /\.json$/, loader: 'json'},
      {test: /\.(svg|png|jpg|gif|otf|eot|ttf|woff|woff2)$/, loader: 'url'}
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react/addons',
      TestUtils: 'react/lib/ReactTestUtils'
    })
  ],
  stats: {
    colors: true
  }
}

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
      'tests/webpack.tests.js'
    ],
    preprocessors: {
      'tests/webpack.tests.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    exclude: [],
    reporters: ['dots', 'coverage'],
    coverageReporter: {
      reporters: [{type: 'text'}, {type: 'text-summary'}]
    },
    captureTimeout: 90000,
    browserNoActivityTimeout: 60000,
    port: 9876,
    colors: true,
    logLevel: config.LOG_ERROR,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true
  })
}
