import getAboutData from 'api/getAboutData'
import actionTypes from 'constants/index'

export const aboutFetchSuccess = aboutData => {
  return {
    type: actionTypes.ABOUT_FETCH_SUCCESS,
    aboutData,
  }
}

export const fetchAboutData = () => {
  return dispatch => {
    getAboutData().then(resp => {
      dispatch(aboutFetchSuccess(resp))
    })
  }
}
