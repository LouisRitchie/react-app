import React, { Component } from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import routes from 'src/routes.js'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1 className="title"><Link to='/'>Louis Ritchie</Link></h1>
        <div className="nav">
          {routes.slice(0).reverse().map(route => (
            <Link
              key={route.path}
              to={route.path}
              className={`navItem ${window.location.pathname === route.path ? 'selected' : ''}`}>
              {route.name}
            </Link>
          ))}
        </div>
      </div>
    )
  }
}

export default Header
