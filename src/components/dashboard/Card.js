import React from 'react'
import FileAttach from './FileAttach'

const Card = (props) =>{
    const {cardTitle, cardNumber, date, description} = props
    return(
        <div className="card-container">
            <div className="card-information">
                <div className="card-header">
                    <div className="card-title">
                        <p>{cardTitle}</p>
                    </div>
                    <p className="card-number">#{cardNumber}</p>
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