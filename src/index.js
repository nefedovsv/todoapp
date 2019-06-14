import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { rootReducer } from './reducers/rootReducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
const store = createStore(rootReducer, applyMiddleware(thunk, logger))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
serviceWorker.unregister()
