import React from 'react'
import LoginForm from '../container/LoginForm'
import RegisterForm from '../container/RegisterForm'
import { FacebookSignIn, GoogleSignIn } from '../_utils/SocialSignIn'

export default () =>{
    return(
        <div className="logSign-container">
            <div className="logSign-box">
                <div className="section-left">
                    <div className="center">
                    <p>Utiliza tu cuenta de Facebook o Google para ingresar</p>
                    <FacebookSignIn customClass='facebook' />
                    <GoogleSignIn customClass='google' />
                    <p>Tu informacion personal esta protegida y reguardada a todo momento contra amenazas</p>
                    </div>
                    <div className="or-ball"><i className="fas fa-chevron-circle-right"></i></div>
                </div>
                <div className="section-right">
                    <div className="center">
                        <div className="switch">
                            <label className="sw-btn activated">Inicar sesión</label>
                            <label><i className="arrow fal fa-chevron-double-left"></i> ó <i className="arrow fal fa-chevron-double-right"></i></label>
                            <label className="sw-btn">Crear cuenta</label>
                        </div>
                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
    )
}