import React, { Component } from 'react'
import Slider from 'react-slick'
import { connect } from 'react-redux'
import { getHeroData } from 'actions/hero'

import HeroSliderItem from 'components/HeroSliderItem'

import loading from 'imgs/loading.svg'
import 'styles/HeroSlider.scss'

export class HeroSlider extends Component {
  state = {
    quotes: [],
    isLoading: false,
  }
  displayLoading = status => {
    this.setState({
      isLoading: status,
    })
  }
  componentDidMount() {
    const { heroQuotes } = this.props
    const isQuotesAvailable = heroQuotes.length > 0
    if (!isQuotesAvailable) {
      this.props.getQuotes()
    }
  }
  render() {
    const { heroQuotes } = this.props
    const isQuotesAvailable = heroQuotes.length > 0
    const setttings = {
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoPlaySpeed: 5000,
      responsive: [
        {
          breakpoint: 1088,
          settings: {
            arrows: false,
          },
        },
      ],
    }
    if (!isQuotesAvailable) {
      return (
        <div className="hero-slider">
          <div className="hero-slider-loading">
            <h3 className="hero-slider-title">
              <img src={loading} alt="loading" />
            </h3>
          </div>
        </div>
      )
    }
    return (
      <div className="hero-slider">
        <Slider {...setttings}>
          {heroQuotes.map((description, index) => (
            <HeroSliderItem key={index} description={description} image={''} />
          ))}
        </Slider>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    heroQuotes: state.hero.list,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getQuotes: () => dispatch(getHeroData()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroSlider)
