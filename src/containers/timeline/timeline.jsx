import React, { Component } from 'react'
import './timeline.css'

class Timeline extends Component {
  componentDidMount = () => setTimeout(this.props.hitLightSwitch, 200)

  componentWillUnmount = () => this.props.hitLightSwitch()

  render() {
    return (
      <div className="timeline">
        Timeline Container.
      </div>
    )
  }
}

export default Timeline
