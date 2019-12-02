import React from 'react'
import { Link } from 'react-router-dom'
import { Fade } from 'react-reveal'

import Me from '../assets/img/vector.png'
import Brand from '../assets/img/ba.svg'

function Home(props) {
  return (
    <div className="home-container">
      <div className="header">
        <img src={Brand} alt="bren aviador" className="brand" />
        
        <div className="links">
          <Link className="link-item" to="/showcase">
            <span>Showcase</span>
          </Link>
        </div>
      </div>
      <Fade
        bottom
        duration={500}
        distance="1rem"
        ease
        enter={false}
      >
        <img src={Me} alt="bren aviador" className="me-img" />
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
            Wala pang malagay dito kaya lorem ipsum na lang muna. Siguro baka end of the month pa. Pag may maisip na kong magandang content. 
            Wala pang malagay dito kaya lorem ipsum na lang muna. Siguro baka end of the month pa. Pag may maisip na kong magandang content. 
            Wala pang malagay dito kaya lorem ipsum na lang muna. Siguro baka end of the month pa. Pag may maisip na kong magandang content. 
            Wala pang malagay dito kaya lorem ipsum na lang muna. Siguro baka end of the month pa. Pag may maisip na kong magandang content. 
            Wala pang malagay dito kaya lorem ipsum na lang muna. Siguro baka end of the month pa. Pag may maisip na kong magandang content. 
            Wala pang malagay dito kaya lorem ipsum na lang muna. Siguro baka end of the month pa. Pag may maisip na kong magandang content.   
          </p>
        </div>
      </Fade>
    </div>
  )
}

export default Home