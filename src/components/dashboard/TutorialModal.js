import React from 'react'
import ButtonGroup from '../ButtonGroup'

const Tutorial = () =>{
    return(
        <div className="tutorial-modal">
            <div className="tutorial-start-body">
                <i className="tutorial-modal-exit-icon far fa-times"></i>
                <h2>TUTORIAL INICIAL</h2>
                <i className="scroll-icon fal fa-books"></i>
                <p>El tutorial te permitirá realizar un recorrido por las funcionalidades básicas de TaskMater</p>
                <label>Podrás saltarlo en cualquier momento que desees</label>
                <div className="tutorial-button-section">
                    <ButtonGroup 
                        buttonText = "SALTAR"
                    />
                    <ButtonGroup 
                        buttonText = "ACEPTAR"
                    />
                </div>
            </div>
            <div className="tutorial-end-body">
                <i className="tutorial-modal-exit-icon far fa-times"></i>
                <h2>TUTORIAL COMPLETADO</h2>
                <i className="check-icon fal fa-check-circle"></i>
                <p>¡Felicidades!, Ya has completado el tutorial básico de TaskMaster</p>
                <label>Para conocer más funcionalidades que puedes hacer en tu organizador de actividades revisa el apartado de "Trucos y consejos" en la sección de "Ayuda"</label>
                <div className="tutorial-button-section">
                    <ButtonGroup 
                        buttonText = "CERRAR"
                    />
                </div>
            </div>
        </div>
    )
}

export default Tutorial