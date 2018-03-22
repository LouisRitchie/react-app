import React, { Component } from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'lib/react-vertical-timeline-component';
import 'lib/react-vertical-timeline-component/style.min.css';
import './styles.css'
import icons from 'static/icons'

const timelineItems = [
  {
    title: 'Global Game Jam',
    role: 'Lead Organizer',
    description: 'Global Game Jam was a game development competition that I organized. I raised some $3000 from local companies and used it to pay for food and beverages for an entire weekend of game development. The event had 30 participants. I built a little brochure website in plain HTML, set up EventBrite for ticket sales, had T-shirts printed, registered a venue, and did everything else to get it off the ground.',
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
    discipline: 'git'
  },
  {
    title: 'Global Game Jam',
    role: 'Lead Organizer',
    description: 'Global Game Jam was a game development competition that I organized.',
    start: 'January 2017',
    end: 'March 2017',
    discipline: 'vim'
  },
  {
    title: 'Global Game Jam',
    role: 'Lead Organizer',
    description: 'Global Game Jam was a game development competition that I organized.',
    start: 'January 2017',
    end: 'March 2017',
    discipline: 'javascript'
  },
  {
    title: 'Global Game Jam',
    role: 'Lead Organizer',
    description: 'Global Game Jam was a game development competition that I organized.',
    start: 'January 2017',
    end: 'March 2017',
    discipline: 'reactIcon'
  }
]

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
