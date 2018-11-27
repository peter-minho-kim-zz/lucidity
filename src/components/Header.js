import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = (props) => {
  return (
    <div className="header-wrapper fade-in-top">
      {window.location.pathname === '/' ? 
        <header className="header">
          <nav className="nav">
            <NavLink to="/" className="nav__link">
              <img src="../images/lucidity-brand.png" className="nav__brand" alt="lucidity brand" />
            </NavLink>
            <div className="nav__home-links">
              <NavLink to="/dashboard" className="nav__link" activeClassName="is-active">Sign Up</NavLink>
              <NavLink to="/dashboard" className="nav__link" activeClassName="is-active">Demo</NavLink>
            </div>
          </nav>
        </header>
        : 
        <header className="header">
          <nav className="nav">
            <NavLink to="/" className="nav__link">
              <img src="../images/lucidity-brand.png" className="nav__brand" alt="lucidity brand"/>
            </NavLink>
            <div className="nav__main-links">
              <NavLink to="/dashboard" className="nav__link" activeClassName="is-active">Dashboard</NavLink>
              <NavLink to="/dreams" className="nav__link" activeClassName="is-active">Dreams</NavLink>
              <NavLink to="/create" className="nav__link" activeClassName="is-active">New Dream</NavLink>
            </div>
          </nav>
        </header>
      }
    </div>
  )
}

export default Header