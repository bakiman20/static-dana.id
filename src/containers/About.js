import React, { Component } from 'react'
import { connect } from 'react-redux'

import rainy from 'imgs/rainy@3x.jpg'
import 'styles/About.scss'

import AboutColumn from 'components/AboutColumn'
import { fetchAboutData } from 'actions/about'

export class About extends Component {
  componentDidMount() {
    const { aboutData, getAboutData } = this.props
    const { isAboutDataAvailable } = this
    if (isAboutDataAvailable(aboutData)) {
      getAboutData()
    }
  }
  isAboutDataAvailable = data => {
    return data && data.columns.length === 0
  }
  render() {
    const { isAboutDataAvailable } = this
    const { aboutData } = this.props
    const mainData = aboutData.main
    const columnContent = aboutData.columns

    if (isAboutDataAvailable(aboutData)) {
      return (
        <div className="gallery-loading">
          <h3>Loading contents...</h3>
        </div>
      )
    }

    return (
      <>
        <div className="container page-container">
          <div className="columns about-header">
            <div className="column is-one-third">
              <h1 className="about-header_main">{mainData.title}</h1>
              <p className="about-header_subtitle desktop">
                {mainData.opening_crawl}
              </p>
            </div>
            <div className="column">
              <img src={rainy} alt="rainy" />
            </div>
            <div className="column mobile">
              <p className="about-header_subtitle">{mainData.opening_crawl}</p>
            </div>
          </div>
          <h2 className="about-content_title">In another timeline...</h2>
          <div className="columns about-columns">
            {columnContent &&
              columnContent.map((item, index) => {
                const columnContent = {
                  title: item.title,
                  description: item.opening_crawl,
                }
                return <AboutColumn key={index} content={columnContent} />
              })}
          </div>
        </div>
      </>
    )
  }
}
const mapStateToProps = state => {
  return {
    aboutData: state.about,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAboutData: () => dispatch(fetchAboutData()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About)
