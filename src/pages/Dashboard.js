import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'
import Top from '../components/dashboard/Top'
import Menu from '../components/dashboard/Menu'
import Column from '../components/dashboard/Column'

import NewTaskModal from '../components/dashboard/NewTaskModal'
import WelcomeModal from '../components/dashboard/WelcomeModal'
import Tutorial from '../components/dashboard/Tutorial'
import TutorialModal from '../components/dashboard/TutorialModal'
import ProfileModal from '../components/dashboard/ProfileModal'
import Loading from '../components/Loader'
import { Loader } from '../_utils/Loader'
import { getUserProfile as getUserProfileRequest } from '../_services/user_service'
import { logOutUser, setUserProfile } from '../_actions'
import RedirectTo from '../_utils/RedirectTo'
import TabController from '../_utils/TabController'
import TutorialStepOne from '../components/dashboard/tutorial-steps/TutorialStepOne'
import TutorialStepTwo from '../components/dashboard/tutorial-steps/TutorialStepTwo'
import TutorialStepThree from '../components/dashboard/tutorial-steps/TutorialStepThree'
import TutorialStepFive from '../components/dashboard/tutorial-steps/TutorialStepFive'

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
      { name: 'tutorial', Component: TutorialModal, canShow: true, onSave: (i, updateProfile = true) => { setActiveModal(ModalsController.tabs()[i]); updateProfile && getUserProfile() } },
      { name: 'newTask', Component: NewTaskModal, canShow: true, onSave: (i, updateProfile = true) => { setActiveModal(ModalsController.tabs()[i]); updateProfile && getUserProfile() } },
      { name: 'profile', Component: ProfileModal, canShow: true, onSave: (i, updateProfile = true) => { setActiveModal(ModalsController.tabs()[i]); updateProfile && getUserProfile() } }
    ])
  )
  const [ActiveModal, setActiveModal] = useState(ModalsController.activeTab())

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
          />
          <div className='task-container'>
            <div className='task-center'>
              {/*
                <TutorialStepOne />
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
          {
          /*
          <NewTaskModal />
          <ProfileModal
            userName={props.userData.username || props.userData.alias}
            userEmail='hermanadeluis@gmail.com'
            userPassword='********'
          /> */}
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
