import React from 'react'
import './navbar.scss';
import econet_icon from '../../assets/econet_icon.png';
import { Link } from 'react-router-dom';

/* Navigation bar for EcoNet site containing the logo and navigation buttons */
const Navbar = () => {
  return (
    <section id="navbar">
        <div className="logo">
            <img className="econet_icon" src={ econet_icon }></img>
            <Link to="" className="title">EcoNet</Link>
        </div>
        <div className='buttons'>
          <Link to="volunteer" className="navigation_button">Volunteer</Link>
          <Link to="organizations" className="navigation_button">Organizations</Link>
          <Link to="support" className="navigation_button">Support</Link>
        </div>
    </section>
  )
}

export default Navbar
