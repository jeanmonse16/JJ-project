import React from 'react'
import { connect } from 'react-redux'
import FileAttach from './FileAttach'
import TimeTooling from '../../_utils/TimeTooling'
import { getFromFilenamePath, fileColors, fileExtensions } from '../../_utils/FileUtilities'
import UUIDGenerator from '../../_utils/UUID_Generator'
import { setTaskToEdit } from '../../_actions'

const Card = (props) => {
  const { cardTitle, cardNumber, date, description, files, openTaskModal, taskToEdit, setTaskToEdit } = props
  const openFileInNewWindow = (fileUrl, title) => {
    const win = window.open()
    win.document.title = title
    win.document.write('<iframe src="' + fileUrl + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>')
  }
  const handleTaskEdition = () => {
    setTaskToEdit(taskToEdit)
    openTaskModal()
  }

  return (
    <div className='card-container'>
      {files.length
        ? <div className='card-attach'>
          {files.map((file, i) => (
            <FileAttach
              key={UUIDGenerator()}
              fileColor={fileColors[i]}
              fileName={getFromFilenamePath(file).filename}
              fileIcon={`file-attach-icon far fa-file-${fileExtensions[getFromFilenamePath(file).fileExtension]}`}
              handleClick={() => openFileInNewWindow(ENV.filesUrl + getFromFilenamePath(file).filename, getFromFilenamePath(file).filename)}
            />
          ))}
          </div>
        : null}
      <div className='card-information' style={{ width: files.length ? '250px' : '100%' }} onClick={handleTaskEdition}>
        <div className='card-header'>
            <div className="card-title-container">
                <p className='card-title' title={cardTitle}>{cardTitle}</p>
                <p className='card-number'>#{cardNumber}</p>
            </div>
            <div className="delete-btn-container">
                <i className="delete-btn fas fa-trash-alt" />
            </div>
        </div>
        <div className='card-description'>
          <p>{description}</p>
        </div>
        <div className='card-date'>
          <label>{TimeTooling.formatDate(new Date(date))}</label>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  setTaskToEdit
}

export default connect(null, mapDispatchToProps)(Card)
