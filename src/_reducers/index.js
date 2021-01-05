export default (state, action) => {
  if (action.type === 'SET_USER_SESSION') {
    return {
      ...state,
      userSession: () => action.payload.session,
      token: action.payload.token
    }
  } else if (action.type === 'LOG_OUT_USER') {
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
    return {
      ...state,
      tutorialStepIndex: action.payload
    }
  } else {
    return state
  }
}
