import React, { Component } from 'react'
import './home.css'

class Home extends Component {
  componentDidMount = () => setTimeout(this.props.hitLightSwitch, 200)

  componentWillUnmount = () => this.props.hitLightSwitch()

  render() {
    return (
      <div className="home">
        Home Container.
      </div>
    )
  }
}

export default Home
