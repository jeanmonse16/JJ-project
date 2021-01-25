import React from 'react'
import { connect } from 'react-redux'

const ColumnTitle = (props) => {
  const { title, titleId, handleEvent, setColumnName = () => null } = props
  return (
    <div className='column-title-cotainer'>
      <input type='text' id={titleId} defaultValue={title} placeholder='Título columna #1' onBlur={() => handleEvent('onBlur', props.activeTutorialStepName)} onInput={setColumnName} />
      <i className='edit-title-icon fal fa-pencil-alt' />
    </div>
  )
}

const mapStateToProps = state => ({
  activeTutorialStepName: state.activeTutorialStepName
})

export default connect(mapStateToProps, null)(ColumnTitle)
