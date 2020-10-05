import React from 'react'
import InputGroup from '../login/InputGroup'
import Go from '../login/Go'

const RegisterForm = () =>{
    return(
        <div className="register-form">
            <h1>TaskMaster</h1>
            <p>Ingresa tus datos para crear una cuenta</p>
            <form>
                <InputGroup inputType="text" inputId="correo" inputPlaceHolder="Introduce tu correo electronico"/>
                <InputGroup inputType="password" inputId="password" inputPlaceHolder="Introduce tu contraseña"/>
                <InputGroup inputType="password" inputId="confirmedPassword" inputPlaceHolder="Confirma tu contraseña"/>
                <div className="register-options">
                    <div className="terms"><input type="checkbox" id="terms" /><label htmlFor="terms">Acepto los</label><a href="#">Terminos y condiciones</a></div>
                </div>
                <Go goText="CREAR CUENTA"/>
            </form>
        </div>
    )
}

export default RegisterForm