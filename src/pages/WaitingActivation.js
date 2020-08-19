import React from 'react'
import '../styles/waitingActivation.css'
import Go from '../components/login/Go'

export default () =>{
    return(
        <div className="waiting-container">
            <div className="waiting-message">
                <h2>ACTIVA TU CUENTA</h2>
                <div className="waiting-text">
                    <p>Revisa el link que activación que se te envió a tu correo electrónico</p>
                    <div className="resend">
                        <p>¿No recibiste ningún link de activación en tu correo?</p>
                        <Go goText="REENVIAR"/>
                    </div>
                </div>
            </div>
      </div>
    )
}