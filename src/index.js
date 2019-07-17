import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'mobx-react'
import { App } from './App'
import './Antd.css'
import { store } from './store/mobxStore'

render(
  <Provider {...store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
