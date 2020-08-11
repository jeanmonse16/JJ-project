import React from 'react'
import InputGroup from '../login/InputGroup'
import Go from '../login/Go'

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
                        <Go goText="INICIAR SECCION"/>
                    </form>
                </div>
            </div>
            <div className="section">
                <div className="login-text">
                    <p>Inicia seccion en tu cuenta de TaskMaster</p>
                    <p>¿no tienes una cuenta?</p>
                    <div className="access-register">
                        <button>REGISTRARSE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm