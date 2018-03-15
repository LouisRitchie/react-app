import React, { Component } from 'react';
import './nav.css';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
				<span>About</span>
				<span>Projects</span>
				<span>Timeline</span>
      </div>
    );
  }
}

export default Nav;
