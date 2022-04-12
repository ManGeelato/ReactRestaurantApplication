import React from 'react'
import {Link} from 'react-router-dom';
import './Navbar.scss'

const Navbar = () => {
  return (
   <div className='navbar'>
      <div className='navbar-heading'>
        <h1>Locos <span>Pollos</span></h1>
      </div>

      <div className='navbar-links'>
        <ul>
          <Link to='/'>
            {""}
            <li>Home</li>
          </Link>

          <Link to='/categories'>
            {""}
            <li>Delizios`o</li>
          </Link>

          <Link to='/othermeals'>
            {""}
            <li>Other Delizios`o</li>
          </Link>

        </ul>
      </div>
    </div>
  )
}

export default Navbar