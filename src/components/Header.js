import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = (props) => {
  return (
    <div>
      {window.location.pathname === '/' ? 
        undefined
        : 
        <header className="header"><nav className="nav nav--in">
          <h1><Link to='/'>Lucidity</Link></h1>
          <NavLink to="/dashboard" className="nav__link" activeClassName="is-active">Dashboard</NavLink>
          <NavLink to="/dreams" className="nav__link" activeClassName="is-active">Dreams</NavLink>
          <NavLink to="/create" className="nav__link" activeClassName="is-active">New Dream</NavLink>
          </nav>
        </header>
      }
    </div>
  )
}

export default Header