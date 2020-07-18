import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import logo from 'imgs/logo-dana-with-typography.svg'
import burger from 'imgs/black.svg'
import cross from 'imgs/blue.svg'

import 'styles/Header.scss'

class Header extends Component {
  state = {
    isMobileMenuOpen: false,
  }
  toggleMobileMenu = ev => {
    const { isMobileMenuOpen } = this.state
    this.setState({
      isMobileMenuOpen: !isMobileMenuOpen,
    })
  }
  closeMobileMenu = () => {
    this.setState({
      isMobileMenuOpen: false,
    })
  }
  render() {
    const { isMobileMenuOpen } = this.state
    const { toggleMobileMenu, closeMobileMenu } = this
    const buttonClassName = isMobileMenuOpen
      ? 'navbar-burger burger is-active'
      : 'navbar-burger burger'
    const mobileMenuClassName = isMobileMenuOpen
      ? 'navbar-menu is-active'
      : 'navbar-menu'
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/home" className="navbar-item" onClick={closeMobileMenu}>
              <img src={logo} alt="logo" />
            </Link>

            <button
              className={buttonClassName}
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarMenu"
              onClick={toggleMobileMenu}
            >
              <img src={burger} className="navbar-open" alt="" />
              <img src={cross} className="navbar-close" alt="" />
            </button>
          </div>

          <div id="navbarMenu" className={mobileMenuClassName}>
            <div className="navbar-end">
              <Link
                to="/about"
                className="navbar-item"
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="navbar-item"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
