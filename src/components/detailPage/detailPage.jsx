import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Disciplines from 'components/disciplines'
import SlidingBox from 'components/slidingBox'
import { resize$ } from 'lib/observables.js'
import { Subject } from 'rxjs/Subject'
import 'rxjs/add/operator/take'
import 'rxjs/add/operator/takeUntil'
import './styles.css'
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
    const { description, heading, subheading, times, disciplines, links, photoDescription, isMobile, slug } = this.state

    return (
      <div className='detailPage'>
        <div className='detailPageTop'>
          <div className='headers'>
            <h1>{heading}</h1>
            <h2>{subheading}</h2>
            <div className='times'>{times}</div>
            <Disciplines disciplines={disciplines} />
          </div>
          <SlidingBox
            slideDistance={isMobile ? 100 : 300}
            fromTopOfContainer={isMobile ? 0 : 10}
            index={slug}
            photoDescription={photoDescription}
            slug={slug} />
        </div>
        <div className='detailPageBottom'>
          <div className='detailTitle'>Relevance</div>
          <p className='detailPageDescription'>{description}</p>
          <div className='detailTitle'>Links of Note</div>
          <ol>
            {links.map(({link, description}) => (
              <li>
                <Link to={link}>{description}</Link>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default DetailPage
