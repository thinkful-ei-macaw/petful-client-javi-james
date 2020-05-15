import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

function Nav() {
    return (
        <nav>
          <ul>
            <li><Link to="/" >Home </Link></li>
            <li><Link to="/adopt" >Adopt</Link></li>
          </ul>
        </nav>
    )
}

export default Nav;