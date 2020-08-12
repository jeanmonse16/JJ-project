import React from 'react'
import InputGroup from './InputGroup'
import Go from './Go'

const LoginForm = () =>{
    return(
        <div className="login-center">
            <div className="section">
                <div className=" login-form">
                    <h2>INGRESA</h2>
                    <form>
                        <InputGroup inputType="text" inputId="correo" inputPlaceHolder="Introduce tu correo electronico"/>
                        <InputGroup inputType="password" inputId="password" inputPlaceHolder="Introduce tu contraseña"/>
                        <div className="login-options">
                            <div className="remember"><input type="checkbox" id="remember" /><label htmlFor="remember">Recordar</label></div>
                            <a href="#" className="forgot">¿Olvidaste tu contraseña?</a>
                        </div>
                        <Go goText="INICIAR SESIÓN"/>
                    </form>
                    <div className="login-thro-text">
                        <p>Ó</p>
                        <p>INGRESA A TRAVÉS DE TU CUENTA DE:</p>
                    </div>
                    <button className="login-thro"><i className="login-icons fab fa-facebook-f"></i></button>
                    <button className="login-thro"><i className="login-icons fab fa-google"></i></button>
                </div>
            </div>
            <div className="section">
                <div className="login-text">
                    <p>Inicia seccion en tu cuenta de TaskMaster</p>
                    <p className="no-account">¿no tienes una cuenta?</p>
                    <div className="access-register">
                        <button>REGISTRARSE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm