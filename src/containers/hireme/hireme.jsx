import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

class HireMe extends Component {
  render() {
    return (
      <div className='hireme'>
        <img className='hiremeImage' src={require('static/images/myface.jpg')} />
        <div className='hiremeText'>
          <h2>My specialty is beautiful interfaces.</h2>

          <p className='sellParagraph'>
            I'm a web app builder. I build responsive web interfaces that look great and feel intuitive on any device.
          </p>

          <p className='sellParagraph'>
            I've written many microservices and APIs, so I can create the user interface <em>and</em> manage your data.
          </p>

          <p className='sellParagraph'>
            Teamwork and communication are what make or break projects, so I provide you with details before you need them. I've worked for fast-paced startups in Victoria and in San Fransisco, where it's imperative that the full scope of features is made clear <em>before</em> development starts.
          </p>

          <p className='sellParagraph'>
            I'm a freelance developer. I'm not part of a consulting firm or company; I'm still in school. Together, we can create a great app without the <em>excruciating</em> hourly rates of professional development teams.
          </p>

          <h2>I'm looking for new projects!</h2>

          <p className='sellParagraph'>
            Do you have one? Let's get in touch: <a href="mailto:louiscritchie@gmail.com?Subject=I want a beautiful app!" target="_top">louiscritchie@gmail.com</a>
          </p>

          <p className='sellParagraph'>
            <a href='http://louisritchie/resume.pdf'>Resume (2018)</a>
          </p>
        </div>
      </div>
    )
  }
}

export default HireMe
