import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'

import App from './App'

import './assets/css/styles.css'

import 'slick-carousel/slick/slick.css' 
import 'slick-carousel/slick/slick-theme.css'


const initializeGA = trackingCode =>
  ReactGA.initialize(trackingCode, {
    debug: process.env.NODE_ENV === 'development',
    titleCase: false,
  })

const setGAPageView = page => ReactGA.pageview(page)

initializeGA(process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID)
setGAPageView(window.location.pathname + window.location.search)

ReactDOM.render(<App />, document.getElementById('root'))

