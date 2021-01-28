import React from 'react'
import { Link} from 'react-router-dom'
const Nav = () => {
  return (
    <nav >
        <ul id="navbar">
        <li><Link to={'/'}>
                Home
                </Link>
            </li>
            <li><Link to={'/p'}>
                P
                </Link>
            </li>
            <li>
            <Link to={'/l'}>
                L
                </Link>
            </li>
            <li>
            <Link to={'/r'}>
                R
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav
