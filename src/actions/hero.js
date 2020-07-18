import getSliderData from 'api/getSliderData'
import actionTypes from 'constants/index'

export const heroFetchSuccess = data => {
  return {
    type: actionTypes.HERO_FETCH_SUCCESS,
    data,
  }
}

export const getHeroData = () => {
  return dispatch => {
    getSliderData().then(resp => {
      const quotes = resp.map(item => item.value)
      dispatch(heroFetchSuccess(quotes))
    })
  }
}
