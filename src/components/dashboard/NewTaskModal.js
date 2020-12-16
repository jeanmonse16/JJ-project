import React from 'react'
import ButtonGroup from '../ButtonGroup'
import FileUploaded from './FileUploaded'

const NewTaskModal = () =>{
    return(
        <div className="new-task-modal">
            <div className="new-task-modal-body">
                <i className="new-task-modal-exit-icon far fa-times"></i>
                <h2>AÑADIR UNA ACTIVIDAD</h2>
                <div className="new-task-modal-top">
                    <input type="text" placeholder="TITULO"/>
                    <input type="text" placeholder="DD/MM/AAAA"/>
                </div>
                <div className="description-container">
                    <textarea className="description-area" placeholder="DESCRIPCION" />
                </div>
                <div className="select-column-container">
                    <select className="select-column">
                        <option>ELIGE UNA COLUMNA DONDE GUARDAR LA ACTIVIDAD</option>
                        <option>Columna numero 1 - Tarea</option>
                        <option>Columna numero 2 - Juegos</option>
                    </select>
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
                                fileColor = "#26c6da" 
                                fileUpIcon = "file-up-icon far fa-file-word"
                                fileUpName = "examendematematicsdsdsdsdsddsdsas.jpg"
                            />
                        </div>
                        <div className="file-slot">
                            <label className="empty">- VACIO -</label>
                        </div>
                        <div className="file-slot">
                            <label className="empty">- VACIO -</label>
                        </div>
                    </div>
                </div>
                <div className="new-task-modal-bottom">
                    <ButtonGroup 
                        buttonText="DESCARTAR"
                    />
                    <ButtonGroup 
                        buttonText="GUARDAR"
                    />
                </div>

            </div>
        </div>
    )
}

export default NewTaskModal