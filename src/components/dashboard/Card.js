import React from 'react'
import { connect } from 'react-redux'
import FileAttach from './FileAttach'
import TimeTooling from '../../_utils/TimeTooling'
import { getFromFilenamePath, fileColors, fileExtensions } from '../../_utils/FileUtilities'
import UUIDGenerator from '../../_utils/UUID_Generator'
import { setTaskToEdit } from '../../_actions'
import { removeTask } from '../../_services/index'
import Spinner from '../../_utils/Spinner'

const Loader = () => {
  const [isLoading, setIsLoading] = React.useState(false)

  return {
    isOn: () => isLoading,
    on: () => setIsLoading(true),
    off: () => setIsLoading(false)
  }
}

const Card = (props) => {
  const { getUserProfile, cardTitle, cardNumber, date, description, files, openTaskModal, taskToEdit, setTaskToEdit, token } = props
  const removalLoader = Loader()
  const openFileInNewWindow = (fileUrl, title) => {
    const win = window.open()
    win.document.title = title
    win.document.write('<iframe src="' + fileUrl + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>')
  }
  const handleTaskEdition = () => {
    setTaskToEdit(taskToEdit)
    openTaskModal()
  }
  const handleTaskRemoval = (e) => {
    e.stopPropagation()
    e.nativeEvent.stopImmediatePropagation()
    removalLoader.on()
    return removeTask(localStorage.getItem('token'), taskToEdit.task_id)
      .then(() => {
        return getUserProfile(false)
      })
      .catch(error => {
        getUserProfile(false)
        console.log(error)
      })
  }

  React.useEffect(() => {
    return () => {
      removalLoader.off()
    }
  }, [])

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
              handleClick={() => openFileInNewWindow(file, getFromFilenamePath(file).filename)}
            />
          ))}
          </div>
        : null}
      <div className='card-information' style={{ width: files.length ? '250px' : '100%' }} onClick={handleTaskEdition}>
        <div className='card-header'>
          <div className='card-title-container'>
            <p className='card-title' title={cardTitle}>{cardTitle}</p>
            <p className='card-number'>#{cardNumber}</p>
          </div>
          {
            removalLoader.isOn()
              ? <div style={{ marginTop: '10px', marginRight: '10px' }}> <Spinner color='red' width={20} height={20} /> </div>
              : <div className='delete-btn-container' onClick={handleTaskRemoval}>
                <svg className='svg-inline--fa fa-trash-alt fa-w-14 delete-btn' ariaHidden='true' focusable='false' dataPrefix='fas' data-icon='trash-alt' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
                  <path fill='currentColor' d='M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z' />
                </svg>
              </div>
          }
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
