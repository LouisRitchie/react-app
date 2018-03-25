import React, { Component } from 'react'
import ValueProp from 'components/valueProp'
import './styles.css'
import { Link } from 'react-router-dom'
import items from './items.json5'

class Home extends Component {
  render() {
    return (
      <div className='home'>
        <div className='splash'>
          <section></section>
          <section></section>
          <section></section>
          <section></section>
          <section></section>
          <div className='splashHeading'>
            <h1>Louis Ritchie</h1>
            <h2>Software Developer | Victoria, BC</h2>
            <h3>B.Sc. Mathematics & Computer Science | Graduating 2019 | 18 months full-time development experience</h3>
          </div>
        </div>

        <div className='sectionHeader'>Portfolio</div>

        {items.slice(0,3).map((item, i) => (
          <ValueProp {...item} index={i} key={item.slug} />
        ))}

        <div className='sectionHeader viewPortfolio'><Link to='/portfolio'>View Full Portfolio</Link></div>

        {items.slice(3).map((item, i) => (
          <ValueProp {...item} index={i} key={item.slug} />
        ))}
      </div>
    )
  }
}

export default Home
