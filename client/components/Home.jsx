import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div >
            <h1>Home</h1>
            <div id="componentSelect">
            <span><Link to={'/p'}>
                ?
            </Link></span>
    
            <span>
                <Link to={'/r'}>
                    ?
            </Link>
            </span>
            <span>
                <Link to={'/gme'}>
                    ?
            </Link>
            </span>
            </div>
        </div>

    )
}

export default Home
