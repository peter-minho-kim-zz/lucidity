import React from 'react'
import { NavLink } from 'react-router-dom'
import SignUpModal from './SignUpModal'

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      showModal: false
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  handleOpenModal() {
    this.setState({ showModal: true })
  }
  handleCloseModal() {
    this.setState({ showModal: false })
  }
  render() {
    return (
      <div className="header-wrapper">
        {window.location.pathname === '/' ?
          <header className="header fade-in-top">
            <nav className="nav">
              <NavLink to="/" className="nav__link">
                <img src="../images/lucidity-brand.png" className="nav__brand" alt="lucidity brand" />
              </NavLink>
              <div className="nav__home-links">
                <NavLink to="#" className="nav__link" activeClassName="is-active" onClick={this.handleOpenModal}>Sign Up</NavLink>
                <NavLink to="/dashboard" className="nav__link" activeClassName="is-active">Demo</NavLink>
              </div>
            </nav>
          </header>
          :
          <header className="header fade-in-top">
            <nav className="nav">
              <NavLink to="/" className="nav__link">
                <img src="../images/lucidity-brand.png" className="nav__brand" alt="lucidity brand" />
              </NavLink>
              <div className="nav__main-links">
                <NavLink to="/dashboard" className="nav__link" activeClassName="is-active">Dashboard</NavLink>
                <NavLink to="/dreams" className="nav__link" activeClassName="is-active">Dreams</NavLink>
                <NavLink to="/create" className="nav__link" activeClassName="is-active">New Dream</NavLink>
              </div>
            </nav>
          </header>
        }
        <SignUpModal
          isOpen={this.state.showModal}
          onRequestClose={this.handleCloseModal}
          handleCloseModal={this.handleCloseModal}
        />
      </div>
    )
  }
}

export default Header