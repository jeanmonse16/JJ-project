import React from 'react'
import { Router } from '@reach/router'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'

export default () => {
  return (
    <Router>
      <Register path='/register' />
      <Login path='/login' />
      <Dashboard path='/dashboard' />
    </Router>
  )
}
