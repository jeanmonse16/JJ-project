import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'

import Menu from '../components/dashboard/Menu'
import Column from '../components/dashboard/Column'
import TaskModal from '../components/dashboard/TaskModal'
import WelcomeModal from '../components/dashboard/WelcomeModal'
import TutorialModal from '../components/dashboard/TutorialModal'
import ProfileModal from '../components/dashboard/ProfileModal'
import TutorialStepOne from '../components/dashboard/tutorial-steps/TutorialStepOne'
import TutorialStepTwo from '../components/dashboard/tutorial-steps/TutorialStepTwo'
import TutorialStepThree from '../components/dashboard/tutorial-steps/TutorialStepThree'
import TutorialStepFive from '../components/dashboard/tutorial-steps/TutorialStepFive'

import Loading from '../components/Loader'
import { Loader } from '../_utils/Loader'
import { getUserProfile as getUserProfileRequest, endUserFirstTime as endUserFirstTimeRequest } from '../_services'
import { logOutUser, setUserProfile, setActiveTutorialStep, setTaskColumns, addTaskColumn, setColumnName } from '../_actions'
import RedirectTo from '../_utils/RedirectTo'
import TabController from '../_utils/TabController'
import UUIDGenerator from '../_utils/UUID_Generator'

const AddNewColumn = (props) => (
  <div className='new-column-container'>
    <div className='new-column-center' onClick={() => props.handleClick(props.activeTutorialStepName)}>
      <i className='new-column-icon fal fa-plus' />
      <p>Añadir nueva columna</p>
    </div>
  </div>
)

const AddNewColumnComponent = connect((state) => ({ activeTutorialStepName: state.activeTutorialStepName }), null)(AddNewColumn)

