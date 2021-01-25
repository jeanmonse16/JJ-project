import React from 'react'
import { connect } from 'react-redux'
import ButtonGroup from '../../ButtonGroup'

const TutorialStepFour = ({ onJump, onAccept, alias }) => {
  return (
    <div className='tutorial-step-four'>
      <span />
      <span />
      <span />
      <span />
      <div className='number'>
        <label>#4</label>
      </div>
      <h3>Ahora rellena los campos para añadir la actividad</h3>
      <p>Esta es la ventana para añadir actividades, cada una de las cuales tiene su título, fecha, descripción y hasta 4 archivos para agregarle en caso de que lo requieras.</p>
      <p>Una vez rellenados los campos, para agregar la nueva actividad a la columna que creaste has click en el botón:</p>
      <p><b>"GUARDAR"</b></p>
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

export default connect(mapStateToProps, null)(TutorialStepFour)
