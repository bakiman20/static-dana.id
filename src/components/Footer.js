import React from 'react'
import { Link } from 'react-router-dom'

import Facebook from 'imgs/svgs/Facebook'
import Twitter from 'imgs/svgs/Twitter'
import Instagram from 'imgs/svgs/Instagram'

import 'styles/Footer.scss'
import 'styles/SocialIcons.scss'
import 'styles/utilities.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="columns">
          <div className="column is-one-third">
            <div className="social-icons">
              <h4 className="social-icons-title">Follow Us:</h4>
              <ul className="social-icons-list">
                <li className="social-icons-item">
                  <a
                    href="http://www.facebook.com/danawallet"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook fill="#ffffff" />
                  </a>
                </li>
                <li className="social-icons-item">
                  <a
                    href="http://www.instagram.com/dana.id"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram fill="#ffffff" />
                  </a>
                </li>
                <li className="social-icons-item">
                  <a
                    href="http://www.twitter.com/danawallet"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter fill="#ffffff" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="column footer-right">
            <nav className="footer-nav">
              <ul>
                <li className="footer-nav-item">
                  <Link to="/home">HOME</Link>
                </li>
                <li className="footer-nav-item">
                  <Link to="/about">ABOUT</Link>
                </li>
                <li className="footer-nav-item">
                  <Link to="/contact">CONTACT US</Link>
                </li>
              </ul>
            </nav>
            <p className="footer-credit">
              <span className="mobile-newline">&copy; 2018 </span>
              DANA - PT. Espay Debit Indonesia Koe. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
