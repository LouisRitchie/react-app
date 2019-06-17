const path = require('path')
const express = require('express')
const webpack = require('webpack')
const config = require('./webpack/webpack.config.js')
const devConfig = require('./webpack/webpack.config.development.js')
const prodConfig = require('./webpack/webpack.config.production.js')

function webpack() {
  const compiler = webpack(process.argv[2] === 'dev'
    ? { ...config, ...devConfig }
    : { ...config, ...prodConfig }
  )

  compiler.watch({
    aggregateTimeout: 300,
    poll: undefined
  }, (err, stats) => {
    if (err) {
      console.log('[WEBPACK] ERROR: ' + err)
    } else {
      console.log('[WEBPACK] Finished compiling.')
      console.log(stats.toString())
      // do nothing with stats, as it appears to be a big object...
    }
  })
}

webpack()
