import React from 'react'
import { Link } from '@reach/router'
import '../assets/styles/footer.css'

import SpainImage from '../assets/images/spain.png'
import UsaImage from '../assets/images/usa.png'

const Footer = () => {
  return (
    <div className='footer-section'>
      <div className='footer-container'>
        <div className='content'>
          <h1>TaskMaster</h1>
          <p>Siguenos en nuestras redes:</p>
          <div className='social-media'>
            <Link to='/'><i className='footer-icon fab fa-twitter' /></Link>
            <Link to='/'><i className='footer-icon fab fa-facebook-f' /></Link>
            <Link to='/'><i className='footer-icon fab fa-instagram' /></Link>
            <Link to='/'><i className='footer-icon fab fa-youtube' /></Link>
          </div>
          <div className="page-options">
            <div className='page-information'>
              <Link to='/'>Terminos y condiciones</Link>
              <Link to='/'>Preguntas frecuentes</Link>
              <Link to='/'>Privacidad</Link>
              <Link to='/'>Contactenos</Link>
            </div>
            <div className='change-languages'>
              <div className='language'>
                <p>English</p>
                <img src={UsaImage} />
              </div>
              <div className='language'>
                <p>Español</p>
                <img src={SpainImage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
