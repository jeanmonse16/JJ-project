import React from 'react'
import ButtonGroup from '../../ButtonGroup'

const TutorialStepFive = () => {
    return(
        <div className="tutorial-step-five">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="number">
                <label>#5</label>
            </div>
            <h3>¡Listo! Ya creaste tu primera actividad</h3>
            <p>Las actividades que vayas creando aparecerán como pequeñas tarjetas en las columnas donde las coloques.</p>
            <p>Podrás echar un vistazo de toda la información que tiene la actividad, incluyendo sus archivos subidos.</p>
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

export default TutorialStepFive