export default (state, action) => {
  if (action.type === 'SET_USER_SESSION') {
    return {
      ...state,
      userSession: () => !!action.payload
    }
  } else {
    return state
  }
}
