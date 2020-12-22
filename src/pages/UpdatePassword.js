import React from 'react'
import InputGroup from '../components/InputGroup'
import ButtonGroup from '../components/ButtonGroup'

import userImage from '../assets/images/profile-image.png'

const UpdatePassword = (props) =>{
  const {username = "HermanaDeLuis"} = props
  return(
    <div className="update-password-container">
        <div className="update-password-message">
          <h2>ACTUALIZA TU CONTRASEÑA</h2>
          <img src={userImage}/>
          <label className="username">{username}</label>
          <InputGroup inputType='password' inputName='password' inputPlaceHolder='Introduce tu nueva contraseña' />
          <InputGroup inputType='password' inputName='confirmedPassword' inputPlaceHolder='Confirma tu nueva contraseña' />
          <ButtonGroup 
            buttonText="ACTUALIZAR"
          />
        </div>
    </div>
  )
}

export default UpdatePassword

