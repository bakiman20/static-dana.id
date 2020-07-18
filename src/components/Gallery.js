import React, { Component } from 'react'
import { connect } from 'react-redux'
import { isMobile } from 'react-device-detect'
import { fetchImages, setCurrentPageIndex } from 'actions/images'
import { getPartialImages } from 'selectors/images'

import GalleryItem from 'components/GalleryItem'
import GalleryPagination from 'components/GalleryPagination'

import 'styles/Gallery.scss'

export class Gallery extends Component {
  componentDidMount() {
    const { imagesList, getImages } = this.props
    if (imagesList && imagesList.length === 0) {
      getImages()
    }
  }
  handlePageChange = page => {
    this.props.setPageIndex(page)
  }
  render() {
    const { imagesList, currentImagesList, pageIndex } = this.props
    const { handlePageChange } = this
    const paginationParam = {
      currentPage: pageIndex,
      limit: 16,
      pageCount: isMobile ? 3 : 9,
      total: imagesList.length,
      handlePageChange,
    }

    if (imagesList && imagesList.length === 0) {
      return (
        <div className="gallery-loading">
          <h3>Loading images...</h3>
        </div>
      )
    }
    return (
      <div>
        <div className="gallery-list">
          {currentImagesList.map(item => (
            <GalleryItem key={item.id} item={item} />
          ))}
        </div>
        <GalleryPagination {...paginationParam} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    imagesList: state.images.list,
    currentImagesList: getPartialImages(state.images),
    pageIndex: state.images.currentPageIndex,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getImages: () => dispatch(fetchImages()),
    setPageIndex: page => dispatch(setCurrentPageIndex(page)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery)
