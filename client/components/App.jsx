import React from 'react'
import Home from './Home'
import Nav from './Nav'
import Rob from './Rob'
import Prank from './Prank'
import { HashRouter as Router, Route } from 'react-router-dom'
import Gme from './Gme'
import Moon from './Moon'

const App = () => {
  return (
    <>
    <Router>
    <div className="App">
      <Nav />
      <Route path="/" exact component={Home} />
      <Route path="/p" component={Prank} />
       <Route path="/r" component={Rob} />
       <Route path="/gme" component={Gme} />  
       <Route path="/moon" component={Moon} />  
    </div> 
    </Router> 
    </> )
}

export default App
