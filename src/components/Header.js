import React from 'react'
import { Link } from '@reach/router'
import { connect } from 'react-redux'
import '../assets/styles/header.css'

import logotype from '../assets/images/logo.png'

const Header = ({ activeTab }) => {
  const isActive = (tab) => activeTab === tab

  return (
    <div className='header-container'>
      <div className='logo-container'>
        <img src={logotype} />
        <label><b>TaskMaster</b></label>
      </div>
      <div className='menu-container'>
        <div className='menu-border'>
          <Link to='/welcome' className={`menu-botton-left ${isActive('INICIO') ? 'activated' : ''}`}>INICIO</Link>
          <Link to='/about-us' className={`menu-botton ${isActive('ACERCA DE') ? 'activated' : ''}`}>ACERCA DE</Link>
          <Link to='/sign-in' className='menu-botton'>INGRESAR</Link>
          <Link to='/sign-up' className='menu-botton-right'>REGISTRARSE</Link>
        </div>
      </div>
    </div>

  )
}

export default Header
