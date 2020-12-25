import React from 'react'
import Menu from '../components/dashboard/Menu'
import Column from '../components/dashboard/Column'
import NewTaskModal from '../components/dashboard/NewTaskModal'
import WelcomeModal from '../components/dashboard/WelcomeModal'
import Tutorial from '../components/dashboard/Tutorial'
import ProfileModal from '../components/dashboard/ProfileModal'
import Loader from '../components/Loader'

const LoadingPage = false 

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      {LoadingPage ? <Loader LoadingBarText="CARGANDO" color="#2bcbba"/> 
        : <>
      <Menu
        username='DictadorMarico69'
        notificationAcount='9'
      />
      <div className='task-container'>
        <div className='task-center'>
            <Column
              columnNumber='1'
            />
            <Column
              columnNumber='1'
            />
            <div className='new-column-container'>
              <div className='new-column-center'>
                <i className='new-column-icon fal fa-plus' />
                <p>Añadir nueva columna</p>
              </div>
            </div>
        </div>
      </div>
      <NewTaskModal />
      <WelcomeModal />
      <Tutorial />
      <ProfileModal
        userName='DictadorMarico69'
        userEmail='hermanadeluis@gmail.com'
        userPassword='********'
      />
      </>}
    </div>
  )
}

export default Dashboard
