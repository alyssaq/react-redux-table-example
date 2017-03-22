const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const path = require('path')
const baseConfig = require('./webpack.config.js')

const host = '127.0.0.1'
const port = 3000
const addr = `http://${host}:${port}`

const config = Object.assign({}, baseConfig, {
  devtool: 'inline-source-map',
  entry: [
    `webpack-dev-server/client?${addr}`,
    'webpack/hot/only-dev-server',
    ...baseConfig.entry
  ],
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    // make the store behave like production (less chatty) if desired
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: [ 'react-hot-loader' ],
        include: [ path.join(__dirname, 'src') ]
      },
      ...baseConfig.module.rules
    ]
  }
})

const server = new WebpackDevServer(webpack(config), {
  contentBase: 'src/static/',
  stats: config.stats,
  publicPath: config.output.publicPath,
  hot: false,
  historyApiFallback: true
})

server.listen(port, host, (err) => {
  return err ? console.error(err)
    : console.log(`Listening on: ${addr}`)
})
