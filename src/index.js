import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App'
import initialState from './initialState'
import reducer from './_reducers'

const store = createStore(reducer, initialState)

const container = document.getElementById('app')

render(
  <Provider store={store}>
    <App />
  </Provider>,
  container
)
