import React, { Component } from 'react'
import HeroSlider from 'components/HeroSlider'
import Gallery from 'components/Gallery'

class Home extends Component {
  render() {
    return (
      <>
        <HeroSlider />
        <div className="container">
          <Gallery />
        </div>
      </>
    )
  }
}

export default Home
