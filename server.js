const express = require('express')
const path = require('path')
const app = express()
const buildPath = path.join(__dirname, 'build')

app.use(require('compression')())
app.use(require('body-parser').urlencoded({ extended: false }))
app.use(express.static(buildPath))
app.use(function (req, res, next) {
  if (req.method === 'GET' && req.accepts('html')) {
    res.sendFile('index.html', {root: buildPath}, function (err) {
      return err && next()
    })
  } else next()
})

const port = process.env.PORT || 4000
app.listen(port, '0.0.0.0', function () {
  console.log('Server listening on port: ' + port)
})
