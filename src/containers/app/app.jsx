import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Nav from 'components/nav'
import routes from 'src/routes.js'
import './app.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="header">
          <h1 className="title">Louis Ritchie</h1>
					<Nav routes={routes} />
        </header>
				<div className="container">
					<Switch>
            {routes.map(route => (
              <Route path={route.path} component={route.component} />
            ))}
						<Redirect from='/*' to='/' />
					</Switch>
				</div>
        <header className="footer">
					<p className='footerText'>Website of Louis Ritchie</p>
        </header>
      </div>
    )
  }
}

export default App
