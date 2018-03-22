import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p>Website of Louis Ritchie, a Software Developer in Victoria BC | <a href='https://github.com/louisritchie/react-app.git'>view source</a></p>
      </div>
    )
  }
}

export default Footer
