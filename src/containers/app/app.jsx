import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Header from 'components/header'
import Footer from 'components/footer'
import routes from 'src/routes.js'
import './app.css'

class App extends Component {
  state = {
    lightsOn: false // when lights off, opacity is 0.
  }

  _hitLightSwitch = () => this.setState({ lightsOn: !this.state.lightsOn })

  render() {
    const { lightsOn } = this.state

    return (
      <div className="app">
        <Header />

        <div className={`container ${lightsOn ? 'lightsOn' : ''}`}>
          <Switch>
            {routes.map(({path, component: Component}) => (
              <Route path={path} render={props => <Component {...props} hitLightSwitch={this._hitLightSwitch} />} />
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
