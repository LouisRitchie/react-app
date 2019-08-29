const path = require('path')
const express = require('express')
const webpack = require('webpack')
const config = require('./webpack/webpack.config.js')
const devConfig = require('./webpack/webpack.config.development.js')
const prodConfig = require('./webpack/webpack.config.production.js')
const ReactDOMServer = require('react-dom/server');

console.log('[WEBPACK] Watching files.')

const compiler = webpack(process.argv[2] === 'dev'
  ? { ...config, ...devConfig }
  : { ...config, ...prodConfig }
)
