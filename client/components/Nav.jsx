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
        </ul>
    </nav>
  )
}

export default Nav
