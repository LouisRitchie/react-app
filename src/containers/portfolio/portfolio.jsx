import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Disciplines from 'components/disciplines'
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
          </div>
        </div>

        <div className='portfolioItems'>
          {
            Object.keys(detailItems).map((slug, i) => (
              <Slider once style={{width: 320, height: 150}} id={slug} startPositionX={i % 2 === 1 ? 100 : 0} startPositionY={i % 2 === 0 ? 100 : 0}>
                <div className='portfolioItem'>
                  <Link to={`/portfolio/${slug}`}>
                    <h1 className='itemHeading'>{detailItems[slug].heading}</h1>
                    <h2 className='itemSubheading'>{detailItems[slug].subheading}</h2>
                    <Disciplines disciplines={detailItems[slug].disciplines} />
                  </Link>
                </div>
              </Slider>
            ))
          }
        </div>
      </div>
    )
  }
}

export default Portfolio
