import React from 'react'
import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <div className="home-page-wrapper">

      <section className="section section--one">
        <header className="section--one__header">
          <nav className="section--one__nav">
            <Link to="/" className="link">Lucidity</Link>
            <div className="nav__right">
              <Link to="/" className="link">Sign Up</Link>
              <Link to="/dashboard" className="link">Demo</Link>
            </div>
          </nav>
        </header>
        <div className="section--one__text-box u-center-text">
          <h1 className="heading u-margin-bottom-medium">
            <span className="heading--primary u-margin-bottom-small">experience lucid dreaming</span>
            <span className="heading--sub">
              Lucidity helps you become aware that you’re dreaming and gain the ability to control your dreams. 
              Transform your dream world into a playground of infinite possibility.
            </span>
          </h1>
          <Link to="/dashboard" className="btn btn--blue">get started</Link>
        </div>
        <div id="stars1"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </section>

      <section className="section section--two">
        <h1>adfgadsf</h1>
      </section>


    </div>
  )
}
