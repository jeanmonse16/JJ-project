import React from 'react'
import FileAttach from './FileAttach'

const Card = (props) =>{
    const {cardTitle, date, description} = props
    return(
        <div className="card-container">
            <div className="card-attach">
                <div className="new-attach">
                    <div className="new-title">
                        <p>Click para añadir un archivo</p>
                    </div>
                    <div className="new-attach-button">
                        <i className="new-attach-icon fas fa-plus"></i>
                    </div>
                </div>
                <FileAttach
                    fileColor = "#00bcd4" 
                    fileName = "menudeopciones.jpg"
                    fileIcon = "file-attach-icon far fa-file-word"
                />
                <FileAttach 
                    fileColor = "#26c6da" 
                    fileName = "menudeopciones.jpg"
                    fileIcon = "file-attach-icon far fa-file-powerpoint"
                />
                <FileAttach 
                    fileColor = "#4dd0e1" 
                    fileName = "menudeopciones.jpg"
                    fileIcon = "file-attach-icon far fa-file-pdf"
                />
                <FileAttach 
                    fileColor = "#80deea" 
                    fileName = "menudeopciones.jpg"
                    fileIcon = "file-attach-icon far fa-file-image"
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