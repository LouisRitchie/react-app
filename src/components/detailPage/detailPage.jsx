import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

class DetailPage extends Component {
  render() {
    console.log('logging props of detail page: ', this.props)

    return (
      <div className="detailPage">
        I am a detail page
      </div>
    )
  }
}

export default DetailPage