const Dashboard = (props) => {
  /* porción para obtención del perfil del usuario */
  const profileLoader = Loader()
  const [isLoadingProfile, setIsLoadingProfile] = useState(profileLoader.isLoading())

  const getUserProfile = (showLoadingPage = true) => {
    if (showLoadingPage) {
      profileLoader.loading()
      setIsLoadingProfile(profileLoader.isLoading())
    }

    const getTaskColumns = tasks => {
      const taskColumnsToReturn = []

      tasks.map(task => {
        if (taskColumnsToReturn.find(taskColumn => taskColumn.name === task.columnName)) {
          taskColumnsToReturn.map(taskColumn => {
            if (taskColumn.name === task.columnName) {
              return {
                ...taskColumn,
                tasks: taskColumn.tasks.push(task)
              }
            } else {
              return taskColumn
            }
          })
        } else {
          taskColumnsToReturn.push({
            id: task.columnId || UUIDGenerator().slice(0, 8),
            name: task.columnName,
            tasks: [task],
            Component: Column,
            props: {
              handleEvent: () => null,
              handleNewTaskButtonClick: () => handleNewTaskButtonClick(),
              inputId: UUIDGenerator()
            }
          })
        }
      })

      return taskColumnsToReturn
    }

    return getUserProfileRequest(props.token)
      .then(response => {
        const userProfile = response.data.message.profile
        props.setUserProfile(userProfile)

        if (!userProfile.username && userProfile.firstTime) {
          setActiveModal(ModalsController.tabs()[1])
        } else if ((userProfile.firstTime && (props.activeTutorialStepName === 'start' || props.activeTutorialStepName === 'end' || !props.activeTutorialStepName)) || (props.activeTutorialStepName === 'start' || props.activeTutorialStepName === 'end')) {
          setActiveModal(ModalsController.tabs()[2])
        } else if (props.tutorialSteps.slice(1, 6).indexOf(props.activeTutorialStepName) !== -1) {
          const activeTutorialStepIndex = props.tutorialSteps.slice(1, 6).indexOf(props.activeTutorialStepName)
          setActiveTutorialStep(tutorialSteps[activeTutorialStepIndex])
        }

        props.setTaskColumns([...getTaskColumns(userProfile.tasks), AddNewColumn])
      })
      .catch(error => {
        console.log(error)
        props.setTaskColumns([AddNewColumn])

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.status === 401 ? 'La sesión expiró' : 'Algo salió mal'
        })
          .then(() => {
            setActiveTutorialStep(null)
            props.setActiveTutorialStep(null)
            props.logOutUser(false)
            RedirectTo('/sign-in')
          })
      })
      .finally(() => {
        if (showLoadingPage) {
          profileLoader.loaded()
          setIsLoadingProfile(profileLoader.isLoading())
        }
      })
  }

  /* Cierre de porción para obtención de perfil del usuario */

  /* Manejo de modales del dashboard */

  const [ModalsController, setModalsController] = useState(
    TabController([
      { canShow: false },
      {
        name: 'welcome',
        Component: WelcomeModal,
        canShow: true,
        onSave: (i, updateProfile = true) => { setActiveModal(ModalsController.tabs()[i]); updateProfile && getUserProfile() },
        props: { handleSkipTutorial: () => null, handleTutorialNextStep: () => null }
      },
      {
        name: 'tutorial',
        Component: TutorialModal,
        canShow: true,
        onSave: (i, updateProfile = true, showFirstStep = true) => { setActiveModal(ModalsController.tabs()[i]); updateProfile && getUserProfile(); showFirstStep && setActiveTutorialStep(tutorialSteps[0]) },
        props: { handleSkipTutorial: () => null, handleTutorialNextStep: () => null }
      },
      {
        name: 'Task',
        Component: TaskModal,
        canShow: true,
        onSave: (i, updateProfile = true) => { setActiveModal(ModalsController.tabs()[i]); updateProfile && getUserProfile() },
        props: { handleSkipTutorial: (alias) => skipTutorial(alias), handleActiveFifthTutorial: () => props.setActiveTutorialStep('fifthStep'), handleTutorialNextStep: () => handleTutorialNextStep(), close: () => setActiveModal(ModalsController.tabs()[0]), getUserProfile: getUserProfile }
      },
      {
        name: 'profile',
        Component: ProfileModal,
        canShow: true,
        onSave: (i, updateProfile = true) => { setActiveModal(ModalsController.tabs()[i]); updateProfile && getUserProfile() },
        props: { close: () => setActiveModal(ModalsController.tabs()[0]) }
      }
    ])
  )
  const [ActiveModal, setActiveModal] = useState(ModalsController.activeTab())

  const skipTutorial = (alias) => {
    setActiveTutorialStep(null)
    props.setActiveTutorialStep(null)
    endUserFirstTimeRequest(props.token, alias)
  }

  const handleTutorialNextStep = (tutorialStepIndex = null) => {
    if (tutorialStepIndex === null) {
      props.setActiveTutorialStep('fifthStep')
      setActiveTutorialStep(tutorialSteps[3])
    } else if (tutorialStepIndex === 3) {
      setActiveTutorialStep(tutorialSteps[tutorialStepIndex + 1])
      props.setActiveTutorialStep('end')
      setActiveModal(ModalsController.tabs()[2])
    } else if (tutorialStepIndex === 1) {
      setActiveTutorialStep(tutorialSteps[tutorialStepIndex + 1])
      props.setActiveTutorialStep(tutorialSteps[tutorialStepIndex + 1].name)
    } else {
      setActiveTutorialStep(tutorialSteps[5])
      props.setActiveTutorialStep(tutorialSteps[tutorialStepIndex + 1].name)
    }
  }

  const tutorialSteps = [TutorialStepOne, TutorialStepTwo, TutorialStepThree, TutorialStepFive]
    .map((Component, i) => ({
      Component: Component, name: props.tutorialSteps.slice(1, 6)[i], canShow: true, handleJump: (alias) => skipTutorial(alias), handleAccept: () => handleTutorialNextStep(i)
    }))

  tutorialSteps.push(null)

  const [ActiveTutorialStep, setActiveTutorialStep] = useState(tutorialSteps[5])

  /* cierre de manejo de modales del dashboard */

  /* Manejo de columnas de tareas del dashboard */

  const handleNewTaskButtonClick = () => setActiveModal(ModalsController.tabs()[3])
  const showUserProfile = () => setActiveModal(ModalsController.tabs()[4])

  const AddNewColumn = {
    id: UUIDGenerator(),
    isGeneric: true,
    Component: AddNewColumnComponent,
    props: {
      handleClick: (activeTutorialStepName) => {
        props.addTaskColumn(DefaultNewColumn())
        if (activeTutorialStepName === 'firstStep') {
          setActiveTutorialStep(tutorialSteps[1])
          props.setActiveTutorialStep('secondStep')
        } else if (activeTutorialStepName === 'secondStep') {
          setActiveTutorialStep(tutorialSteps[1])
        }

        return 0
      }
    }
  }
  const DefaultNewColumn = () => {
    const newColumn = {
      name: 'NewColumn',
      isGeneric: true,
      id: UUIDGenerator(),
      Component: Column,
      props: {
        setColumnName: e => {
          newColumn.name = e.target.value
          props.setColumnName({ columnId: newColumn.id, columnName: e.target.value })
        },
        handleEvent: (type, activeTutorialStepName) => {
          if (type === 'onBlur') {
            if (activeTutorialStepName === 'secondStep') {
              setActiveTutorialStep(tutorialSteps[2])
              props.setActiveTutorialStep('thirdStep')
            }
          } else if (type === 'onClick') {
            if (activeTutorialStepName === 'secondStep' || activeTutorialStepName === 'thirdStep') {
              setActiveTutorialStep(tutorialSteps[5])
              props.setActiveTutorialStep('fourthStep')
            }
          } else {
            return 0
          }
        },
        handleNewTaskButtonClick,
        inputId: UUIDGenerator()
      }
    }

    return newColumn
  }

  /* Cierre de manejo de columnas de tareas del dashboard */

  useEffect(() => {
    getUserProfile()
  }, [])

  return (

    <div className='dashboard-container'>
      {isLoadingProfile
        ? <Loading LoadingBarText='Cargando...' />
        : <>
          <Menu
            username={props.userData.username || props.userData.alias}
            totalNewNotifications={props.userData.notSeenNotifications}
            addNewColumn={AddNewColumn.props.handleClick}
            addNewTask={handleNewTaskButtonClick}
            showUserProfile={showUserProfile}
            userPhoto={props.userData.profileImage}
          />
          <div className='task-container'>
            <div className='task-center'>
              {ActiveTutorialStep && <ActiveTutorialStep.Component onJump={ActiveTutorialStep.handleJump} onAccept={ActiveTutorialStep.handleAccept} />}
              {
                props.taskColumns.map((Column, i) => {
                  if (Column.isGeneric) { return <Column.Component key={Column.id} {...Column.props} getUserProfile={getUserProfile} name={Column.name} /> } else { return <Column.Component key={Column.id} id={Column.id} tasks={Column.tasks} name={Column.name} getUserProfile={getUserProfile} {...Column.props} /> }
                })
              }
            </div>
          </div>
          {ActiveModal.canShow && <ActiveModal.Component onSave={ActiveModal.onSave} {...ActiveModal.props} />}
          {
            /*
            <ProfileModal
              userName={props.userData.username || props.userData.alias}
              userEmail='hermanadeluis@gmail.com'
              userPassword='********'
            /> */
          }
          </>}
    </div>

  )
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = {
  logOutUser,
  setUserProfile,
  setActiveTutorialStep,
  setTaskColumns,
  addTaskColumn,
  setColumnName
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
