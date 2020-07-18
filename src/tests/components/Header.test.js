import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from 'components/Header'

const setup = () => {
  const wrapper = shallow(<Header />)
  return {
    wrapper,
  }
}

describe('Comp. Header', () => {
  it('renders fine', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Router basename="/webtask">
        <Header />
      </Router>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
  it('toggles mobile menu state', () => {
    const { wrapper } = setup()
    const instance = wrapper.instance()
    wrapper.setState({ isMobileMenuOpen: true })
    instance.toggleMobileMenu()
    expect(wrapper.state('isMobileMenuOpen')).toBe(false)
  })
  it('close mobile menu state', () => {
    const { wrapper } = setup()
    const instance = wrapper.instance()
    wrapper.setState({ isMobileMenuOpen: true })
    instance.closeMobileMenu()
    expect(wrapper.state('isMobileMenuOpen')).toBe(false)
  })
})
