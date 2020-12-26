import React from 'react'
import ButtonGroup from '../../ButtonGroup'

const TutorialStepFour = () => {
    return(
        <div className="tutorial-step-four">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="number">
                <label>#4</label>
            </div>
            <h3>Ahora rellena los campos para añadir la actividad</h3>
            <p>Esta es la ventana para añadir actividades, cada una de las cuales tiene su titulo, fecha, descripcion y hasta 4 archivos para agregarle en caso de que lo requieras.</p>
            <p>Una vez rellenados los campos, para agregar la nueva actividad a la columna que creaste has click en el boton:</p>
            <p><b>"GUARDAR"</b></p>
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

export default TutorialStepFour