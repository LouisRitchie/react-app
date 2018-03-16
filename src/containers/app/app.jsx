import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Header from 'components/header'
import routes from 'src/routes.js'
import './app.css'

class App extends Component {
  render() {
		console.log('rendering app')
    return (
      <div className="app">
				<Header routes={routes} />
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
