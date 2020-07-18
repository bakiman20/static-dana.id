import React from 'react'
import { shallow } from 'enzyme'
import { Gallery } from 'components/Gallery'

const dummyImages = [
  {
    albumId: 1,
    id: 1,
    title: 'accusamus beatae ad facilis cum similique qui sunt',
    url: 'https://via.placeholder.com/600/92c952',
    thumbnailUrl: 'https://via.placeholder.com/150/92c952',
  },
  {
    albumId: 1,
    id: 2,
    title: 'reprehenderit est deserunt velit ipsam',
    url: 'https://via.placeholder.com/600/771796',
    thumbnailUrl: 'https://via.placeholder.com/150/771796',
  },
  {
    albumId: 1,
    id: 3,
    title: 'officia porro iure quia iusto qui ipsa ut modi',
    url: 'https://via.placeholder.com/600/24f355',
    thumbnailUrl: 'https://via.placeholder.com/150/24f355',
  },
  {
    albumId: 1,
    id: 4,
    title: 'culpa odio esse rerum omnis laboriosam voluptate repudiandae',
    url: 'https://via.placeholder.com/600/d32776',
    thumbnailUrl: 'https://via.placeholder.com/150/d32776',
  },
]

const setup = () => {
  const props = {
    imagesList: dummyImages,
    currentImagesList: dummyImages,
    getImages: jest.fn(),
  }
  const wrapper = shallow(<Gallery {...props} />)
  return {
    wrapper,
    props,
  }
}

describe('Comp. Gallery', () => {
  it('renders fine', () => {
    const wrapper = setup()
  })
})
