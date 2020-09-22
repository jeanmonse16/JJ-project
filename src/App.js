import React from 'react'
import { Router } from '@reach/router'
import Login from './pages/Login'
import Register from './pages/Register'
import ActivateAccount from './pages/ValidateAccount'
import WaitingForActivation from './pages/WaitingActivation'
import Welcome from './pages/Home'
import PasswordForgotten from './pages/PasswordForgotten'
import UpdatePassword from './pages/UpdatePassword'

export default () => {
  return (
    <Router>
      <Welcome default />
      <Welcome path='/welcome' />
      <Register path='/sign-up' />
      <Login path='/sign-in' />
      <ActivateAccount path='/activate-account' />
      <WaitingForActivation path='/waiting-for-account-activation' />
      <PasswordForgotten path='/password-forgotten' />
      <UpdatePassword path='/updateYourPassword' />
    </Router>
  )
}
