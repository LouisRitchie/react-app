import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles.css'

class Disciplines extends Component {
  static propTypes = {
    disciplines: PropTypes.array.isRequired,
  }

  render() {
    return (
      <div className='disciplines'>
        {
          this.props.disciplines.map(slug => (
            <span>{slug} </span>
          ))
        }
      </div>
    )
  }
}

export default Disciplines
