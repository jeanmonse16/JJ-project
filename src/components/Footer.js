import React from 'react'
import { Link } from '@reach/router'
import '../assets/styles/footer.css'

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
          <div className='options'>
            <Link to='/'>Terminos y condiciones</Link>
            <Link to='/'>Preguntas frecuentes</Link>
            <Link to='/'>Privacidad</Link>
            <Link to='/'>Contactenos</Link>
          </div>
          <div className='change-languages'>
            <div className='language'>
              <div className='languages-name'><p>English</p></div>
              <div className='languages-img'><div className='usa' /></div>
            </div>
            <div className='language'>
              <div className='languages-name'><p>Español</p></div>
              <div className='languages-img'><div className='spain' /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
