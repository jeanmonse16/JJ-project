import React from 'react'
import FileAttach from './FileAttach'

const Card = (props) => {
  const { cardTitle, cardNumber, date, description } = props
  return (
    <div className='card-container'>
      <div className='card-attach'>
        <FileAttach
          fileColor='#00bcd4'
          fileName='menudeopciones.jpg'
          fileIcon='file-attach-icon far fa-file-pdf'
        />
        <FileAttach
          fileColor='#26c6da'
          fileName='menudeopciones.jpg'
          fileIcon='file-attach-icon far fa-file-word'
        />
        <FileAttach
          fileColor='#4dd0e1'
          fileName='menudeopciones.jpg'
          fileIcon='file-attach-icon far fa-file-powerpoint'
        />
        <FileAttach
          fileColor='#80deea'
          fileName='menudeopciones.jpg'
          fileIcon='file-attach-icon far fa-file-pdf'
        />
      </div>
      <div className='card-information'>
        <div className='card-header'>
          <div className='card-title'>
            <p>{cardTitle}</p>
          </div>
          <p className='card-number'>#{cardNumber}</p>
        </div>
        <div className='card-description'>
          <p>{description}</p>
        </div>
        <div className='card-date'>
          <label>{date}</label>
        </div>
      </div>
    </div>
  )
}

{ /*
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
        <div className='card-description'>
          <p>{description}</p>
        </div>
        <div className='card-date'>
          <label>{date}</label>
        </div>
      </div>
    </div>
  )
}
*/ }

export default Card
