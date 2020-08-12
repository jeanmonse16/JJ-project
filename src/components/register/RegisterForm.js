import React from 'react'
import InputGroup from '../login/InputGroup'
import Go from '../login/Go'

const RegisterForm = () =>{
    return(
        <div className="register-center">
            <div className="section">
                <div className="register-text">
                    <p>Registrate en TaskMaster</p>
                    <p className="already-account">¿ya tienes una cuenta?</p>
                    <div className="access-login">
                        <button>INICIAR SESIÓN</button>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className=" register-form">
                    <h2>REGISTRATE</h2>
                    <form>
                        <InputGroup inputType="text" inputId="correo" inputPlaceHolder="Introduce tu correo electronico"/>
                        <InputGroup inputType="password" inputId="password" inputPlaceHolder="Introduce tu contraseña"/>
                        <InputGroup inputType="password" inputId="confirmedPassword" inputPlaceHolder="Confirma tu contraseña"/>
                        <Go goText="REGISTARSE"/>
                    </form>
                    <div className="register-thro-text">
                        <p>Ó</p>
                        <p>REGISTRATE A TRAVÉS DE TU CUENTA DE:</p>
                    </div>
                    <button className="register-thro"><i className="register-icons fab fa-facebook-f"></i></button>
                    <button className="register-thro"><i className="register-icons fab fa-google"></i></button>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm