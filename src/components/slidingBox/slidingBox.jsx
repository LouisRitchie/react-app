import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { scroll$ } from 'lib/observables.js'
import { interval } from 'rxjs/observable/interval'
import { take } from 'rxjs/operators/take'
import { Subject } from 'rxjs/Subject'
import 'rxjs/add/operator/sample'
import 'rxjs/add/operator/takeUntil'
import './styles.css'

const IMAGE_HEIGHT = 500 // set image size here. Must be consistent for all home container images

class SlidingBox extends Component {
  static propTypes = {
    slideDistance: PropTypes.number.isRequired,
    fromTopOfContainer: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired
  }

  /*  the initial state has the image at zero opacity and at start position, so that
   *  even if image is 1st on page, it will still slide in to view on mount.
   */
  state = {
    coefficient: 1,
    refString: `valueProp${this.props.index}`
  }

  componentWillMount() {
    // set up the scroll position observable, which shall emit the latest scroll position every 100ms.
    this._unmount$ = (new Subject).pipe(take(1))
    this._pollScrollPosition$ = scroll$.sample(interval(100)).takeUntil(this._unmount$)

    // subscribe to the observable, so that emitted events are passed to our coefficient function.
    this._pollScrollPosition$.subscribe(scroll => (
      this.setState({
        coefficient: this._getCoefficient(scroll.pageY + document.documentElement.clientHeight)
      })
    ))
  }

  componentDidMount() {
    this.setState({ coefficient: this._getCoefficient(document.documentElement.clientHeight) })
  }

  componentWillUnmount() {
    // unsubscribe from the observable, to avoid memory leaks.
    this._unmount$.next()
  }

  _getCoefficient = pageY => {
    /*  coefficient === 0: image at full opacity and resting at final position
     *  0 < coefficient < 1: image is transitioning
     *  coefficient === 1: image at zero opacity and resting at start position.
     */

    const coefficient = (
      this.props.fromTopOfContainer - document.documentElement.clientHeight + this.refs[this.state.refString].getBoundingClientRect().top +
      this.props.slideDistance
    ) / this.props.slideDistance

    if (coefficient < 0) {
      return 0
    }

    if (coefficient > 1) {
      return 1
    }

    return coefficient
  }

  render() {
    const {
      props: { fromTopOfContainer, slug, photoDescription },
      state: { coefficient, refString }
    } = this

    return (
      <div ref={refString} className='slidingBoxContainer'>
        <div
          className='box'
          style={{
            top: fromTopOfContainer + (coefficient * IMAGE_HEIGHT),
            opacity: 1 - coefficient * 2
          }}>
          <img
            className='photo'
            src={require(`../../static/images/${slug}.png`)} />
          <p className='boxText'>{photoDescription}</p>
        </div>
      </div>
    )
  }
}

export default SlidingBox
