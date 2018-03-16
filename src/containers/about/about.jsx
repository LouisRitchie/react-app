import React, { Component } from 'react'
import './about.css'

class About extends Component {
  componentDidMount = () => setTimeout(this.props.hitLightSwitch, 200)

  componentWillUnmount = () => this.props.hitLightSwitch()

  render() {
    return (
      <div className="about">
        About Container.
      </div>
    )
  }
}

export default About
