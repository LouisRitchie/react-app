import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Transmit from 'react-transmit';
import App from 'src/entry.js'

function handleRender(req, res) {
  Transmit.renderToString(Hello).then(({reactString, reactData}) => {
    fs.readFile('./public/index.html', 'utf8', function (err, data) {
      if (err) throw err;

      const document = data.replace(/<div id="app"><\/div>/, `<div id="app"><section role="main" class="react-container"><div>${reactString}</div></section></div>`);
      const output = Transmit.injectIntoMarkup(document, reactData, ['/build/client.js']);

      res.send(document);
    });
  });
}

const app = express()
const DIST_DIR = path.join(__dirname, 'webpack/dist')

app.get('(/|/*/)bundle.js', function (req, res) {
  res.sendFile(path.join(DIST_DIR, 'bundle.js'))
})

// TODO serve media from media hosting server
app.get('*.(png|jpg|gif)', function (req, res) {
  res.sendFile(path.join(DIST_DIR, `/${req.path.split('/')[req.path.split('/').length - 1]}`))
})

app.get('*.pdf', function (req, res) {
  res.sendFile(path.join(DIST_DIR, req.path))
})

app.get('/*', (req, res) => {
  handleRender(req, res)
})

app.listen(3000)
console.log('[EXPRESS] Listening on port 3000.')
