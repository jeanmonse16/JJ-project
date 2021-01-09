import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import ButtonGroup from '../ButtonGroup'
import TabController from '../../_utils/TabController'
import { setActiveTutorialStep as setTutorialStep } from '../../_actions/index'

const TutorialBeginning = ({ onJump, onAccept }) => (
  <div className='tutorial-modal'>
    <div className='tutorial-start-body'>
      <i className='tutorial-modal-exit-icon far fa-times' />
      <h2>TUTORIAL INICIAL</h2>
      <i className='scroll-icon fal fa-books' />
      <p>El tutorial te permitirá realizar un recorrido por las funcionalidades básicas de TaskMater</p>
      <label>Podrás saltarlo en cualquier momento que desees</label>
      <div className='tutorial-button-section'>
        <ButtonGroup
          buttonText='SALTAR'
        />
        <ButtonGroup
          buttonText='ACEPTAR'
        />
      </div>
    </div>
  </div>
)

const TutorialEnd = ({ onJump, onAccept }) => (
  <div className='tutorial-modal'>
    <div className='tutorial-end-body'>
      <i className='tutorial-modal-exit-icon far fa-times' />
      <h2>TUTORIAL COMPLETADO</h2>
      <i className='check-icon fal fa-check-circle' />
      <p>¡Felicidades!, Ya has completado el tutorial básico de TaskMaster</p>
      <label>Para conocer más funcionalidades que puedes hacer en tu organizador de actividades revisa el apartado de "Trucos y consejos" en la sección de "Ayuda"</label>
      <div className='tutorial-button-section'>
        <ButtonGroup
          buttonText='CERRAR'
        />
      </div>
    </div>
  </div>
)

const Tutorial = ({ onSave, setTutorialStep, tutorialStepName }) => {
  const [TutorialSteps, setTutorialSteps] = useState(
    TabController([
      { Component: TutorialBeginning, name: 'start' },
      { Component: TutorialEnd, name: 'final' },
      { Component: null, name: 'dontShowTutorialModal' }
    ])
  )
  const [ActiveTutorialStep, setActiveTutorialStep] = useState(TutorialSteps.activeTab())

  useEffect(() => {
    if (tutorialStepName !== 'start' && tutorialStepName !== 'final') {
      onSave(0, false)
    }
  }, [])

  const skipTutorial = () => {
    // Request()
    onSave(0, false)
  }

  const setNextTutorialStep = () => {
    const tutorialNames = TutorialSteps.tabs().map(tutorial => tutorial.name)
    const activeTutorialStepIndex = tutorialNames.indexOf(ActiveTutorialStep.name)

    if (activeTutorialStepIndex === 0 || activeTutorialStepIndex === 1) {
      setActiveTutorialStep(TutorialSteps.tabs()[activeTutorialStepIndex + 1])
    } else {
      setActiveTutorialStep(TutorialSteps.tabs()[7])
    }
    window.localStorage.setItem('tutorialStepName', JSON.stringify(TutorialSteps.tabs()[activeTutorialStepIndex + 1]))
    setTutorialStep(TutorialSteps.tabs()[activeTutorialStepIndex + 1])
  }

  return (
    <div className='tutorial-modal'>
      {console.log(ActiveTutorialStep)}
      {ActiveTutorialStep.Component && <ActiveTutorialStep.Component onJump={skipTutorial} onAccept={setNextTutorialStep} />}
    </div>
  )
}

const mapStateToProps = state => ({
  tutorialStepName: state.tutorialStepName
})

const mapDispatchToProps = {
  setTutorialStep
}

export default connect(mapStateToProps, mapDispatchToProps)(Tutorial)
