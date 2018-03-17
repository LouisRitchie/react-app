import React, { Component } from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './timeline.css'
import icons from 'static/icons'

const timelineItems = [
  {
    title: 'Global Game Jam',
    role: 'Lead Organizer',
    description: 'Global Game Jam was a game development competition that I organized.',
    start: 'January 2017',
    end: 'March 2017',
    discipline: 'css'
  },
  {
    title: 'Global Game Jam',
    role: 'Lead Organizer',
    description: 'Global Game Jam was a game development competition that I organized.',
    start: 'January 2017',
    end: 'March 2017',
    discipline: 'css'
  },
  {
    title: 'Global Game Jam',
    role: 'Lead Organizer',
    description: 'Global Game Jam was a game development competition that I organized.',
    start: 'January 2017',
    end: 'March 2017',
    discipline: 'css'
  },
  {
    title: 'Global Game Jam',
    role: 'Lead Organizer',
    description: 'Global Game Jam was a game development competition that I organized.',
    start: 'January 2017',
    end: 'March 2017',
    discipline: 'css'
  },
  {
    title: 'Global Game Jam',
    role: 'Lead Organizer',
    description: 'Global Game Jam was a game development competition that I organized.',
    start: 'January 2017',
    end: 'March 2017',
    discipline: 'css'
  }
]

class Timeline extends Component {
  render() {
    return (
      <div className="timeline">
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
