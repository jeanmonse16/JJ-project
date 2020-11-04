import React, { useState } from 'react'
import Swal from 'sweetalert2'
import '../assets/styles/validateAccount.css'
import InputCamp from '../components/InputGroup'
import Go from '../components/Go'
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
    <div className='validate-container'>
      <div className='validate-message'>
        <div className='validate-text'>
          <p>Ingresa tu correo asociado a una cuenta de <strong>TaskMaster.</strong></p>
          <InputCamp inputType='email' inputName='email' inputPlaceHolder='Ingresa aquí tu email' customStyles onChange={(e) => setUserEmail(e.target.value)} />
          <p>Pisa en el boton de abajo para enviar el link de actualización de contraseña</p>
          <Go goText='Enviar' loading={passwordUpdateLoading} handleClick={sendEmailForPasswordUpdate} />
        </div>
      </div>
    </div>
  )
}
