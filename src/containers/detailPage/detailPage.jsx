import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Disciplines from 'components/disciplines'
import Slider from 'components/slider'
import './styles.css'
import { resize$ } from 'lib/observables.js'
import { Subject } from 'rxjs/Subject'
import 'rxjs/add/operator/take'
import 'rxjs/add/operator/takeUntil'
import detailItems from 'containers/portfolio/detailItems.json5'
import './styles.css'

class DetailPage extends Component {
  state = {
    isMobile: false
  }

  componentWillMount() {
    const { match: { params: { slug } } } = this.props

    this.setState({ ...detailItems[slug] })
  }

  componentDidMount() {
    this._unmount$ = (new Subject()).take(1)
    resize$.takeUntil(this._unmount$).subscribe(this._checkIfMobile)
    this._checkIfMobile()
  }

  componentWillUnmount() {
    this._unmount$.next()
  }

  _checkIfMobile = () => {
    if (this.state.isMobile && document.documentElement.clientWidth > 750) {
      return this.setState({ isMobile: false })
    }

    if (!this.state.isMobile && document.documentElement.clientWidth < 750) {
      return this.setState({ isMobile: true })
    }
  }

  render() {
    const { description, heading, subheading, times, disciplines, links, photoDescription, isMobile, slug, extension, hasImage } = this.state

    return (
      <Slider style={{marginLeft: 'var(--margin-left)', maxWidth: '100%'}} id={slug} startPositionX={1}>
        <div className='detailPage'>
          <div className='detailPageTop'>
            <div className='headers'>
              <h1>{heading}</h1>
              <h3>{subheading}</h3>
              <div className='times'>{times}</div>
              <span><em>Technologies:</em></span><Disciplines disciplines={disciplines} />
            </div>
            <div className='photoWrapper'>
              { hasImage && <img className='photo' src={require(`static/images/${slug}.${extension}`)} /> }
              { hasImage && <p className='boxText'>{photoDescription}</p> }
              { !hasImage && <div className='noImage'>No Image</div> }
            </div>
          </div>
          <div className='detailPageBottom'>
            <div className='detailLeft'>
              <div className='detailTitle'>Relevance</div>
              <p className='detailPageDescription'>{description}</p>
            </div>
            <div className='detailRight'>
              <div className='detailTitle'>Links of Note</div>
              <ol>
                {links.map(({link, description}) => (
                  <li>
                    <a href={link}>{description}</a>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </Slider>
    )
  }
}

export default DetailPage
