import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SlidingPhoto from 'components/slidingPhoto'
import './styles.css'

class ValueProp extends Component {
  static propTypes = {
    description: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    heading: PropTypes.string.isRequired,
    subheading: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired
  }

  render() {
    const { description, index, heading, subheading, slug } = this.props

    return (
      <section className={`valueProp ${index % 2 !== 0 ? 'reverse' : ''}`}>
        <div className='textContainer'>
          <div className='text'>
            <h1>{heading}</h1>
            <h2>{subheading}</h2>
            <p>{description}</p>
          </div>
        </div>
        <SlidingPhoto slideDistance={400} fromTop={120} slideTo={120 + (650 * index)} slug={slug} />
      </section>
    )
  }
}

export default ValueProp
