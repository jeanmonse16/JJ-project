import React, { useState } from 'react'
import Swal from 'sweetalert2'
import InputGroup from '../components/InputGroup'
import ButtonGroup from '../components/ButtonGroup'
import { sendEmailForPasswordUpdate as sendEmailForPasswordUpdateRequest } from '../_services/user_service'
import { ValidateOne } from '../_utils/Validator'
import { Loader } from '../_utils/Loader'

export default () => {
  const [userEmail, setUserEmail] = useState('')
  const passwordUpdateLoader = Loader()
  const [passwordUpdateLoading, setPasswordUpdateLoading] = useState(passwordUpdateLoader.isLoading())

  const sendEmailForPasswordUpdate = () => {
    if (ValidateOne(userEmail, 'email') !== 1) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ingresá un email válido, por favor'
      })
    } else {
      passwordUpdateLoader.loading()
      setPasswordUpdateLoading(passwordUpdateLoader.isLoading())
      sendEmailForPasswordUpdateRequest(userEmail)
        .then(response => {
          passwordUpdateLoader.loaded()
          setPasswordUpdateLoading(passwordUpdateLoader.isLoading())
          console.log(response)
        })
        .catch(error => {
          passwordUpdateLoader.loaded()
          setPasswordUpdateLoading(passwordUpdateLoader.isLoading())
          console.log(error.response)
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ocurrió un error al enviar el mail, intentalo de nuevo'
          })
        })
    }
  }

  return (
    <div className='password-forgotten-container'>
      <div className='password-forgotten-message'>
          <h2>¿OLVIDASTE TU CONTRASEÑA?</h2>
          <p>Ingresa tu correo asociado a una cuenta de <strong>TaskMaster</strong></p>
          <InputGroup inputType='email' inputName='email' inputPlaceHolder='Ingresa aquí tu email' customStyles onChange={(e) => setUserEmail(e.target.value)} />
          <p>Pulsa en el boton de abajo para enviar el link de actualización de contraseña</p>
          <ButtonGroup buttonText='ENVIAR' loading={passwordUpdateLoading} handleClick={sendEmailForPasswordUpdate} />
      </div>
    </div>
  )
}
