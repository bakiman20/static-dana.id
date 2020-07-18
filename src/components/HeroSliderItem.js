import React from 'react'
import PropTypes from 'prop-types'

const HeroSliderItem = ({ description }) => {
  const styles = {
    backgroundImage: "url('https://source.unsplash.com/random')",
  }
  return (
    <div style={styles} className="hero-slider-item">
      <div className="hero-slider-content-wrapper">
        <h3 className="hero-slider-title">Awesome Title</h3>
        <p className="hero-slider-description">{description}</p>
        <a href="/" className="hero-slider-link">
          MORE INFO
        </a>
      </div>
    </div>
  )
}
HeroSliderItem.propTypes = {
  description: PropTypes.string.isRequired,
}
export default HeroSliderItem
