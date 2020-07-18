import { combineReducers } from 'redux'
import { images } from 'reducers/images'
import { about } from 'reducers/about'
import { hero } from 'reducers/hero'

export default combineReducers({
  images,
  about,
  hero,
})
