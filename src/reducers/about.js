import actionTypes from 'constants/index'

const defaultState = {
  main: {},
  columns: [],
}

export const about = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.ABOUT_FETCH_SUCCESS:
      return {
        ...state,
        main: action.aboutData.main,
        columns: action.aboutData.columns,
      }
    default:
      return state
  }
}
