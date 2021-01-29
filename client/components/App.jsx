import React from 'react'
import Home from './Home'
import Nav from './Nav'
import Rob from './Rob'
import Prank from './Prank'
import { HashRouter as Router, Route } from 'react-router-dom'
import Gme from './Gme'
import Moon from './Moon'
import {useState} from 'react'

const App = () => {

  const [value, setValue] = useState(0)
  



  return (
    <>
    <Router>
    <div className="App">
      <Nav />
      <Route path="/" exact component={Home} />
      <Route path="/p" component={Prank} />
       <Route path="/r" component={Rob} />
       <Route path="/gme" render={props => <Gme {...props} setValue={setValue} />} />  
       <Route path="/moon" render={props => <Moon {...props} value={value} />} />  
    </div> 
    </Router> 
    </> )
}

export default App
