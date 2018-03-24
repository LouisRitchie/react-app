import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Disciplines from 'components/disciplines'
import Slider from 'components/slider'
import detailItems from './detailItems.json5'
import './styles.css'

class BrowsePortfolio extends Component {
  render() {
    return (
      <div className='browsePortfolio'>
        {
          Object.keys(detailItems).map((slug, i) => (
            <div className='browseItem'>
              <Slider id={slug} startPositionX={i % 2 === 1 ? 400 : 0} startPositionY={i % 2 === 0 ? 400 : 0}>
                <Link to={`/portfolio/${slug}`}>
                  <h1 className='itemHeading'>{detailItems[slug].heading}</h1>
                  <h2 className='itemSubheading'>{detailItems[slug].subheading}</h2>
                  <Disciplines disciplines={detailItems[slug].disciplines} />
                </Link>
              </Slider>
            </div>
          ))
        }
      </div>
    )
  }
}

export default BrowsePortfolio
