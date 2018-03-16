import React, { Component } from 'react'
import './nav.css'
import { Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        {this.props.routes.slice(0).reverse().map(route => (
          <Link
            to={route.path}
            className={`navItem ${window.location.pathname === route.path ? 'selected' : ''}`}>
            {route.name}
          </Link>
        ))}
      </div>
    )
  }
}

export default Nav
