import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="Home">
            <h1 id="homeHeader">QQQ</h1>
            <div id="componentSelect">
            <span><Link to={'/p'}>
            <h4>?</h4> 

            </Link></span>
    
            <span>
                <Link to={'/r'}>
                   <h4>?</h4> 
            </Link>
            </span>
            <span>
                <Link to={'/gme'}>
                <h4>?</h4> 

            </Link>
            </span>
            </div>
        </div>
    )
}

export default Home
