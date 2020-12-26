import React from 'react'
import ButtonGroup from '../../ButtonGroup'

const TutorialStepTwo = () => {
    return(
        <div className="tutorial-step-two">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="number">
                <label>#2</label>
            </div>
            <h3>Ahora añadele un titulo a la columna</h3>
            <p>Esto te servira para clasificar tus actividades</p>
            <p className="example">Ejemplo: una columna para tus tareas, una columna para tus reuniones, una columna para tus trabajos, etc...</p>
            <p>Para ello tienes que hacer click donde dice:</p>
            <p><b>"Titulo columna #1"</b></p>
            <p>Y escribes el titulo que desees</p>
            <div className="step-one-button-section">
                <ButtonGroup 
                    buttonText = "SALTAR"
                />
                <ButtonGroup 
                    buttonText = "CONTINUAR"
                />
            </div>
        </div>
    )
}

export default TutorialStepTwo