import React, { Component } from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './styles.css'
import icons from 'static/icons'
import timelineItems from './timelineItems.json5'

class Timeline extends Component {
  // transform the timeline elements into links.
  componentDidMount() {
    const elements = document.getElementsByClassName('vertical-timeline-element-content')

    for (let i in elements) {
      if (isNaN(i)) {
        break
      }

      elements[i].setAttribute('data-slug', 'reelgood')
      elements[i].addEventListener('click', ({currentTarget: {dataset: {slug}}}) => this.props.history.push(`portfolio/${slug}`))
    }
  }

  render() {
    return (
      <div className="timeline">
        <div className='splash'>
          <div className='splashHeading'>
            <h1>Timeline</h1>
          </div>
        </div>

        <VerticalTimeline>
          {timelineItems.map(({title, role, description, start, end, discipline}) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date={`${start} - ${end}`}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={icons[discipline]}
            >
              <h3 className="vertical-timeline-element-title">{title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{role}</h4>
              <p>{description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    )
  }
}

export default Timeline
