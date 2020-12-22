import React from 'react'
import ButtonGroup from '../ButtonGroup'

import UploadImg from '../../assets/images/profile-image.png'

const welcomeModal = () => {
  return (
    <div className='welcome-modal'>
      <div className='welcome-modal-body'>
        <h2>BIENVENIDO A TASKMASTER</h2>
        <p>Añade un nombre de usauario y una foto de perfil</p>
        <div className='new-profile-image-container'>
          <div className='new-profile-image'>
            <div className='upload-image-icon-container'>
              <i className='upload-image-icon far fa-upload' />
            </div>
            <input type='file' />
            <img src={UploadImg} />
          </div>
          <i className='random-image-icon far fa-dice' />
        </div>
        <div className='new-username-container'>
          <input className='new-username' type='text' placeholder='NOMBRE DE USUARIO' />
          <i className='random-usename-icon far fa-dice' />
        </div>
        <ButtonGroup
          buttonText='GUARDAR'
        />
      </div>
    </div>
  )
}

export default welcomeModal
