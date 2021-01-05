import React, { useState, useEffect } from 'react'
import LoginForm from '../container/LoginForm'
import RegisterForm from '../container/RegisterForm'
import { connect } from 'react-redux'
import { setUserSession } from '../_actions'
import { FacebookSignIn, GoogleSignIn } from '../_utils/SocialSignIn'
import AuthMethod from '../AuthMethod'
import TabController from '../_utils/TabController'
import RedirectTo from '../_utils/RedirectTo'

const Auth = ({ path, setUserSession }) => {
  console.log(path)
  const Pages = path === '/sign-in'
    ? [
      { name: 'sign-in', view: LoginForm },
      { name: 'sign-up', view: RegisterForm }
    ]
    : [
      { name: 'sign-up', view: RegisterForm },
      { name: 'sign-in', view: LoginForm }
    ]
  const LoginPageIndex = Pages.map(page => page.name).indexOf('sign-in')
  const RegisterPageIndex = Pages.map(page => page.name).indexOf('sign-up')

  const AuthPages = TabController(Pages)
  const [AuthPagesController, setAuthPagesController] = useState(AuthPages)
  const [ActiveAuthPage, setActiveAuthPage] = useState(AuthPagesController.tabs()[0])
  const [isActiveAuthPage, setIsActiveAuthPage] = useState(() => AuthPagesController.isActiveTab)

  const authAction = (response) => {
    AuthMethod((payload) => setUserSession(payload), ENV.authMethod === 'jwt' ? response.data.message.key : null)
    RedirectTo('/dashboard')
  }

  return (
    <div className='logSign-container'>
      <div className='logSign-box'>
        <div className='section-left'>
          <div className='center'>
            <p>Utiliza tu cuenta de Facebook o Google para ingresar</p>
            <FacebookSignIn customClass='facebook' authAction={authAction} />
            <GoogleSignIn customClass='google' authAction={authAction} />
            <p>Tu información personal está protegida y resguardada en todo momento con nosotros</p>
          </div>
          <div className='or-ball'><i className='fas fa-chevron-circle-right' /></div>
        </div>
        <div className='section-right'>
          <div className='center'>
            <div className='switch'>
              <label className={ActiveAuthPage.name === 'sign-in' ? 'sw-btn activated' : 'sw-btn'} onClick={() => setActiveAuthPage(AuthPagesController.tabs()[LoginPageIndex])}>Iniciar sesión</label>
              <label><i className='arrow fal fa-chevron-double-left' /> ó <i className='arrow fal fa-chevron-double-right' /></label>
              <label className={ActiveAuthPage.name === 'sign-up' ? 'sw-btn activated' : 'sw-btn'} onClick={() => setActiveAuthPage(AuthPagesController.tabs()[RegisterPageIndex])}>Crear cuenta</label>
            </div>
            <ActiveAuthPage.view />
          </div>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  setUserSession
}

export default connect(null, mapDispatchToProps)(Auth)
