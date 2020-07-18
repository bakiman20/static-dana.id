import React from 'react'
import PropTypes from 'prop-types'
import HeartFilled from 'imgs/svgs/HeartFilled'
import HeartBorder from 'imgs/svgs/HeartBorder'
import Share from 'imgs/svgs/Share.js'
import Cross from 'imgs/svgs/Cross.js'
import Facebook from 'imgs/svgs/Facebook'
import Twitter from 'imgs/svgs/Twitter'
import Instagram from 'imgs/svgs/Instagram'

const SocialButtons = ({
  url,
  baseColor = '#ffffff',
  activeColor = '#ffffff',
  title,
  showShare,
  toggleLike,
  shareClickHandler,
  liked,
  additionalClass,
  isMobile,
}) => {
  const containerClassnames = additionalClass
    ? additionalClass + ' gallery-item_share'
    : 'gallery-item_share'
  const shareClassnames = showShare
    ? 'gallery-item_share-toggle expanded'
    : 'gallery-item_share-toggle'
  const renderShareButton = () => {
    if (showShare && isMobile) {
      return <Share fill={activeColor} />
    } else if (showShare) {
      return <Cross fill="#fd6d6d" />
    } else {
      return <Share fill={baseColor} />
    }
  }
  return (
    <div className={containerClassnames}>
      <div className="gallery-item_share-buttons">
        <button className="gallery-item_share-like" onClick={toggleLike}>
          {liked ? (
            <>
              <HeartFilled fill="#fd6d6d" />
              <span>125</span>
            </>
          ) : (
            <>
              <HeartBorder fill={baseColor} />
              <span>124</span>
            </>
          )}
        </button>
        <button className={shareClassnames} onClick={shareClickHandler}>
          {renderShareButton()}
        </button>
      </div>
      {showShare && (
        <div className="gallery-item_share-list-wrapper">
          <ul className="gallery-item_share-list">
            <li>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="gallery-item_share-link"
              >
                <Facebook fill={baseColor} />
              </a>
            </li>
            <li>
              <a
                href="http://www.instagram.com/dana.id"
                className="gallery-item_share-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram fill={baseColor} />
              </a>
            </li>
            <li>
              <a
                href={`https://twitter.com/home?status=${title}%20${url}`}
                className="gallery-item_share-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter fill={baseColor} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

SocialButtons.propTypes = {
  url: PropTypes.string.isRequired,
  baseColor: PropTypes.string,
  activeColor: PropTypes.string,
  title: PropTypes.string,
  showShare: PropTypes.bool.isRequired,
  toggleLike: PropTypes.func.isRequired,
  shareClickHandler: PropTypes.func.isRequired,
  liked: PropTypes.bool,
  additionalClass: PropTypes.string,
  isMobile: PropTypes.bool,
}

SocialButtons.defaultProps = {
  baseColor: '#ffffff',
  activeColor: '#ffffff',
  liked: false,
  additionalClass: '',
  isMobile: false,
}

export default SocialButtons
