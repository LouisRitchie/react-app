import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles.css'
import icons from 'static/icons'

const displayNames = {
  cpp: 'C++',
  css: 'CSS',
  github: 'GitHub',
  git: 'Git',
  javascript: 'Javascript',
  java: 'Java',
  lua: 'Lua',
  nginx: 'NGINX',
  node: 'Node',
  _react: 'React',
  rails: 'Ruby on Rails',
  school: 'School',
  twitter: 'Twitter',
  ubuntu: 'Ubuntu',
  vim: 'Vim',
  work: 'Work'
}

class Disciplines extends Component {
  static propTypes = {
    disciplines: PropTypes.array.isRequired,
  }

  render() {
    return (
      <div className='disciplines'>
        {
          this.props.disciplines.map(slug => (
            <span>
              {icons[slug]}&nbsp;
              <span><em>{displayNames[slug]}</em>&nbsp;</span>
            </span>
          ))
        }
      </div>
    )
  }
}

export default Disciplines
