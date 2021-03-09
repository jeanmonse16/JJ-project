export const setUserSession = (payload) => ({
  type: 'SET_USER_SESSION',
  payload
})

export const logOutUser = (payload) => ({
  type: 'LOG_OUT_USER',
  payload
})

export const setUserProfile = (payload) => ({
  type: 'SET_USER_PROFILE',
  payload
})

export const setActiveTutorialStep = (payload) => ({
  type: 'SET_ACTIVE_TUTORIAL_STEP',
  payload
})

export const setTaskColumns = (payload) => ({
  type: 'SET_TASK_COLUMNS',
  payload
})

export const addTaskColumn = (payload) => ({
  type: 'ADD_TASK_COLUMN',
  payload
})

export const setColumnName = payload => ({
  type: 'SET_COLUMN_NAME',
  payload
})

export const setTaskToEdit = payload => ({
  type: 'SET_TASK_TO_EDIT',
  payload
})
