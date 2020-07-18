import React from 'react'
import { shallow } from 'enzyme'
import App from 'containers/App'

const setup = () => {
  const wrapper = shallow(<App />)
  return {
    wrapper,
  }
}

describe('Cont. App', () => {
  it('renders without crashing', () => {
    const { wrapper } = setup()
  })
})
