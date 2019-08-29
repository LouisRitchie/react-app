import React from 'react'
import ReactDOM from 'react-dom'
import 'styles/index.css'
import 'styles/variables.css'
import App from './containers/app'
import { BrowserRouter } from 'react-router-dom'

const root = document.getElementById('root')

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

ReactDOM.render(app, root)

export default app
