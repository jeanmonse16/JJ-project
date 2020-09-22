import React from 'react'
import '../../styles/header.css'

import logotype from '../../images/logo.png'

const Header = () => {
  return (
    <div className='header-container'>
      <div className='logo-container'>
        <img src={logotype} />
        <label><b>TaskMaster</b></label>
      </div>
      <div className='menu-container'>
        <div className='menu-border'>
          <a href='/welcome' className='menu-botton-left activated'>INICIO</a>
          <a href='/about' className='menu-botton'>ACERCA DE</a>
          <a href='/sign-in' className='menu-botton'>INGRESAR</a>
          <a href='/sign-up' className='menu-botton-right'>REGISTRARSE</a>
        </div>
      </div>
    </div>

  )
}

export default Header
