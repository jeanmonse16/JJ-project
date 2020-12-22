import React from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { navigate } from '@reach/router'

import Arrow from '../assets/images/arrow.png'
import SecondArrow from '../assets/images/arrow-2.png'
import Check from '../assets/images/check.png'
import Shield from '../assets/images/shield.png'
import TaskMasterModeIcon from '../assets/images/taskmaster-mode-icon.png'
import ThirdSectionBg from '../assets/images/third-section-bg.jpg'

const Home = (props) => {
  const redirectToSignUp = event => {
    event.preventDefault()
    return navigate('/sign-up', { replace: true })
  }

  const scrollTo = yPosition => window.scrollTo(0, yPosition)
 /*

 */
  return (
    <div className='home-container'>
      <div className='first-section'>
        <Header />
        <div className='welcome-text'>
          <p>Organiza las actividades de tu vida</p>
          <div className='activities'>
            <img src={Arrow} />
            <label>Tareas</label>
            <img src={Arrow} />
            <label>Eventos</label>
            <img src={Arrow} />
            <label>Evaluaciones</label>
          </div>
          <p className='more'>Y muchas más</p>
          <p className='only-page'>En una sola pagina</p>
          <button onClick={redirectToSignUp}>¡Comienza Ahora!</button>
        </div>
        <div className='down' onClick={() => scrollTo(630)}>
          <i className='down-icon fas fa-angle-double-down' />
        </div>
      </div>
      <div className='second-section' id='secondSection'>
        <div className='left-section'>
          <div className='modes-container'>
            <div className='mode-box'>
              <div className='modes'>
                <div className='modes-icon-container'>
                  <img src={TaskMasterModeIcon} />
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
            <p>Visualiza todas</p>
            <p>tus actividades con</p>
            <p>los diferentes modos</p>
          </div>
        </div>
        <div className='down' onClick={() => scrollTo(1260)}>
          <i className='down-icon fas fa-angle-double-down' />
        </div>
      </div>
      <div className='third-section'>
        <ul>
          <li><img src={ThirdSectionBg} /></li>
          <li><img src={ThirdSectionBg} /></li>
        </ul>
          <p className='title'>Gestiona miles y miles de tareas</p>
          <p className='subtitle'>con tu cuenta de TaskMaster</p>
        <div className='down' onClick={() => scrollTo(1920)}>
          <i className='down-icon fas fa-angle-double-down' />
        </div>
      </div>
      <div className='four-section'>
        <div className='characteristic'>
          <div className='characteristic-img'>
            <img src={Check} />
          </div>
            <h1>CONFIABLE</h1>
            <p>Disponible en cualquier momento que lo necesites</p>
        </div>
        <div className='characteristic'>
          <div className='characteristic-img'>
            <img src={Shield} />
          </div>
            <h1>SEGURO</h1>
            <p>Toda tu información está asegurada y respaldada</p>
        </div>
        <div className='characteristic'>
          <div className='characteristic-img'>
            <img src={SecondArrow} />
          </div>
            <h1>FÁCIL DE USAR</h1>
            <p>Herramientas de gestion intuitivas que permiten un mayor control</p>
        </div>
        <div className='up' onClick={() => scrollTo(0)}>
          <i className='up-icon fas fa-angle-double-down' />
        </div>
      </div>
      <Footer />
    </div>
  )
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps, null)(Home)
