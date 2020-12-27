import React, { useState } from 'react'
import NotificationSection from './NotificationSection'

import ProfileImg from '../../assets/images/profile-image.png'

const Menu = (props) =>{
    const {username, notificationAcount} = props
    const [deploy, setDeploy] = useState(true)
    const className = deploy ? "none" : ""

    return(
        <div className="dashbord-menu">
            <div className="top-container">
                <i className="hamburger-button far fa-bars"></i>
                <div className="section">
                    <div className="notification-button" onClick={() => setDeploy(!deploy)}>
                        <div className="notification-number">{notificationAcount}</div>
                        <i className="notification-icon far fa-bell"></i>
                    </div>
                    <div className="profile-box">
                        <label>{username}</label>
                        <img src={ProfileImg}/>
                    </div>
                </div>
                <div className="hamburger-menu-container">
                    <ul className="hamburger-box">
                        <li>
                            <label className="disable"><i className="hamburger-option-icon izquierda fal fa-sync-alt"></i>Modos<i className=" derecha fas fa-chevron-down"></i></label>
                            <ul>
                                <li><label>Por defecto</label></li>
                                <li><label>Calendario</label></li>
                                <li><label>Lista</label></li>
                                <li><label>Cartelera</label></li>
                            </ul>    
                        </li>
                        <li>
                            <label className="disable"><i className="hamburger-option-icon izquierda fal fa-pencil-paintbrush"></i>Temas<i className="derecha fas fa-chevron-down"></i></label>
                            <ul>
                                <li><label>Pre-establecidos</label></li>
                                <li><label>Populares</label></li>
                                <li><label>Personalizado</label></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="notification-menu-container" style={{display: `${className}`}}>
                    <NotificationSection 
                        notificationTitle="Tarea caducada"   
                        notificationDescriptionText='La tarea #112156 "Examen de matamaticas" se ha cadicad/a hace 12 horas'
                        notificationIcon="notification-view-icon fas fa-exclamation-circle"
                    />
                    <NotificationSection 
                        notificationTitle="Reunion caducada"   
                        notificationDescriptionText='La Reunion #13165 "Asamblea" se ha cadicado/a hace 2 dias'
                        notificationIcon="notification-view-icon fas fa-exclamation-circle"
                    />
                    <NotificationSection 
                        notificationTitle="Reunion caducada"   
                        notificationDescriptionText='La Reunion #13165 "Asamblea" se ha cadicado/a hace 2 dias'
                        notificationIcon="notification-view-icon fas fa-exclamation-circle"
                    />
                    <NotificationSection 
                        notificationTitle="Reunion caducada"   
                        notificationDescriptionText='La Reunion #13165 "Asamblea" se ha cadicado/a hace 2 dias'
                        notificationIcon="notification-view-icon fas fa-exclamation-circle"
                    />
                    <NotificationSection 
                        notificationTitle="Reunion caducada"   
                        notificationDescriptionText='La Reunion #13165 "Asamblea" se ha cadicado/a hace 2 dias'
                        notificationIcon="notification-view-icon fas fa-exclamation-circle"
                    />
                    <NotificationSection 
                        notificationTitle="Reunion caducada"   
                        notificationDescriptionText='La Reunion #13165 "Asamblea" se ha cadicado/a hace 2 dias'
                        notificationIcon="notification-view-icon fas fa-exclamation-circle"
                    />
                </div>
                <div className="profile-menu-container">
                    <label><i className="profile-option-icon far fa-user"></i>Perfil</label>
                    <label><i className="profile-option-icon fal fa-tools"></i>Soporte y Ayuda</label>
                    <label className="disable"><i className="profile-option-icon far fa-moon-stars"></i>Modo oscuro</label>
                    <label className="disable"><i className="profile-option-icon fas fa-chart-bar"></i>Estadísticas</label>
                    <label><i className="profile-option-icon far fa-sign-out"></i>Cerrar sesión</label>
                </div>
            </div>
            <div className='bottom-container'>
                <label id='add-btn'>Añadir
                <div className='options'>
                    <label>Nueva tarea</label>
                    <label>Nueva columna</label>
                </div>
                </label>
                <label id='edit-btn'>Edición
                <div className='options'>
                    <label className="disable">Paso adelante</label>
                    <label className="disable">Paso atrás</label>
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
                    <label className="disable">Cambiar color</label>
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

export default Menu