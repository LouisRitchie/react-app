import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Disciplines from 'components/disciplines'
import Slider from 'components/slider'
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

  render() {
    const { description, heading, subheading, times, disciplines, links, photoDescription, isMobile, slug } = this.state

    return (
      <Slider style={{marginLeft: 'var(--margin-left)'}} id={slug} startPositionX={100}>
        <div className='detailPage'>
          <div className='detailPageTop'>
            <div className='headers'>
              <h1>{heading}</h1>
              <h2>{subheading}</h2>
              <div className='times'>{times}</div>
              <Disciplines disciplines={disciplines} />
            </div>
            <div>
              <img
                className='photo'
                src={require(`static/images/${slug}.png`)} />
              <p className='boxText'>{photoDescription}</p>
            </div>
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
      </Slider>
    )
  }
}

export default DetailPage
