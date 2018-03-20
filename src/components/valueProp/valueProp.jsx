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

  state = {
    refString: `valueProp${this.props.index}`,
    positionY: void 0 // passed to SlidingPhoto; unknown before mount.
  }

  componentDidMount() {
    this.setState({
      positionY: this.refs[this.state.refString].getBoundingClientRect().top
    })
  }

  render() {
    const {
      props: { description, index, heading, subheading, slug },
      state: { positionY, refString }
    } = this

    console.log(positionY)

    return (
      <section ref={refString} className={`valueProp ${index % 2 !== 0 ? 'reverse' : ''}`}>
        <div className='textContainer'>
          <div className='text'>
            <h1>{heading}</h1>
            <h2>{subheading}</h2>
            <p>{description}</p>
          </div>
        </div>
        <SlidingPhoto
          slideDistance={400}
          fromTopOfContainer={120}
          slideToAbsoluteY={positionY}
          slug={slug} />
      </section>
    )
  }
}

export default ValueProp
