import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Home from 'containers/home'
import About from 'containers/about'
import Projects from 'containers/projects'
import Timeline from 'containers/timeline'
import Nav from 'components/nav'
import './app.css'

const routes = [
  {
    path: '/about',
    component: About,
    name: 'About'
  },
  {
    path: '/projects',
    component: Projects,
    name: 'Projects'
  },
  {
    path: '/timeline',
    component: Timeline,
    name: 'Timeline'
  },
  {
    path: '/',
    component: Home,
    name: 'Home'
  }
]

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
					<p className='footerText'>Louis Ritchie</p>
        </header>
      </div>
    )
  }
}

export default App
