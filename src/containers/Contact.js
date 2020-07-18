import React, { Component } from 'react'
import support from 'imgs/support.svg'

import Facebook from 'imgs/svgs/Facebook'
import Twitter from 'imgs/svgs/Twitter'
import Instagram from 'imgs/svgs/Instagram'

import 'styles/SocialIcons.scss'
import 'styles/Contact.scss'
import ContactForm from 'components/ContactForm'

class Contact extends Component {
  render() {
    return (
      <div className="container page-container">
        <div className="columns">
          <div className="column">
            <h3 className="title is-3 contact-title">Contact us</h3>
            <div className="contact-phone mobile">
              <div className="contact-phone_icon">
                <img src={support} alt="support icon" />
              </div>
              <div className="contact-phone_number">
                <h4>1-500-445</h4>
              </div>
            </div>
            <p className="contact-detail mobile">
              Or kindly fill out this form, we’ll get back to you as quickly as
              possible
            </p>
            <ContactForm />
          </div>

          <div className="column">
            <div className="contact-description">
              <h3 className="title is-3 contact-title">Customer Support</h3>
              <div className="contact-phone">
                <div className="contact-phone_icon">
                  <img src={support} alt="support icon" />
                </div>
                <div className="contact-phone_number">
                  <h4>1-500-445</h4>
                </div>
              </div>
              <p className="contact-detail">
                Contact our customer support or email us at{' '}
                <a href="mailto@help@dana.id" className="contact-mail">
                  help@dana.id
                </a>{' '}
                if you need help
              </p>
              <h3 className="title is-3 contact-title">Social Media</h3>
              <p className="contact-detail">
                Feel free to contact us at one of out social media outlets below
              </p>
              <ul className="social-icons-list">
                <li className="social-icons-item">
                  <a
                    href="http://www.facebook.com/danawallet"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook fill="#108ee9" />
                  </a>
                </li>
                <li className="social-icons-item">
                  <a
                    href="http://www.instagram.com/dana.id"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram fill="#108ee9" />
                  </a>
                </li>
                <li className="social-icons-item">
                  <a
                    href="http://www.twitter.com/danawallet"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter fill="#108ee9" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
