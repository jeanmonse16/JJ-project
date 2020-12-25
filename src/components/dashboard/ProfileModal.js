import React from 'react'
import ButtonGroup from '../ButtonGroup'

import UserImg from '../../assets/images/user-profile.jpg'

const ProfileModal = (props) =>{
    const {userName, userEmail, userPassword} = props
    return(
        <div className="profile-modal">
            <div className="profile-modal-body">
                <i className="profile-modal-exit-icon far fa-times"></i>
                <div className="view-profile">
                    <h2>PERFIL DE TASKMASTER</h2>
                    <img src={UserImg}/>
                    <label className="username">{userName}</label>
                    <div className="acount-information">
                        <p>CORREO ELECTRONICO:</p>
                        <div className="profile-section">
                            <label>{userEmail}</label>
                            <div className="verify-email">
                                <label className="vefify-text">verificado</label>
                                <i className="verify-icon far fa-check"></i>
                            </div>
                        </div>
                        <hr />
                        <p>ACTIVIDADES AGENDADAS:</p>
                        <label>12</label>
                        <hr />
                        <p>ACTIVIDADES COMPLETADAS:</p>
                        <label>45</label>
                        <hr />
                        <p>CONTRASEÑA:</p>
                        <div className="profile-section">
                            <label>{userPassword}</label>
                            <div className="password-security-level">
                                <label className="low-level">baja</label>
                                <label className="medium-level">media</label>
                                <label className="high-level">alta</label>
                            </div>
                        </div>
                        <hr />
                    </div>    
                    <ButtonGroup 
                        buttonText="EDITAR"
                    />
                </div>
                <div className="edit-profile">
                    <h2>EDITAR PERFIL DE TASKMASTER</h2>
                    <div className="profile-image-container">
                        <div className="profile-image">
                            <div className="upload-image-icon-container">
                                <i className="upload-image-icon far fa-upload"></i>
                            </div>
                            <input type="file"/>
                            <img src={UserImg}/>
                        </div>
                        <div className="random-image-container">
                            <i className="random-image-icon far fa-dice"></i>
                        </div>
                    </div>
                    <div className="username-container">
                        <input type="text" defaultValue={userName} />
                        <div className="random-username-container">
                            <i className="random-image-icon far fa-dice"></i>
                        </div>
                    </div>
                    <p>CAMBIAR CONTRASEÑA</p>
                    <div className="change-password-container">
                        <p>ACTUAL CONTRASEÑA:</p>
                        <div className="password-input-container">
                            <i className="view-password-icon far fa-eye"></i>
                            <input type="password" />
                        </div>
                        <p>NUEVA CONTRASEÑA:</p>
                        <div className="password-input-container">
                            <div className="password-security-level">
                                <label className="low-level">baja</label>
                                <label className="medium-level">media</label>
                                <label className="high-level">alta</label>
                            </div>
                            <input type="password" className="new-password-input" />
                        </div>
                        <p>CONFIRMAR NUEVA CONTRASEÑA:</p>
                        <div className="password-input-container">
                            <input type="password" />
                        </div>
                    </div>
                    <div className="edit-profile-buttom">
                        <ButtonGroup 
                            buttonText="DESCARTAR"
                        />
                        <ButtonGroup 
                            buttonText="GUARDAR"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileModal