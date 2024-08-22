import React from 'react'
import { Link } from 'react-router-dom'

import StudySynimg from '../images/StudySyn.svg'
import Hamburger from '../images/Hamburger.svg'


const Navigations = () => {
  return (
<div className="header">
      <header className="header_content">
        <Link to="/" className="logo">
          <img src={StudySynimg} alt="logoimage" className="logo_icon" />
          <span className="logo_text"> STUDY Sync </span>
        </Link>

        <nav className="nav">
          <Link to="/" className="nav_link">Home</Link>
          <Link to="/feature" className="nav_link">Feature</Link>
          <Link to="/pricing" className="nav_link">Pricing</Link>
          <Link to="/blog" className="nav_link">Blog</Link>
          <Link to="/about" className="nav_link">About</Link>
        </nav>
        <Link to="/Contact" className="contact_button">Contact Us</Link>
        <button type="button" className="menu_button">
                <img src={Hamburger} alt="menubutton"className="menu_icon"/>
            </button>
        <button type="button" className="menu_button">
          <img src={Hamburger} alt="menuButton" className="menu_icon" />
        </button>
      </header>
    </div>  )
}

export default Navigations