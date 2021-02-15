'use strict'
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import NotificationSection from './NotificationSection'
import Switcher from '../../_utils/Switcher'
import { logOutUser, setActiveTutorialStep } from '../../_actions'

import ProfileImg from '../../assets/images/profile-image.png'

const Menu = (props) => {
  const { username, totalNewNotifications, userPhoto = null } = props
  // const [submenusSwitcher, setSubmenusSwitcher] = useState(Switcher())
  const submenusSwitcher = Switcher()
  const submenus = ['generalMenu', 'notificationsMenu', 'accountMenu']

  const [isOnGeneralMenu, setIsOnGeneralMenu] = useState(submenusSwitcher.isOn('generalMenu'))
  const [isOnNotificationsMenu, setIsOnNotificationsMenu] = useState(submenusSwitcher.isOn('notificationsMenu'))
  const [isOnAccountMenu, setIsOnAccountMenu] = useState(submenusSwitcher.isOn('accountMenu'))

  const generalMenu = Switcher()
  const generalMenuSubmenus = ['modes', 'themes']
  const [isOnModesMenu, setIsOnModesMenu] = useState(generalMenu.isOn('modesMenu'))
  const [isOnThemesMenu, setIsOnThemesMenu] = useState(generalMenu.isOn('ThemesMenu'))

  const toggleSubmenu = (event, submenuName, generalMenuToggle = null) => {
    event.stopPropagation()
    event.nativeEvent.stopImmediatePropagation()

    if (generalMenuToggle) {
      return 0
    } else {
      submenus
        .filter(submenu => submenu !== submenuName)
        .map(submenu => submenusSwitcher.switchOff(submenu))

      submenusSwitcher.toggle(submenuName)
      setIsOnGeneralMenu(submenusSwitcher.isOn('generalMenu'))
      setIsOnNotificationsMenu(submenusSwitcher.isOn('notificationsMenu'))
      setIsOnAccountMenu(submenusSwitcher.isOn('accountMenu'))
    }
  }

  const handleGlobalClick = () => {
    submenusSwitcher.setItems({})
    setIsOnGeneralMenu(false)
    setIsOnNotificationsMenu(false)
    setIsOnAccountMenu(false)
  }

  const handleUserProfileButtonClick = (e) => {
    e.stopPropagation()
    e.nativeEvent.stopImmediatePropagation()
    props.showUserProfile()
  }

  const logOutUser = (event) => {
    event.stopPropagation()
    event.nativeEvent.stopImmediatePropagation()
    window.localStorage.removeItem('tutorialStepName')
    setActiveTutorialStep(null)
    window.localStorage.removeItem('token')
    props.logOutUser(false)
  }

  useEffect(() => {
    document.addEventListener('click', handleGlobalClick, false)

    return () => document.removeEventListener('click', handleGlobalClick, false)
  }, [])

  return (
    <div className='dashbord-menu'>
      <div className='top-container'>
        <div onClick={(e) => toggleSubmenu(e, 'generalMenu')}>
          <i className='hamburger-button far fa-bars' />
        </div>
        <div className='section'>
          <div className='notification-button' onClick={(e) => toggleSubmenu(e, 'notificationsMenu')}>
            {totalNewNotifications ? <div className='notification-number'>{totalNewNotifications}</div> : null}
            <i className='notification-icon far fa-bell' />
          </div>
          <div className='profile-box' onClick={(e) => toggleSubmenu(e, 'accountMenu')}>
            <label>{username}</label>
            <img src={userPhoto || ProfileImg} />
          </div>
        </div>
        {isOnGeneralMenu &&
          <div className='hamburger-menu-container' onClick={e => toggleSubmenu(e, 'none', 'modes')}>
            <ul className='hamburger-box'>
              <li>
                <label className='disable'><i className='hamburger-option-icon izquierda fal fa-sync-alt' />Modos<i className=' derecha fas fa-chevron-down' /></label>
                {isOnModesMenu &&
                  <ul>
                    <li><label>Por defecto</label></li>
                    <li><label>Calendario</label></li>
                    <li><label>Lista</label></li>
                    <li><label>Cartelera</label></li>
                  </ul>}
              </li>
              <li>
                <label className='disable'><i className='hamburger-option-icon izquierda fal fa-pencil-paintbrush' />Temas<i className='derecha fas fa-chevron-down' /></label>
                {isOnThemesMenu &&
                  <ul>
                    <li><label>Pre-establecidos</label></li>
                    <li><label>Populares</label></li>
                    <li><label>Personalizado</label></li>
                  </ul>}
              </li>
            </ul>
          </div>}
        {isOnNotificationsMenu &&
          <div className='notification-menu-container'>
            <NotificationSection
              notificationTitle='Tarea caducada'
              notificationDescriptionText='La tarea #112156 "Examen de matamaticas" se ha cadicad/a hace 12 horas'
              notificationIcon='notification-view-icon fas fa-exclamation-circle'
            />
            <NotificationSection
              notificationTitle='Reunion caducada'
              notificationDescriptionText='La Reunion #13165 "Asamblea" se ha cadicado/a hace 2 dias'
              notificationIcon='notification-view-icon fas fa-exclamation-circle'
            />
            <NotificationSection
              notificationTitle='Reunion caducada'
              notificationDescriptionText='La Reunion #13165 "Asamblea" se ha cadicado/a hace 2 dias'
              notificationIcon='notification-view-icon fas fa-exclamation-circle'
            />
            <NotificationSection
              notificationTitle='Reunion caducada'
              notificationDescriptionText='La Reunion #13165 "Asamblea" se ha cadicado/a hace 2 dias'
              notificationIcon='notification-view-icon fas fa-exclamation-circle'
            />
            <NotificationSection
              notificationTitle='Reunion caducada'
              notificationDescriptionText='La Reunion #13165 "Asamblea" se ha cadicado/a hace 2 dias'
              notificationIcon='notification-view-icon fas fa-exclamation-circle'
            />
            <NotificationSection
              notificationTitle='Reunion caducada'
              notificationDescriptionText='La Reunion #13165 "Asamblea" se ha cadicado/a hace 2 dias'
              notificationIcon='notification-view-icon fas fa-exclamation-circle'
            />
          </div>}
        {isOnAccountMenu &&
          <div className='profile-menu-container'>
            <label onClick={handleUserProfileButtonClick}><i className='profile-option-icon far fa-user' />Perfil</label>
            <label><i className='profile-option-icon fal fa-tools' />Soporte y Ayuda</label>
            <label className='disable'><i className='profile-option-icon far fa-moon-stars' />Modo oscuro</label>
            <label className='disable'><i className='profile-option-icon fas fa-chart-bar' />Estadísticas</label>
            <label onClick={logOutUser}><i className='profile-option-icon far fa-sign-out' />Cerrar sesión</label>
          </div>}

      </div>
      <div className='bottom-container'>
        <label id='add-btn'>Añadir
          <div className='options'>
            <label onClick={props.addNewTask}>Nueva tarea</label>
            <label onClick={props.addNewColumn}>Nueva columna</label>
          </div>
        </label>
        <label id='edit-btn'>Edición
          <div className='options'>
            <label className='disable'>Paso adelante</label>
            <label className='disable'>Paso atrás</label>
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
            <label className='disable'>Cambiar color</label>
          </div>
        </label>
        <label id='search-btn'>Buscar
          <div className='options'>
            <div className='search-container'>
              <input type='text' placeholder='Ingresa el título de la tarea' />
              <i className='search-icon far fa-search' />
            </div>
            <hr />
            <div className='search-container'>
              <input type='text' placeholder='Ingresa el título de la columna' />
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
            <label>Síguenos en Instagram</label>
            <label>Síguenos en YouTube</label>
            <label>Síguenos en Twitter</label>
            <hr />
            <label>Reportar problema</label>
            <hr />
            <label>Acerca de</label>
          </div>
        </label>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  logOutUser,
  setActiveTutorialStep
}

export default connect(null, mapDispatchToProps)(Menu)
