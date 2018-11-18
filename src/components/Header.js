import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <header>
    <h1>Lucidity</h1>
    <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink>
    <NavLink to="/dreams" activeClassName="is-active">Dreams</NavLink>
    <NavLink to="/create" activeClassName="is-active">New Dream</NavLink>
  </header>
)

export default Header