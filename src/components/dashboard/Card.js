import React from 'react'
import FilesAttach from '../dashboard/FileAttach'

const Card = (props) =>{
    const {cardTitle, date, description} = props
    return(
        <div className="card-container">
            <div className="card-header">
                <label>{cardTitle}</label>
                <i className="maxi-button far fa-sign-out-alt"></i>
                <i className="mini-button far fa-sign-out-alt"></i>
            </div>
            <div className="card-date">
                <label>{date}</label>
            </div>
            <div className="card-description">
                <p>{description}</p>   
            </div>
            <div className="card-attach">
                <div className="new-attach">
                    <i className="new-attach-button far fa-sign-out-alt"></i>
                </div>
                <FilesAttach />
            </div>
        </div>
    )
}

export default Card