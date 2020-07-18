import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import { HeroSlider } from 'components/HeroSlider'

const setup = () => {
  const wrapper = shallow(<HeroSlider />)
  return {
    wrapper,
  }
}

describe('Comp. HeroSlider', () => {
  it('renders fine', () => {
    const div = document.createElement('div')
    ReactDOM.render(<HeroSlider />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  it('displays loading status', () => {
    const { wrapper } = setup()
    const instance = wrapper.instance()
    instance.displayLoading(true)
    expect(wrapper.state('isLoading')).toBe(true)
  })
})
