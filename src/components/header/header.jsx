import React, { Component } from 'react'
import './header.css'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
		console.log('rendering header')
    return (
			<header className="header">
				<h1 className="title">Louis Ritchie</h1>
				<div className="nav">
					{this.props.routes.slice(0).reverse().map(route => (
						<Link
							to={route.path}
							className={`navItem ${window.location.pathname === route.path ? 'selected' : ''}`}>
							{route.name}
						</Link>
					))}
				</div>
			</header>
    )
  }
}

export default Header
