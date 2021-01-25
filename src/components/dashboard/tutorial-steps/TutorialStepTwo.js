import React from 'react'
import { connect } from 'react-redux'
import ButtonGroup from '../../ButtonGroup'

const TutorialStepTwo = ({ onJump, onAccept, alias }) => {
  return (
    <div className='tutorial-step-two'>
      <span />
      <span />
      <span />
      <span />
      <div className='number'>
        <label>#2</label>
      </div>
      <h3>Ahora añádele un título a la columna</h3>
      <p>Esto te servirá para clasificar tus actividades</p>
      <p className='example'>Ejemplo: una columna para tus tareas, una columna para tus reuniones, una columna para tus trabajos, etc...</p>
      <p>Para ello tienes que hacer click donde dice:</p>
      <p><b>"Título columna #1"</b></p>
      <p>Y escribes el título que desees</p>
      <div className='step-one-button-section'>
        <ButtonGroup
          buttonText='SALTAR' handleClick={() => onJump(alias)}
        />
        <ButtonGroup
          buttonText='CONTINUAR' handleClick={onAccept}
        />
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  alias: state.userData.alias
})

export default connect(mapStateToProps, null)(TutorialStepTwo)
