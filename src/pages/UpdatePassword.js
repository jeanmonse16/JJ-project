import React from 'react'
import Swal from 'sweetalert2'
import { navigate } from '@reach/router'
import InputGroup from '../components/InputGroup'
import ButtonGroup from '../components/ButtonGroup'
import GetUrlParameter from '../_utils/GetUrlParameter'
import { ValidateOne } from '../_utils/Validator'
import { updateUserPassword, updateUserPassword as updateUserPasswordRequest } from '../_services'

import userImage from '../assets/images/profile-image.png'

const UpdatePassword = (props) => {
  const useLoader = () => {
    const [isLoading, setIsLoading] = React.useState(false)

    return {
      isOn: () => isLoading,
      on: () => setIsLoading(true),
      off: () => setIsLoading(false)
    }
  }
  const { username = '' } = props
  const Loader = useLoader()
  const [passwords, setPasswords] = React.useState({
    original: '',
    copy: ''
  })
  const handleChange = e => {
    setPasswords({
      ...passwords,
      [e.target.name]: e.target.value
    })
  }
  const hash = GetUrlParameter('update')

  const handleSubmit = () => {
    if (ValidateOne(passwords.original, 'password') === 1) {
      if (passwords.original === passwords.copy) {
        Loader.on()
        updateUserPasswordRequest(hash, passwords)
          .then(response => {
            Loader.off()
            navigate('/sign-in')
          })
          .catch(e => {
            Loader.off()
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Algo salió mal, intenta de nuevo.'
            })
          })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Las contraseñas no coinciden'
        })
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Inserta una contraseña válida.'
      })
    }
  }
  return (
    <div className='update-password-container'>
      <div className='update-password-message'>
        <h2>ACTUALIZA TU CONTRASEÑA</h2>
        <img src={userImage} />
        <label className='username'>{username}</label>
        <InputGroup inputType='password' inputName='original' inputPlaceHolder='Introduce tu nueva contraseña' onChange={handleChange} />
        <InputGroup inputType='password' inputName='copy' inputPlaceHolder='Confirma tu nueva contraseña' onChange={handleChange} />
        <ButtonGroup
          buttonText='ACTUALIZAR' loading={Loader.isOn()} handleClick={handleSubmit}
        />
      </div>
    </div>
  )
}

export default UpdatePassword
