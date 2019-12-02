import React from 'react'
import { Link } from 'react-router-dom'
import { Fade } from 'react-reveal'
import Slider from 'react-slick'

function Showcase(props) {
  return (
    <div className="showcase-container">
      <Fade
        bottom
        duration={500}
        distance="1rem"
        ease
        enter={false}
      >
        <div>
          <Link className="link-item" to="/home">
            <span>Back</span>
          </Link>
          <h1 className="display-title">
            Showcase
          </h1>

          <Slider
            className="showcase-slider"
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

                </div>
              ))
            }
          </Slider>
        </div>
      </Fade>
    </div>
  )
}

export default Showcase