import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Home from 'containers/home'
import About from 'containers/about'
import Projects from 'containers/projects'
import Timeline from 'containers/timeline'
import Nav from 'components/nav'
import './app.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="header">
          <h1 className="title">Louis Ritchie</h1>
					<Nav />
        </header>
				<div className="container">
					<Switch>
						<Route path='/about' component={About} />
						<Route path='/projects' component={Projects} />
						<Route path='/timeline' component={Timeline} />
						<Route exact path='/' component={Home} />
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
