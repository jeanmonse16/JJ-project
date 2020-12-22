import React from 'react'
import { Link } from '@reach/router'
import '../assets/styles/footer.css'

import SpainImage from '../assets/images/spain.png'
import UsaImage from '../assets/images/usa.png'

const Footer = () => {
  return (
    <div className='footer-section'>
      <div className="wave"></div>
      <div className='footer-container'>
        <div className='content'>
          <h1>TaskMaster</h1>
          <p>Siguenos en nuestras redes:</p>
          <div className='social-media'>
            <Link to='/'><i className='footer-icon twitter fab fa-twitter' /></Link>
            <Link to='/'><i className='footer-icon facebook fab fa-facebook-f' /></Link>
            <Link to='/'><i className='footer-icon instagram fab fa-instagram' /></Link>
            <Link to='/'><i className='footer-icon youtube fab fa-youtube' /></Link>
          </div>
          <div className="page-options">
            <div className='page-information'>
              <Link to='/'>Terminos y condiciones<div className="underline"></div></Link>
              <Link to='/'>Preguntas frecuentes<div className="underline"></div></Link>
              <Link to='/'>Privacidad<div className="underline"></div></Link>
              <Link to='/'>Contactenos<div className="underline"></div></Link>
            </div>
            <div className='change-languages'>
              <div className='language'>
                <p>English<div className="underline"></div></p>
                <img src={UsaImage} />
              </div>
              <div className='language'>
                <p>Español<div className="underline"></div></p>
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
