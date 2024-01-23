import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

export default function Navbar() {

  return (
    <div className='navbar'>
            <p>React App</p>
        <ul className="nav-menu">
        <li><Link style={{textDecoration: 'none'}} to = "/">COUNTER APP</Link></li>
        <li><Link style={{textDecoration: 'none'}} to = "/movie">MOVIE APP</Link></li>
        <li><Link style={{textDecoration: 'none'}} to = "/todolist">TO-DO APP</Link></li>
        </ul>
    </div>
  )
}