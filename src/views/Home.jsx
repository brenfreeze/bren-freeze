import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Fade } from 'react-reveal'
import randomQuotes from 'random-quotes'
import Slider from 'react-slick'

import { ReactComponent as Me } from '../assets/img/pic.svg'
import Brand from '../assets/img/ba.svg'

function Home(props) {
  const [quote] = useState(randomQuotes())

  return (
    <>
      <div className="home-container">
        <div className="header">
          <img src={Brand} alt="bren aviador" className="brand" />
          
          <div className="links">
            {/* <Link className="link-item" to="/showcase">
              <span>Showcase</span>
            </Link> */}
            {/* <a target="_blank" rel="noopener noreferrer" href="https://facebook.com/brenfreeze" className="link-item">
              <span>FB</span>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/brenfreeeze" className="link-item">
              <span>TW</span>
            </a> */}
            <a target="_blank" rel="noopener noreferrer" href="mailto:brenfreeze@gmail.com" className="link-item">
              <span>send mail</span>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/brenfreeze" className="link-item">
              <span>GH</span>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/bren-aviador/" className="link-item">
              <span>IN</span>
            </a>

          </div>
        </div>
        <Fade
          bottom
          duration={500}
          distance="1rem"
          ease
          enter={false}
        >
          <div className="me-img-container">
            <Me className="me-img" />
          </div>
        </Fade>

        <Fade
          bottom
          delay={62.5}
          duration={500}
          distance="1rem"
          ease
        >
          <div className="intro-container">
            <h1 className="display-title">
              Bren Aviador
            </h1>
            <h2 className="intro-content">
              Software Engineer
            </h2>
            <br/><br/>
            <p>
              <i>"{ quote.body }"</i><br/>
              <span>- { quote.author }</span>
            </p>
          </div>
        </Fade>
      </div>
      <div className="details-container">
        <div id="introduction" className="section">
          <h1 className="section-titles">Introduction</h1>
          <p>Hi! I'm Bren Aviador. I'm from Tagaytay. I've worked in the industry for more than 2 years now, and I want to showcase what I have been working on.</p>
          <p>I build websites using Javascript. I am fluent with ReactJS, but also has knowledge in backend technologies such as NodeJS and PHP.</p>
        </div>
        <div className="section">
          <Slider
            className="showcase-slider"
            centerMode
            initialSlide={0}
            infinite={false}
            variableWidth
            focusOnSelect
            draggable
            easing="ease"
            arrows={false}
          >
            {
              Array.from(Array(5)).map(() => (
                <div className="showcase-item">
                  {/* <div className="showcase-img" style={{ backgroundImage: `url('https://picsum.photos/940/450')` }} />
                  <h1 className="display-title showcase-title">
                    Ayala Malls
                  </h1> */}
                </div>
              ))
            }
          </Slider>
        </div>
      </div>
    </>
  )
}

export default Home