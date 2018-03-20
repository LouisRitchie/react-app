import React, { Component } from 'react'
import ValueProp from 'components/valueProp'
import './styles.css'
import items from './items.json'

class Home extends Component {
  render() {
    return (
      <div className='home'>
        {items.map((item, i) => (
          <ValueProp {...item} index={i} />
        ))}
      </div>
    )
  }
}

export default Home
