import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Disciplines from 'components/disciplines'
import detailItems from './detailItems.json5'
import './styles.css'

class BrowsePortfolio extends Component {
  render() {
    return (
      <div className='browsePortfolio'>
        {
          Object.keys(detailItems).map(slug => (
            <div className='browseItem'>
              <Link to={`/portfolio/${slug}`}>
                <h1 className='itemHeading'>{detailItems[slug].heading}</h1> 
                <h2 className='itemSubheading'>{detailItems[slug].subheading}</h2> 
                <Disciplines disciplines={detailItems[slug].disciplines} />
              </Link> 
            </div>
          ))
        }
      </div>
    )
  }
}

export default BrowsePortfolio
