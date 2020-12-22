import React, { useState } from 'react'
import { connect } from 'react-redux'
import NotificationSection from './NotificationSection'

import ProfileImg from '../../assets/images/profile-image.png'

const Top = (props) => {
  const { username, notificationAcount } = props
  const [deploy, setDeploy] = useState(true)
  const className = deploy ? 'none' : ''

  return (
    <div className='dashboard-top-container'>
      <i className='hamburger-button far fa-bars' />
      <div className='section'>
        <div className='notification-button' onClick={() => setDeploy(!deploy)}>
          <div className='notification-number'>{notificationAcount}</div>
          <i className='notification-icon far fa-bell' />
        </div>
        <div className='profile-box'>
          <label>{username}</label>
          <img src={ProfileImg} />
        </div>
      </div>
      <div className='hamburger-menu-container'>
        <ul className='hamburger-box'>
          <li>
            <label><i className='hamburger-option-icon izquierda fal fa-sync-alt' />Modos<i className=' derecha fas fa-chevron-down' /></label>
            <ul>
              <li><label>Por defecto</label></li>
              <li><label>Calendario</label></li>
              <li><label>Lista</label></li>
              <li><label>Cartelera</label></li>
            </ul>
          </li>
          <li>
            <label><i className='hamburger-option-icon izquierda fal fa-pencil-paintbrush' />Temas<i className='derecha fas fa-chevron-down' /></label>
            <ul>
              <li><label>Pre-establecidos</label></li>
              <li><label>Populares</label></li>
              <li><label>Personalizado</label></li>
            </ul>
          </li>
        </ul>
      </div>
      <div className='notification-menu-container' style={{ display: `${className}` }}>
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
      </div>
      <div className='profile-menu-container'>
        <label><i className='profile-option-icon far fa-user' />Perfil</label>
        <label><i className='profile-option-icon fal fa-tools' />Soporte y Ayuda</label>
        <label><i className='profile-option-icon far fa-moon-stars' />Modo oscuro</label>
        <label><i className='profile-option-icon fas fa-chart-bar' />Estadisticas</label>
        <label><i className='profile-option-icon far fa-sign-out' />Cerrar seccion</label>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps, null)(Top)
