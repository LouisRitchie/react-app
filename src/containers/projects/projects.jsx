import React, { Component } from 'react'
import './projects.css'

class Projects extends Component {
  componentDidMount = () => setTimeout(this.props.hitLightSwitch, 200)

  componentWillUnmount = () => this.props.hitLightSwitch()

  render() {
    return (
      <div className="projects">
        Projects container.
      </div>
    )
  }
}

export default Projects
