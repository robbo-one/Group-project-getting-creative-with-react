import React from 'react'
import Home from './Home'
import Nav from './Nav'
import Rob from './Rob'
import Lukas from './Lukas'
import Sammar from './Sammar'
import { HashRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Router>
    <div className="App">
      <Nav />
      <Route path="/" exact component={Home} />
      <Route path="/s" component={Sammar} />
       <Route path="/r" component={Rob} />
       <Route path="/l" component={Lukas} />  
    </div> 
    </Router> 
    </> )
}

export default App
