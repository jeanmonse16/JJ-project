/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/jsx-closing-tag-location */
import React, { useState, useEffect } from 'react'
import { checkForAccountVerification as checkForAccountVerificationRequest, resendEmailForVerification as resendEmailForVerificationRequest } from '../_services/user_service'
import RedirectTo from '../_utils/RedirectTo'
import GetUrlParameter from '../_utils/GetUrlParameter'
import { Loader } from '../_utils/Loader'
import Spinner from '../_utils/Spinner'
import ButtonGroup from '../components/ButtonGroup'

export default () => {
  /* ejemplo de como manejar parametros con la clase URLSEARCHPARAMS
  // Assuming "?post=1234&action=edit"

  var urlParams = new URLSearchParams(window.location.search);

  console.log(urlParams.has('post')); // true
  
*/
  const emailQueryParam = GetUrlParameter('email')
  const accountCheckLoader = Loader()
  const [isLoadingAccountCheck, setIsLoadingAccountCheck] = useState(accountCheckLoader.isLoading())
  const emailResendingLoader = Loader()
  const [isLoadingEmailResending, setIsLoadingEmailResending] = useState(emailResendingLoader.isLoading())

  const checkForAccountVerification = () => {
    accountCheckLoader.loading()
    setIsLoadingAccountCheck(accountCheckLoader.isLoading())

    if (emailQueryParam.length) {
      checkForAccountVerificationRequest(emailQueryParam)
        .then(() => {
          accountCheckLoader.loaded()
          setIsLoadingAccountCheck(accountCheckLoader.isLoading())
        })
        .catch(error => {
          console.log(error.response)
          if (error.response.data.message === 'something went wrong!' && error.response.data.status === 400) {
            RedirectTo('/welcome')
          } else {
            accountCheckLoader.loaded()
            setIsLoadingAccountCheck(accountCheckLoader.isLoading())
          }
        })
    } else {
      RedirectTo('/welcome')
    }
  }

  const resendEmailForVerification = () => {
    emailResendingLoader.loading()
    setIsLoadingEmailResending(emailResendingLoader.isLoading())
    return resendEmailForVerificationRequest(emailQueryParam)
      .then(() => {
        RedirectTo(`/waiting-for-account-activation?email=${emailQueryParam}`)
        emailResendingLoader.loaded()
        setIsLoadingEmailResending(emailResendingLoader.isLoading())
      })
      .catch(error => {
        console.error(error)
        emailResendingLoader.loaded()
        setIsLoadingEmailResending(emailResendingLoader.isLoading())
      })
  }

  useEffect(() => {
    console.log('espere....')
    checkForAccountVerification()
  }, [])

  return (
    <div className='waiting-container'>
      <div className='waiting-message'>
        {isLoadingAccountCheck
          ? <div> <Spinner color='#2bcbba' height={150} width={400} /> </div>
          : <>
            <h2>ACTIVA TU CUENTA</h2>
            <p>Revisa el link de activación que se te envió a tu correo electrónico</p>
            <div className="resend">
              <p>¿No recibiste ningún link de activación en tu correo?</p>
              <p>Pulsa en el boton de abajo para reenviar el link de activación a tu correo electrónico</p>
            </div>
            <ButtonGroup buttonText='REENVIAR' handleClick={resendEmailForVerification} loading={isLoadingEmailResending}/>
          </>
          // eslint-disable-next-line indent
        }
      </div>
    </div>
  )
}
