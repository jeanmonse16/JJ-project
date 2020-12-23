import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App'
import initialState from './initialState'
import reducer from './_reducers'

import './assets/styles/styles.css'
import './assets/fontawesome-pro/all'

import Dashboard from './pages/Auth'

const store = createStore(reducer, initialState)

const container = document.getElementById('app')

render(
  <Provider store={store}>
    <Dashboard />
  </Provider>,
  container
)
