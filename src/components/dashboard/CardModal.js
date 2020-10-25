import React from 'react'
import FileUploaded from './FileUploaded'

const CardModal = () =>{
    return(
        <div className="dash-modal">
            <div className="dash-body">
                <i className="dash-exit-icon far fa-times"></i>
                <h2>Añadir una actividad</h2>
                <div className="top">
                    <input type="text" placeholder="TITULO"/>
                    <input type="text" placeholder="DD/MM/AAAA"/>
                </div>
                <div className="center">
                    <textarea className="description-area" placeholder="DESCRIPCION" />
                </div>
                <div className="files-container">
                    <div className="file-drop-container">
                        <div className="file-drop">
                            <div className="upload-file-button">
                                <i className="upload-file-icon fal fa-upload"></i>
                                <input type="file"/>
                            </div>
                            <p>Click en el boton de arriba para subir un archivo</p>
                            <p>Arrastra y suelta archivos para subirlos</p>
                        </div>
                    </div>
                    <div className="file-box">
                        <div className="file-slot">
                            <label className="empty">- VACIO -</label>
                            <FileUploaded 
                                fileColor = "#26c6da" 
                                fileUpIcon = "file-up-icon far fa-file-word"
                                fileUpName = "examendematematicas.jpg"
                            />
                        </div>
                        <div className="file-slot">
                            <label className="empty">- VACIO -</label>
                            <FileUploaded 
                                fileColor = "#4dd0e1" 
                                fileUpIcon = "file-up-icon far fa-file-powerpoint"
                                fileUpName = "examendematematicas.jpg"
                            />
                        </div>
                        <div className="file-slot">
                            <label className="empty">- VACIO -</label>
                            <FileUploaded 
                                fileColor = "#80deea" 
                                fileUpIcon = "file-up-icon far fa-file-pdf"
                                fileUpName = "examendematematicas.jpg"
                            />
                        </div>
                        <div className="file-slot">
                            <label className="empty">- VACIO -</label>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <button className="btn">DESCARTAR</button>
                    <button className="btn">GUARDAR</button>
                </div>

            </div>
        </div>
    )
}

export default CardModal