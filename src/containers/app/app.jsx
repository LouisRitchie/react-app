import React, { Component } from 'react';
import Nav from 'components/nav'
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Louis Ritchie</h1>
					<Nav />
        </header>
        <p className="app-intro">
          crowder.......
        </p>
      </div>
    );
  }
}

export default App;
