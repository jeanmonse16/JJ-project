/* eslint-disable react/jsx-closing-tag-location */
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { setUserSession } from '../_actions'
import AuthMethod from '../AuthMethod'
import { activateAccount as activateAccountRequest } from '../_services/user_service'
import { Loader } from '../_utils/Loader'
import GetUrlParameter from '../_utils/GetUrlParameter'
import RedirectTo from '../_utils/RedirectTo'
import ButtonGroup from '../components/ButtonGroup'
import Spinner from '../_utils/Spinner'

const ValidateAccount = (props) => {
  const useLoader = () => {
    const [isLoading, setIsLoading] = useState(false)

    return {
      isOn: () => isLoading,
      on: () => setIsLoading(true),
      off: () => setIsLoading(false)
    }
  }
  const activationHash = GetUrlParameter('activation')
  const Loader = useLoader()
  const [userAlreadyActive, setUserAlreadyActive] = useState(false)
  const [userKey, setUserKey] = useState(null)

  const activateAccount = () => {
    Loader.on()

    if (activationHash.length) {
      return activateAccountRequest(activationHash)
        .then(response => {
          setUserKey(response.data.message.key)
        })
        .catch(error => {
          if (error.response.status === 500) { setUserAlreadyActive(true) }
          console.log(error)
        })
        .finally(Loader.off)
    } else {
      return RedirectTo('/welcome')
    }
  }

  const goToUserDashboard = () => {
    AuthMethod((payload) => props.setUserSession(payload), ENV.authMethod === 'jwt' ? userKey : null)
    RedirectTo('/dashboard')
  }

  useEffect(() => {
    console.log('esperate ctm')
    activateAccount()
  }, [])

  return (
    <div className='validate-container'>
      <div className='validate-message'>
        {Loader.isOn()
          ? <div> <Spinner color='#2bcbba' height={140} width={400} /> </div>
          : userAlreadyActive
            ? <>
              <h2>CUENTA YA ACTIVADA</h2>
              <p>Tu cuenta de <strong>TaskMaster</strong> ya estaba activa</p>
              <p>Pulsa en el boton de abajo para iniciar sesión</p>
              <ButtonGroup buttonText='IR AL SIGN IN' handleClick={() => RedirectTo('/sign-in')} />
            </>
            : <>
              <h2>CUENTA ACTIVADA</h2>
              <p>Tu cuenta de <strong>TaskMaster</strong> ha sido activada</p>
              <p>Pulsa en el boton de abajo para ir a tu organizador</p>
              <ButtonGroup buttonText='IR A MI ORGANIZADOR' handleClick={goToUserDashboard} />
            </>
          // eslint-disable-next-line react/jsx-curly-newline
        }
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  setUserSession
}

export default connect(null, mapDispatchToProps)(ValidateAccount)
