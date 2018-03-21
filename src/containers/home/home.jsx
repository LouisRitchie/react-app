import React, { Component } from 'react'
import ValueProp from 'components/valueProp'
import './styles.css'
import items from './items.json'

class Home extends Component {
  render() {
    return (
      <div className='home'>
        <div className='splash'>
          <h1>Louis Ritchie</h1>
          <h2>Software Developer | Victoria, BC</h2>
          <h3>B.Sc. Mathematics & Computer Science | Graduating 2019 | 18 months full-time development experience</h3>
        </div>

        {items.map((item, i) => (
          <ValueProp {...item} index={i} key={item.slug} />
        ))}
      </div>
    )
  }
}

export default Home
