import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import ButtonGroup from '../ButtonGroup'
import FileUploaded from './FileUploaded'
import { Loader } from '../../_utils/Loader'
import { createTask as createTaskRequest, updateTask as updateTaskRequest, uploadFiles as uploadFilesRequest } from '../../_services'
import { getFromFilenamePath, fileColors, fileExtensions } from '../../_utils/FileUtilities'
import UUIDGenerator from '../../_utils/UUID_Generator'
import { setTaskToEdit } from '../../_actions'

import TutorialStepFour from './tutorial-steps/TutorialStepFour'
import '../../assets/styles/inputGroup.css'

const TaskModal = (props) => {
  const { taskToEdit, columnsForTask, token, userAlias, close, setTaskToEdit } = props
  const [showTutorialStep, setShowTutorialStep] = useState(false)
  const handleSkipTutorial = (alias) => {
    setShowTutorialStep(false)
    props.handleSkipTutorial(alias)
  }
  const handleTutorialNextStep = () => {
    setShowTutorialStep(false)
    props.handleTutorialNextStep()
  }
  const handleActiveFifthTutorial = () => {
    setShowTutorialStep(false)
    props.handleActiveFifthTutorial()
  }

  const taskLoader = Loader()
  const [isLoadingTask, setIsLoadingTask] = useState(taskLoader.isLoading())
  const [task, setTask] = useState(() => {
    const taskFiles = Object.entries(taskToEdit).length
      ? taskToEdit.files.map(file => ({
        name: getFromFilenamePath(file).filename,
        src: null,
        fileObject: null
      }))
      : []

    while (taskFiles.length < 4) {
      taskFiles.push({ empty: true })
    }

    return Object.entries(taskToEdit).length
      ? {
        ...taskToEdit,
        date: `${taskToEdit.expires_at.slice(0, 4)}-${taskToEdit.expires_at.slice(5, 7)}-${taskToEdit.expires_at.slice(8, 10)}`,
        columnsForTask: columnsForTask,
        selectedColumn: taskToEdit.columnName,
        files: taskFiles
      }
      : {
        title: '',
        date: 'yyyy/mm/dd',
        description: '',
        columnsForTask: columnsForTask,
        selectedColumn: null,
        files: taskFiles
      }
  })

  const handleInputChange = e => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    })
  }
  const imageReader = (file) => {
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = e => {
      const newFile = {
        name: file.name,
        src: e.target.result,
        fileObject: file
      }
      const newFileList = task.files

      if (newFileList.findIndex((file) => file.empty) > -1) {
        newFileList[newFileList.findIndex((file) => file.empty)] = newFile
      }

      setTask({
        ...task,
        files: newFileList
      })
    }
  }
  const preventDefaults = e => {
    e.preventDefault() // Evita que el browser abra el archivo dropeado
    e.stopPropagation()
  }
  const handleFilesUpload = e => {
    preventDefaults(e)
    Object.keys(e.target.files)
      .map(fileIndex => imageReader(e.target.files[fileIndex]))
  }
  const removeTaskFile = (fileIndex) => {
    const newFileList = task.files
    newFileList[fileIndex] = { empty: true }

    setTask({
      ...task,
      files: newFileList
    })
  }

  const canSaveTask = !!((task.title && task.date && task.description && task.selectedColumn))
  const requestHandler = {
    onSuccess: () => {
      props.getUserProfile(false)
        .finally(() => {
          close()
          taskLoader.loaded()
          setIsLoadingTask(taskLoader.isLoading())
          if (props.activeTutorialStepName === 'fourthStep' || props.activeTutorialStepName === 'fifthStep') {
            handleTutorialNextStep()
          }
        })
    },
    onError: error => {
      console.error(error)
      taskLoader.loaded()
      setIsLoadingTask(taskLoader.isLoading())
      if (props.activeTutorialStepName === 'fourthStep' || props.activeTutorialStepName === 'fifthStep') {
        handleTutorialNextStep()
      }
    },
    finally: () => {
      setTaskToEdit({})
    }
  }
  const createOrUpdateTask = () => {
    taskLoader.loading()
    setIsLoadingTask(taskLoader.isLoading())

    const formData = new FormData()
    if (!Object.entries(taskToEdit).length) {
      formData.append('userAlias', userAlias)
      formData.append('title', task.title)
      formData.append('description', task.description)
      formData.append('columnName', task.selectedColumn)
      formData.append('state', 'pending')
      formData.append('expires_at', Date.parse(new Date(task.date.replace(/-/g, '/'))))
      task.files
        .filter(file => !file.empty)
        .map(file => formData.append('files', file.fileObject))

      return createTaskRequest(token, formData)
        .then(requestHandler.onSuccess)
        .catch(requestHandler.onError)
        .finally(requestHandler.finally)
    } else {
      const taskToSend = {
        id: task.task_id,
        title: task.title,
        description: task.description,
        expires_at: task.expires_at,
        columnName: task.selectedColumn,
        state: 'pending',
        files: task.files.filter(file => !file.empty).map(file => file.name)
      }
      task.files
        .filter(file => !file.empty)
        .map(file => file.fileObject && formData.append('files', file.fileObject))
      const canUploadFiles = !!task.files.filter(file => !file.empty && file.fileObject).length

      return Promise.all([updateTaskRequest(token, taskToSend), uploadFilesRequest(token, formData, canUploadFiles)])
        .then(requestHandler.onSuccess)
        .catch(requestHandler.onError)
        .finally(requestHandler.finally)
    }
  }

  useEffect(() => {
    if (props.activeTutorialStepName === 'fourthStep') { setShowTutorialStep(true) }
  }, [])

  return (
    <div className='new-task-modal'>
      <div className='new-task-modal-body'>
        <div onClick={close}>
          <i className='new-task-modal-exit-icon far fa-times' />
        </div>
        <h2> {Object.entries(taskToEdit).length ? 'EDITAR ACTIVIDAD' : 'AÑADIR UNA ACTIVIDAD'}</h2>
        <div className='new-task-modal-top'>
          <div className='input-group'>
            <input type='text' name='title' placeholder='TÍTULO' value={task.title} onChange={handleInputChange} onInput={handleInputChange} onPaste={handleInputChange} autoComplete='on' />
          </div>
          <div className='input-group'>
            <input type='date' name='date' onChange={handleInputChange} value={task.date} />
          </div>
        </div>
        <div className='description-container'>
          <textarea className='description-area' placeholder='DESCRIPCIÓN' name='description' onChange={handleInputChange} onInput={handleInputChange} value={task.description} />
        </div>
        <div className='select-column-container'>
          <select className='select-column' name='selectedColumn' onChange={e => e.target.value !== 'ELIGE UNA COLUMNA DONDE GUARDAR LA ACTIVIDAD' && handleInputChange(e)}>
            <option>ELIGE UNA COLUMNA DONDE GUARDAR LA ACTIVIDAD</option>
            {task.columnsForTask.map((column, i) => (
              <option key={UUIDGenerator()} selected={column === task.selectedColumn} value={column}>{`#${i + 1} - ${column}`} </option>
            ))}
          </select>
        </div>
        <div className='files-container'>
          <div className='file-drop-container'>
            <div className='file-drop'>
              <div className='upload-file-button'>
                <div onDrop={handleFilesUpload} onDragOver={preventDefaults}>
                  <i className='upload-file-icon fal fa-upload' />
                </div>
                <input type='file' multiple accept='.xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf' onChange={handleFilesUpload} />
              </div>
              <p>Click en el botón de arriba para subir un archivo</p>
              <p>Arrastra y suelta archivos para subirlos</p>
            </div>
          </div>
          <div className='file-box'>
            {task.files.map((file, i) => (
              <div className='file-slot' key={i + 1}>
                {file.empty
                  ? <label className='empty'>- VACÍO -</label>
                  : <FileUploaded
                    fileColor={fileColors[i]}
                    fileUpIcon={`file-up-icon far fa-file-${fileExtensions[getFromFilenamePath(file.name).fileExtension]}`}
                    fileUpName={file.name}
                    handleRemove={() => removeTaskFile(i)}
                  />}
              </div>
            ))}
          </div>
        </div>
        <div className='new-task-modal-bottom'>
          <button className="btn delete activeBtn">BORRAR</button>
          {/* <ButtonGroup
            buttonText='DESCARTAR' handleClick={close}
          /> */}
          <ButtonGroup
            buttonText='GUARDAR'
            canSubmit={canSaveTask}
            handleClick={createOrUpdateTask}
            loading={isLoadingTask}
          />
        </div>
      </div>
      {showTutorialStep && <TutorialStepFour onJump={handleSkipTutorial} onAccept={handleActiveFifthTutorial} />}

    </div>
  )
}

const mapStateToProps = state => ({
  activeTutorialStepName: state.activeTutorialStepName,
  columnsForTask: state.taskColumns
    .filter(taskColumn => taskColumn.name)
    .map(taskColumn => taskColumn.name),
  token: state.token,
  userAlias: state.userData.alias,
  taskToEdit: state.taskToEdit
})

const mapDispatchToProps = {
  setTaskToEdit
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskModal)
