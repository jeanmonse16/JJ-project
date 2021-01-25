import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setActiveTutorialStep as setTutorialStep } from '../../_actions/index'
import ButtonGroup from '../ButtonGroup'
import TabController from '../../_utils/TabController'

const TutorialButtons = ({ onJump, onAccept, finalStep = false }) => (
  <>
    {finalStep
      ? <div className='tutorial-button-section'>
        <ButtonGroup
          buttonText='CERRAR' handleClick={onJump}
        />
      </div>
      : <div className='tutorial-button-section'>
        <ButtonGroup
          buttonText='SALTAR' handleClick={onJump}
        />
        <ButtonGroup
          buttonText='ACEPTAR' handleClick={onAccept}
        />
        </div>}
  </>
)

const StartTutorial = ({ onJump, onAccept }) => (
  <div className='tutorial-start'>
    <div className='tutorial-body'>
      <div onClick={onJump}>  <i className='tutorial-modal-exit-icon far fa-times' /> </div>
      <h2>TUTORIAL INICIAL</h2>
      <i className='scroll-icon fal fa-books' />
      <p>El tutorial te permitara realizar un recorrido por las funcionalidades basicas de TaskMater</p>
      <label>Podras saltarlo en cualquier momento que desees</label>
      <TutorialButtons onJump={onJump} onAccept={onAccept} />
    </div>
  </div>
)

const TutorialStepOne = ({ onJump, onAccept }) => (
  <div className='tutorial-step-one'>
    <div className='number'>
      <label>#1</label>
    </div>
    <h3>Lo primero que tienes que hacer es crear una nueva columna</h3>
    <p>Para ello tienes que hacer click donde dice:</p>
    <p><b>"Añadir una nueva columna"</b></p>

    <TutorialButtons onJump={onJump} onAccept={onAccept} />
  </div>
)

const TutorialStepTwo = ({ onJump, onAccept }) => (
  <div className='tutorial-step-two'>
    <div className='number'>
      <label>#2</label>
    </div>
    <h3>Ahora añadele un titulo a la columna</h3>
    <p>Esto te servira para clasificar tus actividades</p>
    <p className='example'>Ejemplo: una columna para tus tareas, una columna para tus reuniones, una columna para tus trabajos, etc...</p>
    <p>Para ello tienes que hacer click donde dice:</p>
    <p><b>"Titulo columna #1"</b></p>
    <p>Y escribes el titulo que desees</p>
    <TutorialButtons onJump={onJump} onAccept={onAccept} />
  </div>
)

const TutorialStepThree = ({ onJump, onAccept }) => (
  <div className='tutorial-step-three'>
    <div className='number'>
      <label>#3</label>
    </div>
    <h3>Lo siguiente es añadir una actividad</h3>
    <p>Para ello tienes que hacer click al boton con el simbolo:</p>
    <p><b>"<i className='new-task-icon far fa-plus' />"</b></p>
    <TutorialButtons onJump={onJump} onAccept={onAccept} />

  </div>
)

const TutorialStepFour = ({ onJump, onAccept }) => (
  <div className='tutorial-step-four'>
    <div className='number'>
      <label>#4</label>
    </div>
    <h3>Ahora rellena los campos para añadir la actividad</h3>
    <p>Esta es la ventana para añadir actividades, cada una de las cuales tiene su titulo, fecha, descripcion y hasta 4 archivos para agregarle en caso de que lo requieras.</p>
    <p>Una vez rellenados los campos, para agregar la nueva actividad a la columna que creaste has click en el boton:</p>
    <p><b>"GUARDAR"</b></p>
    <TutorialButtons onJump={onJump} onAccept={onAccept} />
  </div>
)

const TutorialStepFive = ({ onJump, onAccept }) => (
  <div className='tutorial-step-five'>
    <div className='number'>
      <label>#5</label>
    </div>
    <h3>¡Listo! Ya creaste tu primera actividad</h3>
    <p>Las actividades que vayas creando apareceran como pequeñas tarjetas en las columnas donde las coloques.</p>
    <p>Podras echar un vistazo de toda la informacion que tiene la actividad, incluyedo su archivos subidos.</p>

    <TutorialButtons onJump={onJump} onAccept={onAccept} />
  </div>
)

const TutorialEnd = ({ onJump, onAccept }) => (
  <div className='tutorial-end'>
    <div className='tutorial-body'>
      <div onClick={onJump}> <i className='tutorial-modal-exit-icon far fa-times' /> </div>
      <h2>TUTORIAL COMPLETADO</h2>
      <i className='check-icon fal fa-check-circle' />
      <p>¡Felicidades!, Ya has completado el tutorial basico de TaskMaster</p>
      <label>Para conocer mas funcionalidades que puedes hacer en tu organizador de actividades revisa el apartado de "Trucos y consejos" en la seccion de "Ayuda"</label>
      <TutorialButtons onJump={onJump} onAccept={onAccept} finalStep />
    </div>
  </div>
)

const Tutorial = ({ onSave, setTutorialStep }) => {
  const [TutorialSteps, setTutorialSteps] = useState(
    TabController([
      { Component: StartTutorial, name: 'start' },
      { Component: TutorialStepOne, name: 'stepOne' },
      { Component: TutorialStepTwo, name: 'stepTwo' },
      { Component: TutorialStepThree, name: 'stepThree' },
      { Component: TutorialStepFour, name: 'stepFour' },
      { Component: TutorialStepFive, name: 'stepFive' },
      { Component: TutorialEnd, name: 'final' },
      { Component: null, name: 'dontShowTutorialModal' }
    ])
  )
  const [ActiveTutorialStep, setActiveTutorialStep] = useState(TutorialSteps.activeTab())
  const setNextTutorialStep = () => {
    const tutorialNames = TutorialSteps.tabs().map(tutorial => tutorial.name)
    const activeTutorialStepIndex = tutorialNames.indexOf(ActiveTutorialStep.name)

    if (activeTutorialStepIndex === 0 || activeTutorialStepIndex === 5) {
      setActiveTutorialStep(TutorialSteps.tabs()[activeTutorialStepIndex + 1])
    } else {
      setActiveTutorialStep(TutorialSteps.tabs()[7])
    }
    window.localStorage.setItem('tutorialStepIndex', JSON.stringify(TutorialSteps.tabs()[activeTutorialStepIndex + 1]))
    setTutorialStep(TutorialSteps.tabs()[activeTutorialStepIndex + 1])
  }

  return (
    <div className='tutorial-modal'>
      {ActiveTutorialStep.Component && <ActiveTutorialStep.Component onJump={() => onSave(0, false)} onAccept={setNextTutorialStep} />}
    </div>
  )
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = {
  setTutorialStep
}

export default connect(mapStateToProps, mapDispatchToProps)(Tutorial)
