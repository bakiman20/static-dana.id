import actionTypes from 'constants/index'

const defaultState = {
  list: [],
}

export const hero = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.HERO_FETCH_SUCCESS:
      return {
        ...state,
        list: action.data,
      }
    default:
      return state
  }
}
