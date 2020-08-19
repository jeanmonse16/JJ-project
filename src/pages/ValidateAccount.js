import React from 'react'
import '../styles/validateAccount.css'
import Go from '../components/login/Go'

export default () =>{
    return(
        <div className="validate-container">
            <div className="validate-message">
                <div className="validate-text">
                    <p>Tu cuenta de <strong>TaskMaster</strong> ha sido activada.</p>
                    <p>Pisa en el boton de abajo para ir a tu organizador</p>
                    <Go goText="IR A MI ORGANIZADOR" />
                </div>
            </div>
      </div>
    )
}