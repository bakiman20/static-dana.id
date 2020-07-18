import React from 'react'
import { shallow } from 'enzyme'
import Contact from 'containers/Contact'

const setup = () => {
  const wrapper = shallow(<Contact />)
  return {
    wrapper,
  }
}

describe('Comp. Contact', () => {
  it('renders fine', () => {
    const wrapper = setup()
  })
})
