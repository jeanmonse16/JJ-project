import React from 'react'
import InputGroup from './InputGroup'
import Go from './Go'

const LoginForm = () =>{
    return(
        <div className="login-form">
            <h1>TaskMaster</h1>
            <p>Ingresa tus datos para acceder a tu cuenta</p>
            <form>
                <InputGroup inputType="text" inputId="correo" inputPlaceHolder="Introduce tu correo electronico"/>
                <InputGroup inputType="password" inputId="password" inputPlaceHolder="Introduce tu contraseña"/>
                <div className="login-options">
                    <div className="remember"><input type="checkbox" id="remember" /><label htmlFor="remember">Recordar</label></div>
                    <a href="#" className="forgot">¿Olvidaste tu contraseña?</a>
                </div>
                <Go goText="INICIAR SESIÓN"/>
            </form>
        </div>
    )
}

export default LoginForm