import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import About from 'containers/about'
import Projects from 'containers/projects'
import Timeline from 'containers/timeline'
import Nav from 'components/nav'
import './app.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Louis Ritchie</h1>
					<Nav />
        </header>
				<Route path='/about' component={About} />
				<Route path='/projects' component={Projects} />
				<Route path='/timeline' component={Timeline} />
      </div>
    )
  }
}

export default App
