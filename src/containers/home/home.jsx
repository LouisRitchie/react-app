import React, { Component } from 'react'
import ValueProp from 'components/valueProp'
import './styles.css'
import { Link } from 'react-router-dom'
import items from 'static/items.json5'
import homeOrdering from 'static/homeOrdering.json5'

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
            <h3>Full Stack Developer | B.Sc. Math & Comp. Sci. (2019)</h3>
            <h3>20 months of F/T | 1 year of P/T</h3>
          </div>
        </div>

        <div className='sectionHeader'>Portfolio</div>

        {homeOrdering.slice(0,3).map((slug, i) => (
          <ValueProp {...items[slug]} index={i} key={slug} />
        ))}

        <div className='sectionHeader viewPortfolio'><Link to='/portfolio'>View Full Portfolio</Link></div>

        {homeOrdering.slice(3).map((slug, i) => (
          <ValueProp {...items[slug]} index={i} key={slug} />
        ))}
      </div>
    )
  }
}

export default Home
