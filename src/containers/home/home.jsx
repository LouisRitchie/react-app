import React, { Component } from 'react'
import SlidingPhoto from 'components/slidingPhoto'
import './styles.css'
import items from './items.json'

const SLIDE_DISTANCE = 200
const START = 200

class Home extends Component {
  render() {
    return (
      <div className="home">
        {items.map((item, i) => (
          <SlidingPhoto slideDistance={SLIDE_DISTANCE} slideTo={START} image={item.slug} />    
        ))}
      </div>
    )
  }
}

export default Home
