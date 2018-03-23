import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import detailItems from 'containers/portfolio/detailItems.json5'

class DetailPage extends Component {
  componentWillMount() {
    const { match: { params: { slug } } } = this.props

    this.setState({ ...detailItems[slug] })
  }

  render() {
    console.log(this.state)
    return (
      <div className="detailPage">
        {this.state.heading}
      </div>
    )
  }
}

export default DetailPage
