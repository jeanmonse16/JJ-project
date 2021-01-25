import React from 'react'
import { connect } from 'react-redux'
import ButtonGroup from '../../ButtonGroup'

const TutorialStepOne = ({ onJump, onAccept, alias }) => {
  return (
    <div className='tutorial-step-one'>
      <span />
      <span />
      <span />
      <span />
      <div className='number'>
        <label>#1</label>
      </div>
      <h3>Lo primero que tienes que hacer es crear una nueva columna</h3>
      <p>Para ello tienes que hacer click donde dice:</p>
      <p><b>"Añadir una nueva columna"</b></p>
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

export default connect(mapStateToProps, null)(TutorialStepOne)
