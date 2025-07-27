// navbar

import React from 'react'
import './Day6CSS.css'
import { Link } from 'react-router-dom'

const Day6 = () => {
  return (
    <>
    <div id='navbar'>
    
        <Link to='/'>
            <li>Home</li>
        </Link>

        <Link to='/contact'>
            <li>Contact Us</li>
        </Link>

        <Link to='/projects'>
            <li>Projects</li>
        </Link>
                
    </div>
    </>
  )
}

export default Day6