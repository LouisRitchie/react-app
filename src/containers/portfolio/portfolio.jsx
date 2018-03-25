import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Disciplines from 'components/disciplines'
import DetailPage from 'containers/detailPage'
import Slider from 'components/slider'
import detailItems from './detailItems.json5'
import './styles.css'

class Portfolio extends Component {
  render() {
    return (
      <div className='portfolio'>
        <div className='splash'>
          <div className='splashHeading'>
            <h1>Portfolio</h1>
            {this.props.match.params.slug && <h3 onClick={this.props.history.goBack} className='backButton'>{'<< Go Back'}</h3>}
          </div>
        </div>

        <Route key='/portfolio/:slug' path='/portfolio/:slug' render={(props) =>
          (
            <DetailPage {...props} />
          )} />

        <Route exact key='/portfolio' path='/portfolio' render={() =>
          (
            <div className='portfolioItems'>
              {
                Object.keys(detailItems).map((slug, i) => (
                  <Slider once style={{width: 340, height: 150}} id={slug} startPositionX={i % 2 === 1 ? 100 : 0} startPositionY={i % 2 === 0 ? 100 : 0}>
                    <Link className='portfolioItem' to={`/portfolio/${slug}`}>
                      <h3 className='itemHeading'>{detailItems[slug].heading}</h3>
                      <h4 className='itemSubheading'>{detailItems[slug].subheading}</h4>
                      <Disciplines disciplines={detailItems[slug].disciplines} />
                    </Link>
                  </Slider>
                ))
              }
            </div>
          )} />
      </div>
    )
  }
}

export default Portfolio
