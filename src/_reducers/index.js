import { activateAccount } from '../_services'

export default (state, action) => {
  if (action.type === 'SET_USER_SESSION') {
    return {
      ...state,
      userSession: () => action.payload.session,
      token: action.payload.token
    }
  } else if (action.type === 'LOG_OUT_USER') {
    window.localStorage.removeItem('token')
    return {
      ...state,
      userSession: () => !!action.payload
    }
  } else if (action.type === 'SET_USER_PROFILE') {
    return {
      ...state,
      userData: action.payload
    }
  } else if (action.type === 'SET_ACTIVE_TUTORIAL_STEP') {
    if (action.payload) {
      window.localStorage.setItem('tutorialStepName', action.payload)
    } else {
      window.localStorage.removeItem('tutorialStepName')
    }
    return {
      ...state,
      activeTutorialStepName: action.payload
    }
  } else if (action.type === 'SET_TASK_COLUMNS') {
    return {
      ...state,
      taskColumns: action.payload
    }
  } else if (action.type === 'ADD_TASK_COLUMN') {
    const clonedAddTaskColumn = state.taskColumns[state.taskColumns.length - 1]
    const updatedTaskColumns = [...state.taskColumns, clonedAddTaskColumn]
    updatedTaskColumns[updatedTaskColumns.length - 2] = action.payload
    return {
      ...state,
      taskColumns: updatedTaskColumns// [action.payload, ...state.taskColumns]
    }
  } else if (action.type === 'SET_COLUMN_NAME') {
    return {
      ...state,
      taskColumns: state.taskColumns
        .map(taskColumn => taskColumn.id === action.payload.columnId
          ? {
            ...taskColumn,
            name: action.payload.columnName
          }
          : taskColumn
        )
    }
  } else if (action.type === 'SET_TASK_TO_EDIT') {
    return {
      ...state,
      taskToEdit: action.payload
    }
  } else {
    return state
  }
}
