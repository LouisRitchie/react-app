import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

class HireMe extends Component {
  render() {
    return (
      <div className='hireme'>
        <img className='hiremeImage' src={require('static/images/myface.jpg')} />
        <div className='hiremeText'>
          <h2>I'm a programmer with years of experience.</h2>

          <p className='sellParagraph'>
            I've seen a lot of code. I've been in company meetings every week for years.
          </p>

          <p className='sellParagraph'>
            I have been fortunate to have spent a <em>lot</em> of time working on frontends, to have shipped a respectable number of backend features, and to have deployed my share of microservices.
          </p>

          <p className='sellParagraph'>
            My skills in estimation, scheduling, and self-management have had their development cost subsidized by my years working for San Francisco- and Victoria-based companies.
          </p>

          <p className='sellParagraph'>
            I'm hungry for opportunities. I am always busy and have my hands constantly full, but if you feel that we should have a coffee, I can make time for you.
          </p>

          <h2>Let's get together.</h2>

          <p className='sellParagraph'>
            It's always interesting to talk to an intelligent person.
          </p>

          <p className='sellParagraph'>
            My email: <a href="mailto:louis@louisritchie.com" target="_top">louis@louisritchie.com</a>
          </p>

          <p className='sellParagraph'>
            Peruse my old resume if you wish. <a href='http://louisritchie.com/resume.pdf'>Resume (2018)</a>
          </p>
        </div>
      </div>
    )
  }
}

export default HireMe
