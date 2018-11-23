import React from 'react'
import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <div className="home-page-wrapper">
      <div id="stars1"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>

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
          <h1 className="heading-primary u-margin-bottom-medium">
            <span className="heading-primary--main u-margin-bottom-small">experience lucid dreaming</span>
            <span className="heading-primary--sub">
              Lucidity helps you become aware that you’re dreaming and gain the ability to control your dreams. 
              Transform your dream world into a playground of infinite possibility.
            </span>
          </h1>
          <Link to="/dashboard" className="btn btn--blue">lucidity demo</Link>
        </div>
      </section>

      <section className="section section--two u-margin-bottom-xxxl">
        <div className="heading-text-box u-center-text u-margin-bottom-big">
          <h3 className="heading-text-box--tertiary">an entirely better way to dream</h3>
          <h2 className="heading-text-box--secondary">Take control of your subconscious mind</h2>
        </div>
        <div className="section--two__cards u-margin-bottom-medium">
          <div className="card card--1">
            <img src="../images/easy-to-use.png" alt="Easy to use" className="img card--1-img" />
            <div className="card__text-box">
              <p className="card__main-text u-margin-bottom-small">Easy to Use</p>
              <p className="card__sub-text">Lucidity makes it easy to record your dreams and track your progress</p>
              </div>
          </div>
          <div className="card card--2">
            <img src="../images/learn-about-yourself.png" alt="Learn about yourself" className="img card--2-img" />
            <div className="card__text-box">
              <p className="card__main-text u-margin-bottom-small">Rewarded Experience</p>
              <p className="card__sub-text">Understand your subconscious mind better than ever before</p>
            </div>
          </div>
          <div className="card card--3">
            <img src="../images/confidential.png" alt="Confidential" className="img card--3-img" />
            <div className="card__text-box">
              <p className="card__main-text u-margin-bottom-small">Dream Security</p>
              <p className="card__sub-text">Rest assured knowing that your records are kept confidential</p>
            </div>
          </div>
        </div>
        <a href="#" className="btn btn--blue">get started</a>
      </section>

      <section className="section section--three">
        <div className="heading-text-box u-center-text u-margin-bottom-big">
          <h3 className="heading-text-box--tertiary">how it works</h3>
          <h2 className="heading-text-box--secondary">how we dream</h2>
        </div>
        
      </section>

    </div>
  )
}
