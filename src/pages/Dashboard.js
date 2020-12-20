import React from 'react'
import Top from '../components/dashboard/Top'
import Column from '../components/dashboard/Column'
import NewTaskModal from '../components/dashboard/NewTaskModal'
import WelcomeModal from '../components/dashboard/welcomeModal'
import Tutorial from '../components/dashboard/Tutorial'
import ProfileModal from '../components/dashboard/ProfileModal'
import Loader from '../components/Loader'

const LoadingPage = true

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      {LoadingPage ? <Loader LoadingBarText="CARGANDO" color="#2bcbba"/> 
        : <>
      <Top
        username='DictadorMarico69'
        notificationAcount='9'
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
