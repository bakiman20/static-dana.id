import actionTypes from 'constants/index'

const defaultState = {
  list: [],
  currentPageIndex: 1,
}

export const images = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GALLERY_FETCH_SUCCESS:
      return { ...state, list: action.images }
    case actionTypes.SET_CURRENT_PAGE_INDEX:
      return { ...state, currentPageIndex: action.pageIndex }
    default:
      return state
  }
}
