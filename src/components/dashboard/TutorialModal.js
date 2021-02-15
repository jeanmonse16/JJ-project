import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import ButtonGroup from '../ButtonGroup'
import { setActiveTutorialStep as setTutorialStep } from '../../_actions/index'
import { endUserFirstTime as endUserFirstTimeRequest } from '../../_services/index'

const TutorialBeginning = ({ onJump, onAccept }) => (
  <div className='tutorial-modal'>
    <div className='tutorial-start-body'>
      <div onClick={onJump}>
        <i className='tutorial-modal-exit-icon far fa-times' />
      </div>
      <h2>TUTORIAL INICIAL</h2>
      <i className='scroll-icon fal fa-books' />
      <p>El tutorial te permitirá realizar un recorrido por las funcionalidades básicas de TaskMater</p>
      <label>Podrás saltarlo en cualquier momento que desees</label>
      <div className='tutorial-button-section'>
        <ButtonGroup
          buttonText='SALTAR' handleClick={onJump}
        />
        <ButtonGroup
          buttonText='ACEPTAR' handleClick={onAccept}
        />
      </div>
    </div>
  </div>
)

const TutorialEnd = ({ onJump, onAccept }) => (
  <div className='tutorial-modal'>
    <div className='tutorial-end-body'>
      <div onClick={onJump}>
        <i className='tutorial-modal-exit-icon far fa-times' />
      </div>
      <h2>TUTORIAL COMPLETADO</h2>
      <i className='check-icon fal fa-check-circle' />
      <p>¡Felicidades!, Ya has completado el tutorial básico de TaskMaster</p>
      <label>Para conocer más funcionalidades que puedes hacer en tu organizador de actividades revisa el apartado de "Trucos y consejos" en la sección de "Ayuda"</label>
      <div className='tutorial-button-section'>
        <ButtonGroup
          buttonText='CERRAR' handleClick={onAccept}
        />
      </div>
    </div>
  </div>
)

const Tutorial = ({ onSave, setTutorialStep, activeTutorialStepName, tutorialSteps, token, alias }) => {
  const ActiveTutorialModal = activeTutorialStepName !== 'end' ? TutorialBeginning : TutorialEnd

  const skipTutorial = () => {
    endUserFirstTime()
    onSave(0, false, false)
  }

  const setNextTutorialStep = () => {
    if (activeTutorialStepName !== 'end') {
      setTutorialStep('firstStep')
      onSave(0, false)
    } else {
      setTutorialStep(null)
      endUserFirstTime()
      onSave(0, false, false)
    }
  }

  let errorCount = 0

  const endUserFirstTime = () => {
    setTutorialStep(null)
    endUserFirstTimeRequest(token, alias)
      .catch(e => {
        ++errorCount
        if (errorCount < 3) {
          endUserFirstTime()
        }
      })
  }

  return (
    <div className='tutorial-modal'>
      <ActiveTutorialModal onJump={skipTutorial} onAccept={setNextTutorialStep} />
    </div>
  )
}

const mapStateToProps = state => ({
  tutorialSteps: state.tutorialSteps,
  activeTutorialStepName: state.activeTutorialStepName,
  token: state.token,
  alias: state.userData.alias
})

const mapDispatchToProps = {
  setTutorialStep
}

export default connect(mapStateToProps, mapDispatchToProps)(Tutorial)
