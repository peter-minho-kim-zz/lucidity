import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = (props) => {
  return (
    <div className="header-wrapper">
      {window.location.pathname === '/' ? 
        undefined
        : 
        <header className="header">
          <nav className="nav">
            <NavLink to="/" className="nav__link">Lucidity</NavLink>
            <NavLink to="/dashboard" className="nav__link" activeClassName="is-active">Dashboard</NavLink>
            <NavLink to="/dreams" className="nav__link" activeClassName="is-active">Dreams</NavLink>
            <NavLink to="/create" className="nav__link" activeClassName="is-active">New Dream</NavLink>
            <NavLink to="#" className="nav__link" activeClassName="is-active">?</NavLink>
          </nav>
        </header>
      }
    </div>
  )
}

export default Header