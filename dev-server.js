var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack.config.js').development

var server = new WebpackDevServer(webpack(config), {
  contentBase: 'src/static/',
  stats: config.stats,
  publicPath: config.output.publicPath,
  hot: false,
  historyApiFallback: true
})

server.listen(config.port, 'localhost', function (err) {
  return err ? console.error(err)
    : console.log('Listening on http://localhost:' + config.port)
})
