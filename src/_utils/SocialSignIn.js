import React, { useState } from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import GoogleLogin from 'react-google-login'
import { facebookSignIn as facebookSignInRequest, googleSignIn as googleSignInRequest } from '../_services/user_service'
import { Loader } from './Loader'
import Spinner from './Spinner'
import Swal from 'sweetalert2'
import GoogleIcon from '../assets/images/G-Logo.png'

export const FacebookSignIn = ({ customClass, authAction = null }) => {
  const facebookLoader = Loader()
  const [isLoadingSignIn, setIsLoadingSignIn] = useState(false)

  function handleFacebookSignIn (response) {
    facebookLoader.loading()
    setIsLoadingSignIn(facebookLoader.isLoading())
    const facebookUser = {
      facebook_id: response.id,
      facebook_fullname: response.name,
      email: response.email,
      profile_picture: response.picture.data.url
    }

    return facebookSignInRequest(facebookUser)
      .then(LoginResponse => {
        facebookLoader.loaded()
        setIsLoadingSignIn(facebookLoader.isLoading())
        Swal.fire({
          icon: 'success',
          title: 'Bienvenido',
          text: 'Disfruta de taskmaster!'
        })
        setTimeout(() => authAction(LoginResponse), 3000)
      })
      .catch(error => {
        console.log(error)
        facebookLoader.loaded()
        setIsLoadingSignIn(facebookLoader.isLoading())
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Algo salió mal, intentalo de nuevo'
        })
      })
  }

  return (
    <FacebookLogin
      appId={ENV.FACEBOOK_APP_ID}
      autoload
      fields='name, email,picture'
      callback={handleFacebookSignIn}
      render={(renderProps) => (
        <button className={`${customClass}`} onClick={renderProps.onClick}> {isLoadingSignIn ? <Spinner width='19.06px' height='19.38px' color='#2bcbba' /> : <div> <i className='facebook-icon fab fa-facebook-f' /> Ingresar con Facebook</div>}</button>
      )}
    />
  )
}

export const GoogleSignIn = ({ customClass, authAction = null }) => {
  const googleLoader = Loader()
  const [isLoadingSignIn, setIsLoadingSignIn] = useState(false)

  function handleGoogleSignIn (response) {
    googleLoader.loading()
    setIsLoadingSignIn(googleLoader.isLoading())

    const googleUser = {
      google_id: response.profileObj.googleId,
      email: response.profileObj.email,
      google_given_name: response.profileObj.givenName,
      google_fullname: response.profileObj.name,
      profile_picture: response.profileObj.imageUrl
    }
    return googleSignInRequest(googleUser)
      .then(LoginResponse => {
        googleLoader.loaded()
        setIsLoadingSignIn(googleLoader.isLoading())
        Swal.fire({
          icon: 'success',
          title: 'Benvigut',
          text: 'Disfruta de taskmaster'
        })
        setTimeout(() => authAction(LoginResponse), 3000)
      })
      .catch(error => {
        console.log(error)
        googleLoader.loaded()
        setIsLoadingSignIn(googleLoader.isLoading())
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Algo salió mal, intentalo de nuevo crack'
        })
      })
  }

  return (
    <GoogleLogin
      clientId={ENV.GOOGLE_APP_ID}
      render={renderProps => (
        <button className={`${customClass}`} onClick={renderProps.onClick} disabled={renderProps.disabled}>  {isLoadingSignIn ? <Spinner width='19.06px' height='19.38px' color='#2bcbba' /> : <div> <img className='google-icon' src={GoogleIcon} />Ingresar con Google</div>} </button>
      )}
      buttonText='Login'
      onSuccess={handleGoogleSignIn}
      onFailure={console.log}
      cookiePolicy='single_host_origin'
    />
  )
}
