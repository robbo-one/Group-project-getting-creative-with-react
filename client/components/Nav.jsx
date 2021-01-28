import React from 'react'
import { Link} from 'react-router-dom'
const Nav = () => {
  return (
    <nav >
        <ul>
            <li><Link to={'/r'}>
                S
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