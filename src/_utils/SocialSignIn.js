import React, { useState } from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import GoogleLogin from 'react-google-login'
import { facebookSignIn as facebookSignInRequest, googleSignIn as googleSignInRequest } from '../_services/user_service'
import { Loader } from './Loader'
import Spinner from './Spinner'
import Swal from 'sweetalert2'

export const FacebookSignIn = ({ page, authAction }) => {
  const facebookLoader = Loader()
  const [isLoadingSignIn, setIsLoadingSignIn] = useState(false)

  function handleFacebookSignIn (response) {
    facebookLoader.loading()
    setIsLoadingSignIn(facebookLoader.isLoading())
    console.log(response)
    const facebookUser = {
      facebook_id: response.id,
      facebook_fullname: response.name,
      email: response.email,
      profile_picture: response.picture.data.url
    }

    return facebookSignInRequest(facebookUser)
      .then(response => {
        console.log(response)
        facebookLoader.loaded()
        setIsLoadingSignIn(facebookLoader.isLoading())
        Swal.fire({
          icon: 'success',
          title: 'Bienvenido',
          text: 'Disfruta de taskmaster!'
        })
        setTimeout(() => authAction(response), 3000)
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
        <button className={`${page}-thro`} onClick={renderProps.onClick}> {isLoadingSignIn ? <Spinner width='19.06px' height='19.38px' color='#2bcbba' /> : <div> <i className={`${page}-icons fab fa-facebook-f`} /> </div>}</button>
      )}
    />
  )
}

export const GoogleSignIn = ({ page, authAction }) => {
  const googleLoader = Loader()
  const [isLoadingSignIn, setIsLoadingSignIn] = useState(false)

  function handleGoogleSignIn (response) {
    googleLoader.loading()
    setIsLoadingSignIn(googleLoader.isLoading())
    console.log(response)
    const googleUser = {
      google_id: response.profileObj.googleId,
      email: response.profileObj.email,
      google_given_name: response.profileObj.givenName,
      google_fullname: response.profileObj.name,
      profile_picture: response.profileObj.imageUrl
    }
    return googleSignInRequest(googleUser)
      .then(response => {
        console.log(response)
        googleLoader.loaded()
        setIsLoadingSignIn(googleLoader.isLoading())
        Swal.fire({
          icon: 'success',
          title: 'Benvigut',
          text: 'Disfruta de taskmaster mientras exponemos tus datos'
        })
        setTimeout(() => authAction(response), 3000)
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
        <button className={`${page}-thro`} onClick={renderProps.onClick} disabled={renderProps.disabled}>  {isLoadingSignIn ? <Spinner width='19.06px' height='19.38px' color='#2bcbba' /> : <div> <i className={`${page}-icons fab fa-google`} /> </div>} </button>
      )}
      buttonText='Login'
      onSuccess={handleGoogleSignIn}
      onFailure={console.log}
      cookiePolicy='single_host_origin'
    />
  )
}
