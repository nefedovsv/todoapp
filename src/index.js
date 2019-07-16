import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'mobx-react'
import { App } from './App'
import './Antd.css'
import { Authentication, TodoModification } from './store/mobxStore'
const todoModification = new TodoModification()
const authentication = new Authentication()
render(
  <Provider authentication={authentication} todoModification={todoModification}>
    <App />
  </Provider>,
  document.getElementById('root')
)
