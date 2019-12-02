import React, { useState, useEffect } from 'react'
import randomQuote from 'random-quotes'

function Loading(props) {
  const [ quote, setQuote ] = useState(null)
  const { history } = props
  
  useEffect(() => {
    console.log('effect')
    setTimeout(() => {
      history.push('/home')
    }, 5000)
  }, [])

  return (
    <div className="container">
      <svg id="loader" width="426px" height="426px" viewBox="0 0 426 426">
        <g id="Artboard" stroke="none" strokeWidth="1" fill="none" fill-rule="evenodd" strokeLinejoin="round">
          <g id="Group" strokeWidth="5">
            <path className="letter letter-a" d="M264,215 L285.495592,215 L285.495592,260 L366,260 L366,113 L264,11 C207.666956,11 162,56.6669555 162,113 C162,169.333044 207.666956,215 264,215 Z" id="Oval" stroke="#6C6C6C" strokeWidth="5" fill="#6C6C6C"></path>
            <path className="letter letter-b" d="M162,411 C218.333044,411 264,365.486881 264,309.343603 C264,253.200325 218.333044,207.687206 162,207.687206 L140.504408,207.687206 L140.504408,76 L60,76 L60,309.343603 L162,411 Z" id="Oval" stroke="#BFBFBF" strokeWidth="5" fill="#BFBFBF"></path>
          </g>
        </g>
      </svg>
      <p className="center">
        loading...
      </p>
      {/* <div className="quote">
        <p>
          Maybe wars aren't meant to be won,<br />
          maybe they're meant to be continuous.
        </p>
        <span>
          Elliot Alderson
        </span>
      </div> */}
    </div> 
  )
}

export default Loading