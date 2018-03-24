import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles.css'

// This is a HOC that adds the lifecycle methods that handle our container transitions.
class TransitionContainer extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    hitLightSwitch: PropTypes.func.isRequired
  }

  componentDidMount = () => setTimeout(this.props.hitLightSwitch, 200)

  componentWillUnmount = () => this.props.hitLightSwitch()

  render() {
    return this.props.children
  }
}

export default TransitionContainer
