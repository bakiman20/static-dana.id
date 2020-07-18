import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Footer from 'components/Footer'

describe('Comp. Footer', () => {
  it('renders fine', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Router basename="/webtask">
        <Footer />
      </Router>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
