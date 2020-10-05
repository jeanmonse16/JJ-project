import React from 'react'
import '../styles/logSign.css'
import '../fontawesome-pro/all'
import LoginForm from '../components/login/LoginForm'
import RegisterForm from '../components/register/RegisterForm'

import GoogleLogo from '../images/G-logo.png'

export default () =>{
    return(
        <div className="logSign-container">
            <div className="logSign-box">
                <div className="section-left">
                    <div className="center">
                    <p>Utiliza tu cuenta de Facebook o Goolge para ingresar</p>
                    <button className="facebook"><i className="facebook-icon fab fa-facebook-f"></i>Ingresar con Facebook</button>
                    <button className="google"><img className="google-icon" src={GoogleLogo}/> Ingresar con Google</button>
                    <p>Tu informacion personal esta protegida y reguardada a todo momento contra amenazas</p>
                    </div>
                    <div className="or-ball"><i className="fas fa-chevron-circle-right"></i></div>
                </div>
                <div className="section-right">
                    <div className="center">
                        <div className="switch">
                            <label className="sw-btn activated">Inicar sesión</label>
                            <label><i className="arrow fal fa-chevron-double-left"></i> ó <i class="arrow fal fa-chevron-double-right"></i></label>
                            <label className="sw-btn">Crear cuenta</label>
                        </div>
                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
    )
}