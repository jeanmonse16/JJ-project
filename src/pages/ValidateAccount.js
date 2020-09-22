/* eslint-disable react/jsx-closing-tag-location */
import React, { useState, useEffect } from 'react'
import { activateAccount as activateAccountRequest } from '../_services/user_service'
import { Loader } from '../_utils/Loader'
import GetUrlParameter from '../_utils/GetUrlParameter'
import RedirectTo from '../_utils/RedirectTo'
import '../styles/validateAccount.css'
import Go from '../components/login/Go'
import Spinner from '../_utils/Spinner'

export default () => {
  const activationHash = GetUrlParameter('activation')
  const activationLoader = Loader()
  const [isLoadingActivation, setIsLoadingActivation] = useState(activationLoader.isLoading())
  const [userAlreadyActive, setUserAlreadyActive] = useState(false)

  const activateAccount = () => {
    activationLoader.loading()
    setIsLoadingActivation(activationLoader.isLoading())

    if (activationHash.length) {
      return activateAccountRequest(activationHash)
        .then(response => {
          activationLoader.loaded()
          setIsLoadingActivation(activationLoader.isLoading())
          console.log(response.data)
        })
        .catch(error => {
          activationLoader.loaded()
          setIsLoadingActivation(activationLoader.isLoading())
          if (error.response.status === 500) { setUserAlreadyActive(true) }
          console.log(error)
        })
    } else {
      return RedirectTo('/welcome')
    }
  }

  useEffect(() => {
    console.log('esperate ctm')
    activateAccount()
  }, [])

  return (
    <div className='validate-container'>
      <div className='validate-message'>
        <div className='validate-text'>
          {isLoadingActivation
            ? <div> <Spinner color='#fff' height={140} width={400} /> </div>
            : userAlreadyActive
              ? <>
                <p>Tu cuenta de <strong>TaskMaster</strong> ya estaba activa.</p>
                <p>Pisa en el boton de abajo para iniciar sesión</p>
                <Go goText='IR AL SIGN IN' handleClick={() => RedirectTo('/sign-in')} />
              </>
              : <>
                <p>Tu cuenta de <strong>TaskMaster</strong> ha sido activada.</p>
                <p>Pisa en el boton de abajo para ir a tu organizador</p>
                <Go goText='IR A MI ORGANIZADOR' loading={isLoadingActivation} />
              </>
          // eslint-disable-next-line react/jsx-curly-newline
          }
        </div>
      </div>
    </div>
  )
}
