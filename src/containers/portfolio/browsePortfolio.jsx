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
                <div className='itemHeading'>{detailItems[slug].heading}</div> 
                <div className='itemSubheading'>{detailItems[slug].subheading}</div> 
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
