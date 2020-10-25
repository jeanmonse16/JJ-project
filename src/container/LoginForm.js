import React, { useState, useEffect } from 'react'
import { Link } from '@reach/router'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'
import InputGroup from '../components/InputGroup'
import Go from '../components/Go'
import { ValidateMany } from '../_utils/Validator'
import { FacebookSignIn, GoogleSignIn } from '../_utils/SocialSignIn'
import { Loader } from '../_utils/Loader'
import { signIn } from '../_services/user_service'
import RedirectTo from '../_utils/RedirectTo'
import { setUserSession } from '../_actions'
import AuthMethod from '../AuthMethod'

const LoginForm = (props) => {
  const loginLoader = Loader()
  const [signInLoading, setSignInLoading] = useState(loginLoader.isLoading())

  const [userInfo, setUserInfo] = useState({
    email: '',
    password: ''
  })

  const onChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const wrongData = ValidateMany([{ value: userInfo.email, type: 'email' }, { value: userInfo.password, type: 'password' }])
      .filter(result => result !== 'succesfully Validated')

    if (wrongData.length) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: wrongData[0]
      })
    } else {
      loginLoader.loading()
      setSignInLoading(loginLoader.isLoading())
      signIn(userInfo)
        .then(response => {
          AuthMethod((payload) => props.setUserSession(payload), ENV.authMethod === 'jwt' ? response.data.message : null)
          RedirectTo('/dashboard')
        })
        .catch(error => {
          if (error.response.status && error.response.status === 400) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Algo salió mal o las Credenciales son inválidas, intentalo de nuevo.'
            })
          }
        })
        .finally(() => {
          loginLoader.loaded()
          setSignInLoading(loginLoader.isLoading())
        })
    }
  }

  return (
    <div className='login-center'>
      <div className='section'>
        <div className='login-form'>
          <h2>INGRESA</h2>
          <form>
            <InputGroup inputType='text' inputName='email' inputPlaceHolder='Introduce tu correo electronico' onChange={onChange} />
            <InputGroup inputType='password' inputName='password' inputPlaceHolder='Introduce tu contraseña' onChange={onChange} />
            <div className='login-options'>
              <div className='remember'><input type='checkbox' id='remember' /><label htmlFor='remember'>Recordar</label></div>
              <Link to='/password-forgotten' className='forgot'>¿Olvidaste tu contraseña?</Link>
            </div>
            <Go goText='INICIAR SESIÓN' loading={signInLoading} handleClick={onSubmit} />
          </form>
          <div className='login-thro-text'>
            <p>Ó</p>
            <p>INGRESA A TRAVÉS DE TU CUENTA DE:</p>
          </div>
          {/* <button className='login-thro'><i className='login-icons fab fa-facebook-f' /></button>
          <button className='login-thro'><i className='login-icons fab fa-google' /></button> */}
          <FacebookSignIn page='login' />
          <GoogleSignIn page='login' />
        </div>
      </div>
      <div className='section'>
        <div className='login-text'>
          <p>Inicia seccion en tu cuenta de TaskMaster</p>
          <p className='no-account'>¿no tienes una cuenta?</p>
          <div className='access-register'>
            <button onClick={() => RedirectTo('/sign-up')}>REGISTRARSE</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = {
  setUserSession
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
