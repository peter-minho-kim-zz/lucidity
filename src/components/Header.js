import React from 'react'
import { NavLink } from 'react-router-dom'
import SignUpModal from './SignUpModal'

class Header extends React.Component {
  constructor() {
    super()
    // Config for sign up modal
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
    // Return different navigation between home page and demo
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
                <NavLink to="/dashboard" className="nav__link nav__link-icon" activeClassName="is-active"><i className="fas fa-chart-pie nav__icon"></i><span className="nav__text">Dashboard</span></NavLink>
                <NavLink to="/dreams" className="nav__link nav__link-icon" activeClassName="is-active"><i className="fas fa-list-ul nav__icon"></i><span className="nav__text">Dreams</span></NavLink>
                <NavLink to="/create" className="nav__link nav__link-icon" activeClassName="is-active"><i className="fas fa-pencil-alt nav__icon"></i><span className="nav__text">New Dream</span></NavLink>
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