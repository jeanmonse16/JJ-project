import React from 'react'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'
import { navigate } from '@reach/router'

import '../styles/home.css'
import '../fontawesome-pro/all'

import Arrow from '../images/arrow.png'
import SecondArrow from '../images/arrow-2.png'
import Check from '../images/check.png'
import Shield from '../images/shield.png'

export default () => {
  const redirectToSignUp = event => {
    event.preventDefault()
    return navigate('/sign-up', { replace: true })
  }

  return (
    <div className='home-container'>
      <div className='first-section'>
        <Header />
        <div className='welcome'>
          <div className='welcome-text'>
            <p>Organiza las actividades de tu vida</p>
          </div>
          <div className='activities'>
            <img src={Arrow} />
            <label>Tareas</label>
            <img src={Arrow} />
            <label>Eventos</label>
            <img src={Arrow} />
            <label>Evaluaciones</label>
          </div>
          <div className='more'>
            <p>Y muchas más</p>
          </div>
          <div className='only-page'>
            <p>En una sola pagina</p>
          </div>
          <div className='start-now'>
            <button onClick={redirectToSignUp}>¡Comienza Ahora!</button>
          </div>
        </div>
        <div className='down'>
          <i className='down-icon fas fa-angle-double-down' />
        </div>
      </div>
      <div className='second-section'>
        <div className='left-section'>
          <div className='modes-container'>
            <div className='mode-box'>
              <div className='modes'>
                <div className='modes-icon-container'>
                  <i className='modes-icon fas fa-angle-double-down' />
                </div>
                <div className='modes-text'>
                  <p>MODO TASKMASTER</p>
                </div>
              </div>
            </div>
            <div className='mode-box'>
              <div className='modes'>
                <div className='modes-icon-container'>
                  <i className='modes-icon fas fa-calendar-alt' />
                </div>
                <div className='modes-text'>
                  <p>MODO CALENDARIO</p>
                </div>
              </div>
            </div>
            <div className='mode-box'>
              <div className='modes bottom'>
                <div className='modes-icon-container'>
                  <i className='modes-icon fas fa-list-ol' />
                </div>
                <div className='modes-text'>
                  <p>MODO LISTA</p>
                </div>
              </div>
            </div>
            <div className='mode-box'>
              <div className='modes bottom'>
                <div className='modes-icon-container'>
                  <i className='modes-icon fas fa-chalkboard' />
                </div>
                <div className='modes-text'>
                  <p>MODO CARTELERA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className='middle-section' />
        <div className='right-section'>
          <div className='right-section-text'>
            <p><label className='vis'>Visualiza</label> todas</p>
            <p>tus <label className='act'>actividades</label> con</p>
            <p>los diferentes <label className='mod'>modos</label></p>
          </div>
        </div>
        <div className='down'>
          <i className='down-icon fas fa-angle-double-down' />
        </div>
      </div>
      <div className='third-section'>
        <div className='third-section-text'>
          <p className='title'>Gestiona miles y miles de tareas</p>
          <p className='subtitle'>con tu cuenta de TaskMaster</p>
        </div>
        <div className='down'>
          <i className='down-icon fas fa-angle-double-down' />
        </div>
      </div>
      <div className='four-section'>
        <div className='characteristic-container'>
          <div className='characteristic-box'>
            <div className='characteristic-section'>
              <div className='characteristic'>
                <div className='characteristic-img'>
                  <img src={Check} />
                </div>
                <div className='characteristic-text'>
                  <h1>CONFIABLE</h1>
                  <p>Disponible en cualquier momento que lo necesites</p>
                </div>
              </div>
            </div>
            <div className='characteristic-section'>
              <div className='characteristic'>
                <div className='characteristic-img'>
                  <img src={Shield} />
                </div>
                <div className='characteristic-text'>
                  <h1>SEGURO</h1>
                  <p>toda tu información está asegurada y respaldada</p>
                </div>
              </div>
            </div>
            <div className='characteristic-section'>
              <div className='characteristic'>
                <div className='characteristic-img'>
                  <img src={SecondArrow} />
                </div>
                <div className='characteristic-text'>
                  <h1>FÁCIL DE USAR</h1>
                  <p>Herramientas de gestion intuitivas que permiten un mayor control</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='down'>
          <i className='down-icon fas fa-angle-double-down' />
        </div>
      </div>
      <Footer />
    </div>
  )
}
