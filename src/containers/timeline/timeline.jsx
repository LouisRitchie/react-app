import React, { Component } from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './styles.css'
import icons from 'static/icons'
import timelineItems from './timelineItems.json5'

class Timeline extends Component {
  render() {
    return (
      <div className="timeline">
        <div className='timelineHeader'>Timeline</div>

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
