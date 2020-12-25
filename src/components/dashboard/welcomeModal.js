import React from 'react'
import ButtonGroup from '../ButtonGroup'
import InputGroup from '../InputGroup'

import UploadImg from '../../assets/images/profile-image.png'

const WelcomeModal = () =>{
    return(
        <div className="welcome-modal">
            <div className="welcome-modal-body">
                <h2>BIENVENIDO A TASKMASTER</h2>
                <p>Añade un nombre de usuario y una foto de perfil</p>
                <div className="new-profile-image-container">
                    <div className="new-profile-image">
                        <div className="upload-image-icon-container">
                            <i className="upload-image-icon far fa-upload"></i>
                        </div>
                        <input type="file"/>
                        <img src={UploadImg}/>
                    </div>
                    <div className="random-image-container">
                        <i className="random-image-icon far fa-dice"></i>
                    </div>
                </div>
                <div className="new-username-container">
                    <InputGroup inputType="text" inputPlaceHolder="NOMBRE DE USUARIO"/>
                    <div className="random-username-container">
                        <i className="random-image-icon far fa-dice"></i>
                    </div>
                </div>
                <ButtonGroup 
                    buttonText="GUARDAR"
                />
            </div>
        </div>
    )
}

export default WelcomeModal