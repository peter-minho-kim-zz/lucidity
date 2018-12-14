import React from 'react'
import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <div className="home-page-wrapper">
      <section className="section section--one fade-in-bottom">
        <div className="section--one__text-box u-center-text">
          <h1 className="heading-primary u-margin-bottom-medium">
            <span className="heading-primary--main u-margin-bottom-small">experience lucid dreaming</span>
            <span className="heading-primary--sub">
              Lucidity helps you become aware that you’re dreaming and gain the ability to control your dreams. 
              Transform your dream world into a playground of infinite possibility.
            </span>
          </h1>
          <Link 
            to="/dashboard" 
            className="btn btn--blue" 
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              })
            }}
          >
          explore lucidity
          </Link>
        </div>
      </section>

      <section className="section section--two u-margin-bottom-xxxl">
        <div className="heading-text-box u-center-text u-margin-bottom-big">
          <h3 className="heading-text-box--tertiary">an entirely better way to dream</h3>
          <h2 className="heading-text-box--secondary">Take control of your subconscious mind</h2>
        </div>
        <div className="section--two__cards u-margin-bottom-medium">
          <div className="card">
            <img src="../images/easy-to-use.png" alt="Easy to use" className="img card--1-img" />
            <div className="card__text-box">
              <p className="card__main-text u-margin-bottom-small">Easy to Use</p>
              <p className="card__sub-text">Lucidity makes it easy to record your dreams and track your progress</p>
              </div>
          </div>
          <div className="card">
            <img src="../images/learn-about-yourself.png" alt="Learn about yourself" className="img card--2-img" />
            <div className="card__text-box">
              <p className="card__main-text u-margin-bottom-small">Rewarded Experience</p>
              <p className="card__sub-text">Understand your subconscious mind better than ever before</p>
            </div>
          </div>
          <div className="card">
            <img src="../images/confidential.png" alt="Confidential" className="img card--3-img" />
            <div className="card__text-box">
              <p className="card__main-text u-margin-bottom-small">Dream Security</p>
              <p className="card__sub-text">Rest assured knowing that your records are kept confidential</p>
            </div>
          </div>
        </div>
        
      </section>

      <section className="section section--three u-margin-bottom-xxxl">
        <div className="heading-text-box u-center-text u-margin-bottom-big">
          <h3 className="heading-text-box--tertiary">how it works</h3>
          <h2 className="heading-text-box--secondary u-margin-bottom-medium">how we dream</h2>
          <div className="how-it-works how-it-works--1 u-margin-bottom-big">
            <div className="how-it-works__text-container">
              <p className="how-it-works__text--pre">
                Intuitive Design
              </p>
              <p className="how-it-works__text--main u-margin-bottom-small">
                Dream Memoir
              </p>
              <p className="how-it-works__text--sub">
                The key to lucid dreaming is to consistently document your dreams so that you can recognize patterns. Lucidity provides you with a quick and simple interface that helps you keep track of what you're dreaming about.
              </p>
            </div>
            <div className="how-it-works__video-container">
              {/* Check user device to conditionally render video or gif */}
              {/Mobi|Android/i.test(navigator.userAgent) ?
                <img src="../images/dreams.gif" className="how-it-works__video" alt="dream list example" />
                :
                <video src="../videos/dreams.mp4" className="how-it-works__video" autoPlay loop muted preload="auto"></video>
              }
            </div>
          </div>
          <div className="how-it-works how-it-works--2 u-margin-bottom-big">
            <div className="how-it-works__video-container">
              {/* Check user device to conditionally render video or gif */}
              {/Mobi|Android/i.test(navigator.userAgent) ? 
                <img src="../images/dashboard.gif" className="how-it-works__video" alt="dashboard example" /> 
                : 
                <video src="../videos/dashboard.mp4" className="how-it-works__video" autoPlay loop muted preload="auto"></video>
              }
            </div>
            <div className="how-it-works__text-container">
              <p className="how-it-works__text--pre">
                Visible Progress
              </p>
              <p className="how-it-works__text--main u-margin-bottom-small">
                Lucidity Dashboard
              </p>
              <p className="how-it-works__text--sub">
                Interactive charts and personalized statistics help you on stay on track with your lucid dreaming goals. Lucidity gives you real-time insight into your sleeping patterns, frequency of different dream types, and vividness (lucidity) of your dreams.
              </p>
            </div>
          </div>
          <Link 
            to="/dashboard" 
            className="btn btn--blue" 
          >
          lucidity demo
          </Link>
        </div>
      </section>

      <footer className="footer u-margin-bottom-big">
        <div className="footer__brand-container">
          <img src="../images/lucidity-brand.png" className="footer__brand u-margin-bottom-small" alt="lucidity brand"/>
          <p className="footer__author-text">
            <i className="fas fa-code"></i> Peter Kim
          </p>
          <div className="footer__social-media u-margin-bottom-small ">
            <a href="https://github.com/peter-minho-kim" target="_blank"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/peter-kim-developer/" target="_blank"><i className="fab fa-linkedin"></i></a>
          </div>
          <div className="copyright-text">
            <p>
              Copyright &copy; 2018
              <br />
              All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  )

}
