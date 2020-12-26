import React from 'react'
import ButtonGroup from '../../ButtonGroup'

const TutorialStepOne = () => {
    return(
        <div className="tutorial-step-one">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="number">
                <label>#1</label>
            </div>
            <h3>Lo primero que tienes que hacer es crear una nueva columna</h3>
            <p>Para ello tienes que hacer click donde dice:</p>
            <p><b>"Añadir una nueva columna"</b></p>
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

export default TutorialStepOne