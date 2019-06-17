const path = require('path')
const express = require('express')
const webpack = require('webpack')
const config = require('./webpack/webpack.config.js')
const devConfig = require('./webpack/webpack.config.development.js')
const prodConfig = require('./webpack/webpack.config.production.js')

let PUBLIC_URL

function startExpress(port) {
  const app = express()
  const PUBLIC_DIR = path.join(__dirname, 'public')
  const DIST_DIR = path.join(__dirname, 'webpack/dist')
  PUBLIC_URL = `http://localhost:${port}`

  app.use(express.static(PUBLIC_DIR))

  app.get('python-tcp-tutorial-binary-tides.html', function (req, res) {
    res.sendFile(path.join(PUBLIC_DIR, 'python-tcp-tutorial-binary-tides.html'))
  })

  app.get('(/|/*/)bundle.js', function (req, res) {
    res.sendFile(path.join(DIST_DIR, 'bundle.js'))
  })

  app.get('*.(png|jpg|gif)', function (req, res) {
    res.sendFile(path.join(DIST_DIR, `/${req.path.split('/')[req.path.split('/').length - 1]}`))
  })

  app.get('*.pdf', function (req, res) {
    res.sendFile(path.join(DIST_DIR, req.path))
  })

  app.get('/(*|*/*)', function (req, res) {
    res.sendFile(path.join(PUBLIC_DIR, 'index.html'))
  })

  app.listen(port)
  console.log('[EXPRESS] Listening on port 3000.')
}

startExpress(3000)
