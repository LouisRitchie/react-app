import React, { Component } from 'react'
import './nav.css'
import { Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <div className="nav">
				<Link to='/about' className="navItem">About</Link>
				<Link to='/projects' className="navItem">Projects</Link>
				<Link to='/timeline' className="navItem">Timeline</Link>
      </div>
    )
  }
}

export default Nav
