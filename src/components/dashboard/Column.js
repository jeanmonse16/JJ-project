import React from 'react'
import { connect } from 'react-redux'
import ColumnTitle from './ColumnTitle'
import Card from './Card'
import UUIDGenerator from '../../_utils/UUID_Generator'

const Column = (props) => {
  const { getUserProfile = () => null, name, id = null, tasks = [], handleEvent = (e) => null, handleNewTaskButtonClick, setColumnName = () => null, inputId } = props
  return (
    <div className='column-container'>
      {
        tasks.length
          ? <>
            <ColumnTitle
              title={name} titleId={inputId}
            />
            <label className='column-number'>Columna #{id}</label>
            <button onClick={handleNewTaskButtonClick}><i className='new-task-icon far fa-plus' /></button>
            {
              tasks.map((task, i) => (
                <Card key={UUIDGenerator()} getUserProfile={getUserProfile} cardTitle={task.title} cardNumber={task.task_id} date={task.expires_at} description={task.description} files={task.files} taskToEdit={task} openTaskModal={handleNewTaskButtonClick} />
              ))
            }
          </>
          : <> <ColumnTitle title='' titleId={inputId} handleEvent={handleEvent} setColumnName={setColumnName} />
            <button onClick={() => {
              handleEvent('onClick', props.activeTutorialStepName)
              handleNewTaskButtonClick()
            }}
            ><i className='new-task-icon far fa-plus' />
            </button>
          </>
        /* Caso Al crear la columna:
                <ColumnTitle
                    title="title-column-1"
                    titleId="title-column-1"
                />
                <label className="column-number">Columna #{columnNumber}</label>
                <button><i className="new-task-icon far fa-plus"></i></button>
        */}
    </div>
  )
}

const mapStateToProps = state => ({
  activeTutorialStepName: state.activeTutorialStepName
})

export default connect(mapStateToProps, null)(Column)
