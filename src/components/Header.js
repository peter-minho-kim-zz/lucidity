import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <header>
    <h1>Dream Walker</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/dreams" activeClassName="is-active">Dreams</NavLink>
    <NavLink to="/create" activeClassName="is-active">New Dream</NavLink>
  </header>
)

export default Header