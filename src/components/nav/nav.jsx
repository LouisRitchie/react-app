import React, { Component } from 'react';
import './nav.css';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
				<a className="navItem">About</a>
				<a className="navItem">Projects</a>
				<a className="navItem">Timeline</a>
      </div>
    );
  }
}

export default Nav;
