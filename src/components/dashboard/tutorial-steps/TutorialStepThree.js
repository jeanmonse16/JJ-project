import React from 'react'
import ButtonGroup from '../../ButtonGroup'

const TutorialStepThree = () => {
    return(
        <div className="tutorial-step-three">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="number">
                <label>#3</label>
            </div>
            <h3>Lo siguiente es añadir una actividad</h3>
            <p>Para ello tienes que hacer click al boton con el simbolo:</p>
            <p><b>"<i className="new-task-icon far fa-plus"></i>"</b></p>
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

export default TutorialStepThree