import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import BrowsePortfolio from './browsePortfolio'
import DetailPage from 'components/detailPage'
import './styles.css'

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <Route path='/portfolio/:slug' component={DetailPage} />
        <Route exact path='/portfolio' component={BrowsePortfolio} />
      </div>
    )
  }
}

export default Portfolio
