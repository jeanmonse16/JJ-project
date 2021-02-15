/* eslint-disable no-undef */
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setUserSession } from '../_actions'
import AuthMethod from '../AuthMethod'
import Swal from 'sweetalert2'
import { FacebookSignIn, GoogleSignIn } from '../_utils/SocialSignIn'
import { signUp } from '../_services/user_service'
import RedirectTo from '../_utils/RedirectTo'
import { ValidateMany } from '../_utils/Validator'
import { Loader } from '../_utils/Loader'
import InputGroup from '../components/InputGroup'
import ButtonGroup from '../components/ButtonGroup'

const RegisterForm = (props) => {
  const registerLoader = Loader()
  const [signUpLoading, setSignUpLoading] = useState(registerLoader.isLoading())

  const [UserData, setUserData] = useState({
    email: '',
    password: '',
    confirmedPassword: ''
  })

  const onChange = e => {
    setUserData({
      ...UserData,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const wrongData = ValidateMany([{ value: UserData.email, type: 'email' }, { value: UserData.password, type: 'password' }, { value: UserData.confirmedPassword, type: 'password' }])
      .filter(result => result !== 'succesfully Validated')

    if (wrongData.length) {
      console.error(wrongData[0])
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: wrongData[0]
      })
    } else if (UserData.password !== UserData.confirmedPassword) {
      console.error('Las contraseñas no coinciden')
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Las contraseñas no coinciden'
      })
    } else {
      registerLoader.loading()
      setSignUpLoading(registerLoader.isLoading())
      signUp(UserData)
        .then(response => {
          registerLoader.loaded()
          setSignUpLoading(registerLoader.isLoading())
          RedirectTo(`/waiting-for-account-activation?email=${response.data.message.email}`)
        })
        .catch(error => {
          registerLoader.loaded()
          setSignUpLoading(registerLoader.isLoading())
          const errorMessage = error.code
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo salió mal al procesar tu solicitud, intentalo de nuevo.'
          })
        })
    }
  }

  const authAction = (response) => {
    AuthMethod((payload) => props.setUserSession(payload), ENV.authMethod === 'jwt' ? response.data.message : null)
    RedirectTo('/dashboard')
  }

  return (
    <div className=' register-form'>
      <h2>REGÍSTRATE</h2>
      <form>
        <InputGroup inputType='text' inputName='email' inputPlaceHolder='Introduce tu correo electrónico' onChange={onChange} />
        <InputGroup inputType='password' inputName='password' inputPlaceHolder='Introduce tu contraseña' onChange={onChange} />
        <InputGroup inputType='password' inputName='confirmedPassword' inputPlaceHolder='Confirma tu contraseña' onChange={onChange} />
        <ButtonGroup buttonText='REGISTRARSE' handleClick={onSubmit} loading={signUpLoading} />
      </form>
    </div>
  )
}

const mapDispatchToProps = {
  setUserSession
}

export default connect(null, mapDispatchToProps)(RegisterForm)
