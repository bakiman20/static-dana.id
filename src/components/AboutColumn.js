import React from 'react'
import PropTypes from 'prop-types'
import navigate from 'imgs/navigate.svg'

const AboutColumn = ({ content }) => (
  <div className="column">
    <img className="column-image" src={navigate} alt="navigate" />
    <h3 className="column-title">{content.title}</h3>
    <p className="column-subtitle">{content.description}</p>
  </div>
)
AboutColumn.propTypes = {
  content: PropTypes.object.isRequired,
}
export default AboutColumn
