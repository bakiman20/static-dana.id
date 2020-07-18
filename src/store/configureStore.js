import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import combined from 'reducers/index'

export default function configureStore(initialState) {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  return createStore(
    combined,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
  )
}
