import React from 'react'
import './navbar.scss';
import econet_icon from '../../assets/econet_icon.png';

/* Navigation bar for EcoNet site containing the logo and navigation buttons */
const Navbar = () => {
  return (
    <section id="navbar">
        <div className="logo">
            <img className="econet_icon" src={ econet_icon }></img>
            <a href="econet" className="title">EcoNet</a>
        </div>
        <div className='buttons'>
          <a href="/volunteer" className="navigation_button">Volunteer</a>
          <a href="/organizations" className="navigation_button">Organizations</a>
          <a href="/support" className="navigation_button">Support</a>
        </div>
    </section>
  )
}

export default Navbar
