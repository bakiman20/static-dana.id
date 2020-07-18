import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import SocialButtons from 'components/SocialButtons'
import arrowLeft from 'imgs/arrow-left.svg'

const additionalText =
  ' ipsum dolor sit amet, consectetur adipiscing elit. In mattis mattis hendrerit. Vestibulum nec elit nec mauris venenatis fringilla. Aliquam id cursus lectus, condimentum sodales urna. Phasellus laoreet nunc eget nisi blandit eleifend. Proin quis elit enim. Duis finibus euismod sapien eu congue. Praesent dignissim id dolor at convallis. In in ligula orci.'

class GalleryItem extends Component {
  state = {
    showShare: false,
    liked: this.props.liked,
    focused: false,
    active: false,
  }
  shareClickHandler = () => {
    const { showShare, focused } = this.state
    this.setState({
      showShare: !showShare,
      focused: !focused,
    })
  }
  toggleLike = () => {
    const { liked } = this.state
    this.setState({
      liked: !liked,
    })
  }
  toggleActive = state => {
    const { active } = this.state
    this.setState({
      active: !active,
    })
  }
  render() {
    const { showShare, liked, focused, active } = this.state
    const { item } = this.props
    const { shareClickHandler, toggleLike, toggleActive } = this

    const thumbUrl = item.thumbnailUrl.replace('150', '300')
    const title = item.title.substr(0, item.title.indexOf(' '))
    const socialProps = {
      url: item.url,
      title,
      showShare,
      toggleLike,
      shareClickHandler,
      liked,
    }
    const mainClassnames = classNames(
      'gallery-item',
      { focused: focused },
      { active: active }
    )
    const dummyMobileLikeCount = liked ? 125 : 124
    const imgUrl = active ? item.url : thumbUrl
    return (
      <div className={mainClassnames} key={item.id}>
        <button className="gallery-item_arrow" onClick={toggleActive}>
          <img src={arrowLeft} alt="Back" />
        </button>
        <div className="gallery-item_img-wrapper">
          <img className="gallery-item_img" src={imgUrl} alt={item.title} />
        </div>
        {!active && (
          <button
            className="gallery-item_button"
            data-id={item.id}
            onClick={toggleActive}
          />
        )}
        <SocialButtons {...socialProps} additionalClass="desktop" />
        <div className="gallery-item_content">
          <div className="gallery-item_header">
            <div>
              <h5 className="gallery-item_title">{title}</h5>
              {active && <p>{dummyMobileLikeCount} likes</p>}
            </div>
            <SocialButtons
              {...socialProps}
              baseColor="#666666"
              activeColor="#108ee9"
              additionalClass="mobile"
            />
          </div>
          <p className="gallery-item_description">
            {active ? item.title + additionalText : item.title}
          </p>
        </div>
      </div>
    )
  }
}
GalleryItem.propTypes = {
  item: PropTypes.object.isRequired,
  liked: PropTypes.bool,
}
GalleryItem.defaultProps = {
  liked: false,
}
export default GalleryItem
