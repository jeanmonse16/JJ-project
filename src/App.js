import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Router, Redirect } from '@reach/router'
import Auth from './pages/Auth'
import Login from './pages/Login'
import Register from './pages/Register'
import ActivateAccount from './pages/ValidateAccount'
import WaitingForActivation from './pages/WaitingActivation'
import Home from './pages/Home'
import PasswordForgotten from './pages/PasswordForgotten'
import UpdatePassword from './pages/UpdatePassword'
import Dashboard from './pages/Dashboard'
import AboutUs from './pages/AboutOf'
import { setUserSession, logOutUser } from './_actions'
import SessionKeyUpdater from './_utils/SessionKeyUpdater'

const App = (props) => {
  const [isAuth, setIsAuth] = useState(function () {
    return props.userSession
  })

  const sessionKeyUpdater = SessionKeyUpdater(props.userSession, props.setUserSession, props.logOutUser)

  useEffect(() => {
    setIsAuth(function () {
      return props.userSession
    })
  })

  useEffect(() => {
    isAuth()
      ? !sessionKeyUpdater.isRunningKeySessionUpdater() && sessionKeyUpdater.start()
      : sessionKeyUpdater.stop()
  }, [isAuth])

  return (
    <Router>
      {isAuth() && <Redirect noThrow from='/' to='/dashboard' />}
      {isAuth() && <Redirect noThrow from='sign-up' to='/dashboard' />}
      {isAuth() && <Redirect noThrow from='sign-in' to='/dashboard' />}
      {isAuth() && <Redirect noThrow from='activate-account' to='/dashboard' />}
      {isAuth() && <Redirect noThrow from='waiting-for-account-activation' to='/dashboard' />}
      {isAuth() && <Redirect noThrow from='password-forgotten' to='/dashboard' />}
      {isAuth() && <Redirect noThrow from='updateYourPassword' to='/dashboard' />}
      {!isAuth() && <Redirect noThrow from='dashboard' to='/sign-in' />}
      <Home default />
      <Home path='/' />
      <Dashboard path='/dashboard' />
      <Auth path='/sign-up' />
      <Auth path='/sign-in' />
      <ActivateAccount path='/activate-account' />
      <WaitingForActivation path='/waiting-for-account-activation' />
      <PasswordForgotten path='/password-forgotten' />
      <UpdatePassword path='/updateYourPassword' />
      <AboutUs path='about-us' />
    </Router>
  )
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = {
  setUserSession,
  logOutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
