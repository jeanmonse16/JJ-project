import React from 'react'
import FileAttach from './FileAttach'

const Card = (props) =>{
    const {cardTitle, date, description} = props
    return(
        <div className="card-container">
            <div className="card-attach">
                <div className="new-attach">
                    <input type="file" />
                    <div className="new-title">
                        <p>Click para subir un archivo</p>
                    </div>
                    <div className="new-attach-button">
                        <i className="new-attach-icon far fa-plus"></i>
                    </div>
                </div>
                <FileAttach
                    fileColor = "#26c6da" 
                    fileName = "menudeopciones.jpg"
                    fileIcon = "file-attach-icon far fa-file-word"
                />
                <FileAttach 
                    fileColor = "#4dd0e1" 
                    fileName = "menudeopciones.jpg"
                    fileIcon = "file-attach-icon far fa-file-powerpoint"
                />
                <FileAttach 
                    fileColor = "#80deea" 
                    fileName = "menudeopciones.jpg"
                    fileIcon = "file-attach-icon far fa-file-pdf"
                />
            </div>
            <div className="card-information">
                <div className="card-header">
                    <label>{cardTitle}</label>
                </div>
                <div className="card-description">
                    <p>{description}</p>
                </div>
                <div className="card-date">
                    <label>{date}</label>
                </div>
            </div>
        </div>
    )
}

export default Card