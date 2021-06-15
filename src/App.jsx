import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'

import Loading from './views/Loading'
import Home from './views/Home'
import Showcase from './views/Showcase'

class App extends React.Component {
  render() {
    return (
      <Router>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <Route exact path="/" component={Loading} />
          <Route path="/home" component={Home} />
          <Route path="/029aeb20069db7e7ce15b6319d0881c3.html" component={() => <h1>Hello</h1>} />
        </AnimatedSwitch>
      </Router>
    )
  }
}

export default App