import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'store/configureStore'

import 'react-app-polyfill/ie11'
import 'styles/index.scss'

import App from 'containers/App'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router basename="/webtask">
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
