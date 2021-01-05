import React from 'react'
import { Link } from '@reach/router'
import Header from '../components/Header'
import Footer from '../components/Footer'

import FrontendDeveloper from '../assets/images/Joalbert_Milano.jpg'
import BackendDeveloper from '../assets/images/Luis_Monserrate.jpg'

export default () => {
  return (
    <div className='about-container'>
      <div className='about-top'>
        <Header />
          <p>Conoce mas acerca de TaskMaster</p>
        <div className="wave"></div>
      </div>
      <div className='about-text-section'>
        <div className='about-content'>
          <h1>SOBRE TASKMASTER</h1>
          <p>TaskMaster es un organizador de tareas el cual te permite gestionar de forma rápida y sencilla todas las tareas, eventos, evaluaciones y muchas más actividades que estés por realizar, con la finalidad de que puedas administrar tu tiempo y así llevar un mayor control. Brindándote a ti y a todos sus usuarios un entorno seguro y confiable de forma gratuita, en donde dispones de diversas herramientas y utilidades que te permiten realizar esta gestión en cualquier momento y en cualquier lugar, de una manera fácil y cómoda.</p>
          <br />
          <p>Este organizador te brinda un entorno amigable de forma gratuita donde puedes subir todas las actividades que desees de forma fácil y segura, permitiéndote gestionarlas y organizarlas según tus criterios y necesidades. Nuestro organizador de tareas cuenta con muchas herramientas y utilidades de fácil acceso e intuitivas de usar, que te otorgan un mayor control de como deseas organizar las actividades, así como otorgarte la capacidad de elegir como visualizarlas, gracias a los cuatro diferentes modos disponible, los cuales son el modo TaskMaster, modo Calendario, modo Lista y el modo Cartelera.</p>
          <br />
          <p>Tu organizador es completamente personalizable, otorgándote la capacidad de adaptarse a tus gustos y preferencias, por lo que tienes la opción de cambiar el aspecto de todos los elementos del organizador, o de solo algunos según lo prefieras, con diferentes diseños y colores elegidos de forma predeterminada, o directamente escogidos por ti, esto gracias al apartado de temas incorporado dentro de la aplicación.</p>
          <br />
          <p>Además, TaskMaster cuenta con un aportando estadístico, donde se muestran todo tipo de información relevante acerca de las actividades realizadas o por hacer que tengas en tu organizador, otorgando una vista más clara y precisa, con números y gráficos acerca de dichas actividades.</p>
          <h2>Elaborado por J&J ENTERPRISE</h2>
          <h3>DESARROLLADORES</h3>
          <div className="developers-section">
              <div className="developers-card">
                <div className="photo-container">
                    <p>FRONTEND DEVELOPER</p>
                    <img src={FrontendDeveloper}/>
                </div>
                <div className="description-container">
                  <p>Joalbert Milano</p>
                  <div className="social">
                    <Link to='/'><i className='social-icon fab fa-instagram' />Joalbert_Milano</Link>
                    <Link to='/'><i className='social-icon fab fa-github' />JoalbertMilano</Link>
                  </div>
                </div>
              </div>
              <div className="developers-card">
                <div className="photo-container">
                      <p>BACKEND DEVELOPER</p>
                      <img src={BackendDeveloper}/>
                  </div>
                  <div className="description-container">
                    <p>Luis Monserrate</p>
                    <div className="social">
                      <Link to='/'><i className='social-icon fab fa-instagram' />Jeanpier.monse</Link>
                      <Link to='/'><i className='social-icon fab fa-github' />Jeanmonse16</Link>
                    </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
