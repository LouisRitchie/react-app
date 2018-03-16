import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Header from 'components/header'
import Footer from 'components/footer'
import routes from 'src/routes.js'
import './app.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />

        <div className="container">
          <Switch>
            {routes.map(route => (
              <Route path={route.path} component={route.component} />
            ))}
            <Redirect from='/*' to='/' />
          </Switch>
        </div>

        <Footer />
      </div>
    )
  }
}

export default App
