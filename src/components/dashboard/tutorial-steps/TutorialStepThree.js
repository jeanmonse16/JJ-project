import React from 'react'
import { connect } from 'react-redux'
import ButtonGroup from '../../ButtonGroup'

const TutorialStepThree = ({ onJump, onAccept, alias }) => {
  return (
    <div className='tutorial-step-three'>
      <span />
      <span />
      <span />
      <span />
      <div className='number'>
        <label>#3</label>
      </div>
      <h3>Lo siguiente es añadir una actividad</h3>
      <p>Para ello tienes que hacer click al botón con el símbolo:</p>
      <p><b>"<i className='new-task-icon far fa-plus' />"</b></p>
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

export default connect(mapStateToProps, null)(TutorialStepThree)
