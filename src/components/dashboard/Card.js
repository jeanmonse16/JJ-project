import React from 'react'
import FilesAttach from '../dashboard/FileAttach'

const Card = (props) =>{
    const {cardTitle, date, description} = props
    return(
        <div className="card-container">
            <div className="card-header">
                <label>{cardTitle}</label>
                <i className="maxi-button far fa-window-maximize"></i>
                <i className="mini-button fas fa-minus"></i>
            </div>
            <div className="card-date">
                <label>{date}</label>
            </div>
            <div className="card-description">
                <p>{description}</p>
            </div>
            <div className="card-attach">
                <div className="new-attach">
                    <i className="new-attach-button fas fa-plus"></i>
                </div>
                <FilesAttach />
            </div>
        </div>
    )
}

export default Card