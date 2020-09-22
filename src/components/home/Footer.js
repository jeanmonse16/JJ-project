import React from 'react'
import '../../styles/footer.css'

const Footer = () =>{
    return(
        <div className="footer-section">
            <div className="footer-container">
                <div className="content">
                    <h1>TaskMaster</h1>
                    <p>Siguenos en nuestras redes:</p>
                    <div className="social-media">
                        <a href="#"><i className="footer-icon fab fa-twitter"></i></a>
                        <a href="#"><i className="footer-icon fab fa-facebook-f"></i></a>
                        <a href="#"><i className="footer-icon fab fa-instagram"></i></a>
                        <a href="#"><i className="footer-icon fab fa-youtube"></i></a>
                    </div>
                    <div className="options">
                        <a href="#">Terminos y condiciones</a>
                        <a href="#">Preguntas frecuentes</a>
                        <a href="#">Privacidad</a>
                        <a href="#">Contactenos</a>
                    </div>
                    <div className="change-languages">
                        <div className="language">
                            <div className="languages-name"><p>English</p></div>
                            <div className="languages-img"><div className="usa"/></div>
                        </div>
                        <div className="language">
                            <div className="languages-name"><p>Español</p></div>
                            <div className="languages-img"><div className="spain"/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer