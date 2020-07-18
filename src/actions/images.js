import getGalleryImages from 'api/getGalleryImages'
import actionTypes from 'constants/index'

export const imagesFetchSuccess = images => {
  return {
    type: actionTypes.GALLERY_FETCH_SUCCESS,
    images,
  }
}

export const setCurrentPageIndex = pageIndex => {
  return {
    type: actionTypes.SET_CURRENT_PAGE_INDEX,
    pageIndex,
  }
}

export const fetchImages = () => {
  return dispatch => {
    getGalleryImages().then(resp => {
      dispatch(imagesFetchSuccess(resp))
    })
  }
}
