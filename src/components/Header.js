import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = (props) => {
  return (
    <header>
      {window.location.pathname === '/' ? 
        <Link to="/dashboard">DEMO</Link>
        : 
        <div>
          <h1><Link to='/'>Lucidity</Link></h1>
          <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink>
          <NavLink to="/dreams" activeClassName="is-active">Dreams</NavLink>
          <NavLink to="/create" activeClassName="is-active">New Dream</NavLink>
        </div>
      }
    </header>
  )
}

export default Header