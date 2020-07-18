import React from 'react'
import { shallow } from 'enzyme'
import Home from 'containers/Home'

const setup = () => {
  const wrapper = shallow(<Home />)
  return {
    wrapper,
  }
}

describe('Cont. Home', () => {
  it('renders without crashing', () => {
    const { wrapper } = setup()
  })
})
