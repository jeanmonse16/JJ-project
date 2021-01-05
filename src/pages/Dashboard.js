import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'
import Top from '../components/dashboard/Top'
import Menu from '../components/dashboard/Menu'
import Column from '../components/dashboard/Column'

import NewTaskModal from '../components/dashboard/NewTaskModal'
import WelcomeModal from '../components/dashboard/WelcomeModal'
import TutorialModal from '../components/dashboard/TutorialModal'
import ProfileModal from '../components/dashboard/ProfileModal'
import Loading from '../components/Loader'
import { Loader } from '../_utils/Loader'
import { getUserProfile as getUserProfileRequest } from '../_services/user_service'
import { logOutUser, setUserProfile } from '../_actions'
import RedirectTo from '../_utils/RedirectTo'
import TabController from '../_utils/TabController'

const Dashboard = (props) => {
  const profileLoader = Loader()
  const [isLoadingProfile, setIsLoadingProfile] = useState(profileLoader.isLoading())
  const getUserProfile = () => {
    profileLoader.loading()
    setIsLoadingProfile(profileLoader.isLoading())

    getUserProfileRequest(props.token)
      .then(response => {
        const userProfile = response.data.message.profile
        props.setUserProfile(userProfile)
        if (!userProfile.username && userProfile.firstTime) {
          setActiveModal(ModalsController.tabs()[1])
        } else if (userProfile.firstTime) {
          setActiveModal(ModalsController.tabs()[2])
        }
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.status === 401 ? 'La sesión expiró' : 'Algo salió mal'
        })
          .then(() => {
            window.localStorage.removeItem('token')
            props.logOutUser(false)
            RedirectTo('/sign-in')
          })
      })
      .finally(() => {
        profileLoader.loaded()
        setIsLoadingProfile(profileLoader.isLoading())
      })
  }

  const [ModalsController, setModalsController] = useState(
    TabController([
      { canShow: false },
      { name: 'welcome', Component: WelcomeModal, canShow: true, onSave: (i, updateProfile = true) => { setActiveModal(ModalsController.tabs()[i]); updateProfile && getUserProfile() } },
      { name: 'tutorial', Component: Tutorial, canShow: true, onSave: (i, updateProfile = true) => { setActiveModal(ModalsController.tabs()[i]); updateProfile && getUserProfile() } },
      { name: 'newTask', Component: NewTaskModal, canShow: true, onSave: (i, updateProfile = true) => { setActiveModal(ModalsController.tabs()[i]); updateProfile && getUserProfile() } },
      { name: 'profile', Component: ProfileModal, canShow: true, onSave: (i, updateProfile = true) => { setActiveModal(ModalsController.tabs()[i]); updateProfile && getUserProfile() } }
    ])
  )
  const [ActiveModal, setActiveModal] = useState(ModalsController.activeTab())

  useEffect(() => {
    getUserProfile()
  }, [])
  /* import TutorialStepOne from '../components/dashboard/tutorial-steps/TutorialStepOne'
import TutorialStepTwo from '../components/dashboard/tutorial-steps/TutorialStepTwo'
import TutorialStepThree from '../components/dashboard/tutorial-steps/TutorialStepThree'
import TutorialStepFive from '../components/dashboard/tutorial-steps/TutorialStepFive'

const LoadingPage = false */

  return (

    <div className='dashboard-container'>
      {isLoadingProfile
        ? <Loading LoadingBarText='Cargando...' />
        : <>
          <Top
            username={props.userData.username || props.userData.alias}
            totalNewNotifications={props.userData.notSeenNotifications}
          />
          <div className='principal-menu-container'>
            <label id='add-btn'>Añadir
              <div className='options'>
                <label>Nueva tarea</label>
                <label>Nueva Columna</label>
              </div>
            </label>
            <label id='edit-btn'>Edición
              <div className='options'>
                <label>Paso adelante</label>
                <label>Paso atrás</label>
                <hr />
                <label>Editar actividad</label>
                <hr />
                <label>Eliminar actividad</label>
                <label>Eliminar columna</label>
                <hr />
                <label>Mover actividad</label>
              </div>
            </label>
            <label id='select-btn'>Selección
              <div className='options'>
                <label>Seleccionar tarea</label>
                <label>Seleccionar columna</label>
                <hr />
                <label>Deseleccionar</label>
                <label>Volver a seleccionar</label>
              </div>
            </label>
            <label id='view-btn'>Vista
              <div className='options'>
                <label>Cambiar color</label>
              </div>
            </label>
            <label id='search-btn'>Buscar
              <div className='options'>
                <div className='search-container'>
                  <input type='text' placeholder='Ingresa el titulo de la tarea' />
                  <i className='search-icon far fa-search' />
                </div>
                <hr />
                <div className='search-container'>
                  <input type='text' placeholder='Ingresa el titulo de la columna' />
                  <i className='search-icon far fa-search' />
                </div>
              </div>
            </label>
            <label id='help-btn'>Ayuda
              <div className='options'>
                <label>Bienvenida</label>
                <label>Documentacion</label>
                <label>Trucos y consejos</label>
                <hr />
                <label>Siguenos en Instagram</label>
                <label>Siguenos en Youtube</label>
                <label>Siguenos en Twitter</label>
                <hr />
                <label>Reportar problema</label>
                <hr />
                <label>Acerca de</label>
              </div>
            </label>
          </div>
          <div className='task-container'>
            <div className='task-center'>
              {/*
              <TutorialStepFive />
              <Column
                columnNumber='1'
              /> */}
              <div className='new-column-container'>
                <div className='new-column-center'>
                  <i className='new-column-icon fal fa-plus' />
                  <p>Añadir nueva columna</p>
                </div>
              </div>
            </div>
          </div>
          {ActiveModal.canShow && <ActiveModal.Component onSave={ActiveModal.onSave} />}
          {/* (!props.userData.username && props.userData.firstTime) && <WelcomeModal /> */}
          <NewTaskModal />
          <ProfileModal
            userName={props.userData.username || props.userData.alias}
            userEmail='hermanadeluis@gmail.com'
            userPassword='********'
          />
        </>}
    </div>

  )
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = {
  logOutUser,
  setUserProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
